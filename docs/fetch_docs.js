const fs = require('fs');
const os = require('os');
const https = require('https');
const path = require('path');

const pages = JSON.parse(fs.readFileSync(os.homedir() + '/ecd_all_pages.json', 'utf8'));
const tocTree = JSON.parse(fs.readFileSync(os.homedir() + '/ecd_toc.json', 'utf8'));
const fullToc = JSON.parse(fs.readFileSync(os.homedir() + '/toctree.json', 'utf8'));

// Find the Electronics parent node
function findNode(nodes, id) {
  const arr = Array.isArray(nodes) ? nodes : [nodes];
  for (const n of arr) {
    if (n.id === id) return n;
    if (n.children) { const f = findNode(n.children, id); if (f) return f; }
    if (n.books) { const f = findNode(n.books, id); if (f) return f; }
  }
  return null;
}

const ecdRoot = findNode(fullToc, 'Fusion-ECAD_id');

const BASE = 'https://help.autodesk.com';
const OUTDIR = path.join(process.cwd(), 'docs', 'fusion_electronics');
const CONCURRENCY = 10;

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'Accept-Language': 'ja' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetch(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function htmlToMarkdown(html) {
  // Extract body content
  let content = html;
  const bodyMatch = html.match(/<div class="body_content"[^>]*>([\s\S]*?)(?:<\/div>\s*<\/body>|$)/i);
  if (bodyMatch) content = bodyMatch[1];

  return content
    // Remove script/style tags
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<link[^>]*>/gi, '')
    // Headers
    .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '# $1\n\n')
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '## $1\n\n')
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '### $1\n\n')
    .replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '#### $1\n\n')
    // Bold/Italic
    .replace(/<(strong|b)>([\s\S]*?)<\/\1>/gi, '**$2**')
    .replace(/<(em|i)>([\s\S]*?)<\/\1>/gi, '*$2*')
    // Lists
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n')
    .replace(/<\/?[ou]l[^>]*>/gi, '\n')
    // Table handling
    .replace(/<table[^>]*>/gi, '\n')
    .replace(/<\/table>/gi, '\n')
    .replace(/<tr[^>]*>/gi, '| ')
    .replace(/<\/tr>/gi, ' |\n')
    .replace(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/gi, '$1 | ')
    // Paragraphs and breaks
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '$1\n\n')
    .replace(/<div[^>]*class="[^"]*note[^"]*"[^>]*>([\s\S]*?)<\/div>/gi, '> **Note:** $1\n\n')
    .replace(/<div[^>]*class="[^"]*tip[^"]*"[^>]*>([\s\S]*?)<\/div>/gi, '> **Tip:** $1\n\n')
    .replace(/<div[^>]*class="[^"]*warning[^"]*"[^>]*>([\s\S]*?)<\/div>/gi, '> **Warning:** $1\n\n')
    // Images - keep src
    .replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>/gi, '![$2]($1)')
    .replace(/<img[^>]*src="([^"]*)"[^>]*\/?>/gi, '![]($1)')
    // Links
    .replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)')
    // Remove remaining tags
    .replace(/<\/?[^>]+(>|$)/g, '')
    // Decode entities
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#160;/g, ' ')
    // Clean up whitespace
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// Build TOC structure as markdown
function buildTocMd(node, depth = 0) {
  let md = '';
  const indent = '  '.repeat(depth);
  if (node.ttl) {
    const anchor = node.id ? node.id.toLowerCase() : '';
    if (node.ln) {
      md += `${indent}- [${node.ttl}](pages/${node.id}.md)\n`;
    } else {
      md += `${indent}- **${node.ttl}**\n`;
    }
  }
  if (node.children) {
    for (const ch of node.children) {
      md += buildTocMd(ch, node.ttl ? depth + 1 : depth);
    }
  }
  return md;
}

async function processPage(page, idx) {
  const url = BASE + page.ln;
  try {
    const html = await fetch(url);
    const md = htmlToMarkdown(html);
    const filePath = path.join(OUTDIR, 'pages', `${page.id}.md`);
    const header = `# ${page.ttl}\n\n`;
    fs.writeFileSync(filePath, header + md);
    process.stdout.write(`\r[${idx + 1}/${pages.length}] ${page.id}`);
    return true;
  } catch (e) {
    console.error(`\nError: ${page.id}: ${e.message}`);
    return false;
  }
}

async function main() {
  // Create directories
  fs.mkdirSync(path.join(OUTDIR, 'pages'), { recursive: true });

  // Generate index
  const tocMd = `# Fusion Electronics ドキュメント\n\nオフラインドキュメント (${pages.length}ページ)\n\n## 目次\n\n${buildTocMd(ecdRoot)}`;
  fs.writeFileSync(path.join(OUTDIR, 'INDEX.md'), tocMd);

  // Fetch all pages with concurrency limit
  let idx = 0;
  let success = 0;
  let fail = 0;

  async function worker() {
    while (idx < pages.length) {
      const i = idx++;
      const ok = await processPage(pages[i], i);
      if (ok) success++; else fail++;
    }
  }

  const workers = [];
  for (let i = 0; i < CONCURRENCY; i++) {
    workers.push(worker());
  }
  await Promise.all(workers);

  console.log(`\n\nDone! ${success} pages fetched, ${fail} failed.`);
}

main();
