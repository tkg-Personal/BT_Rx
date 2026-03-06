# 組み込み

# 組み込み

組み込みは、追加情報を提供してデータ操作を可能にする、定数、変数、関数、および文です。

## 組み込み定数

組み込み定数は、最大推奨名の長さ、フラグなどのオブジェクト パラメータに関する情報を提供するために使用されます。多くのオブジェクト タイプには、その特定オブジェクトの組み込み定数が一覧表示されている独自の定数セクションがあります(UL_PIN などを参照)。

さまざまなオブジェクト タイプに対して一覧表示される定数に加えて、以下の組み込み定数が定義されています。

| 
 | 
 | 
 |

| 
EAGLE_VERSION | 
EAGLE プログラム バージョン番号(int) | 
 |

| 
EAGLE_RELEASE | 
EAGLE プログラム リリース番号(int) | 
 |

| 
EAGLE_SIGNATURE | 
EAGLE のプログラム名、バージョン、および著作権情報が含まれている文字列 | 
 |

| 
EAGLE_PATH | 
EAGLE 実行可能ファイルの絶対パスが含まれている文字列 | 
 |

| 
EAGLE_DIR | 
EAGLE インストールのフォルダが含まれている文字列($EAGLEDIR) | 
 |

| 
EAGLE_HOME | 
EAGLE 起動時のユーザのホーム フォルダが含まれている文字列($HOME) | 
 |

| 
eagle_epf | 
現在使用されている eagle.epf の絶対パスが含まれている文字列 | 
 |

| 
OS_SIGNATURE | 
オペレーティング システムの署名が含まれている文字列(Mac...、Windows...、Linux など) | 
 |

| 
REAL_EPSILON | 
1.0 + REAL_EPSILON != 1.0 となるような最小の正の実数 | 
 |

| 
REAL_MAX | 
可能な最大の実数値 | 
 |

| 
REAL_MIN | 
有効な最小の(正の)実数値表現可能な最小の数値は -REAL_MAX です。 | 
 |

| 
INT_MAX | 
可能な最大の整数値 | 
 |

| 
INT_MIN | 
可能な最小の整数値 | 
 |

| 
PI | 
「π」の値(3.14...、real) | 
 |

| 
使用法 | 
#usage ディレクティブからのテキストが含まれている文字列 | 
 |

これらの組み込み定数には、フォルダ ダイアログで定義されたフォルダ パスが含まれています。これらのパスでは、特殊な変数($HOME と $EAGLEDIR)は実際の値に置き換えられています。各パスは複数のフォルダで構成される可能性があるため、これらの定数は各メンバに個別のフォルダを持つ文字列配列です。最初の空のメンバで、パスの終了を示します。

path_lbr[]    Libraries
path_dru[]    Design Rules
path_ulp[]    User Language Programs
path_scr[]    Scripts
path_cam[]    CAM Jobs
path_epf[]    Projectsこれらの定数を使用して完全なファイル名を作成する場合は、次のように、フォルダ区切り文字を使用する必要があります。

string s = path_lbr[0] + '/' + "mylib.lbr";USE コマンドで現在使用しているライブラリ:

used_libraries[]  ## 組み込み変数

組み込み変数は、実行時に情報を提供するために使用されます。

int argc    number of arguments given to the RUN command
string argv[] arguments given to the RUN command (argv[0] is the full ULP file name)## Builtin Functions

組み込み関数は、書式設定された文字列の出力やデータ配列の並べ替えなど、特定のタスクを実行するために使用されます。

また、ユーザ独自の関数を記述し、ユーザ言語プログラムを構成するために使用することもできます。

組み込み関数は以下のカテゴリにまとめられています。

- 文字関数

- ファイル処理関数

- 数学関数

- その他の関数

- ネットワーク関数

- 出力関数

- 文字列関数

- 時間関数

- オブジェクト関数

- XML 関数

すべての組み込み関数のアルファベット順リファレンス:

abs()
acos()
asin()
atan()
ceil()
cfgget()
cfgset()
clrgroup()
country()
cos()
exit()
exp()
fdlsignature()
filedir()
fileerror()
fileext()
fileglob()
filename()
fileread()
filesetext()
filesize()
filetime()
floor()
frac()
inch2u()
ingroup()
isalnum()
isalpha()
iscntrl()
isdigit()
isgraph()
islower()
isprint()
ispunct()
isspace()
isupper()
isxdigit()
language()
log()
log10()
lookup()
max()
mic2u()
mil2u()
min()
mm2u()
neterror()
netget()
netpost()
palette()
pow()
printf()
round()
setgroup()
setvariant()
sin()
sleep()
sort()
sprintf()
sqrt()
status()
strchr()
strjoin()
strlen()
strlwr()
strrchr()
strrstr()
strsplit()
strstr()
strsub()
strtod()
strtol()
strupr()
strxstr()
system()
t2day()
t2dayofweek()
t2hour()
t2minute()
t2month()
t2second()
t2string()
t2year()
tan()
time()
tolower()
toupper()
trunc()
u2inch()
u2mic()
u2mil()
u2mm()
variant()
xmlattribute()
xmlattributes()
xmlelement()
xmlelements()
xmltags()
xmltext()#### 文字関数

文字関数は、単一文字を操作するために使用します。

次の文字関数を使用できます。

isalnum()
isalpha()
iscntrl()
isdigit()
isgraph()
islower()
isprint()
ispunct()
isspace()
isupper()
isxdigit()
tolower()
toupper()**is...()**

*関数*

文字が指定したカテゴリに属しているかどうかを確認します。

*構文*

int isalnum(char c);
int isalpha(char c);
int iscntrl(char c);
int isdigit(char c);
int isgraph(char c);
int islower(char c);
int isprint(char c);
int ispunct(char c);
int isspace(char c);
int isupper(char c);
int isxdigit(char c);*戻り値*

is... 関数は、指定された文字がカテゴリに属している場合はゼロ以外の値を返し、そうでない場合はゼロを返します。

*文字のカテゴリ*

isalnum   letters (A to Z or a to z) or digits (0 to 9)
isalpha   letters (A to Z or a to z)
iscntrl   delete characters or ordinary control characters (0x7F or 0x00 to 0x1F)
isdigit   digits (0 to 9)
isgraph   printing characters (except space)
islower   lowercase letters (a to z)
isprint   printing characters (0x20 to 0x7E)
ispunct   punctuation characters (iscntrl or isspace)
isspace   space, tab, carriage return, new line, vertical tab, or formfeed  (0x09 to 0x0D, 0x20)
isupper   uppercase letters (A to Z)
isxdigit  hex digits (0 to 9, A to F, a to f)*例*

char c = 'A';
if (isxdigit(c))
   printf("%c is hex\n", c);
else
   printf("%c is not hex\n", c);**to...()**

*関数*

文字を大文字または小文字に変換します。

*構文*

char tolower(char c);
char toupper(char c);*戻り値*

*tolower* 関数は、c が大文字の場合、変換後の文字を返します。その他の文字は変更されずに返されます。*toupper* 関数は、c が小文字の場合、変換後の文字を返します。その他の文字は変更されずに返されます。

strupr、strlwr も参照してください

#### ファイル処理関数

ファイル名処理関数は、ファイル名、サイズ、およびタイムスタンプを操作するために使用します。

ファイルへの書き込み方法については、*output()* を参照してください。

**fileerror()**

*関数*

I/O 操作のステータスを返します。

*構文*

int fileerror();*戻り値*

*fileerror* 関数は、問題がなければ 0 を返します。

output、printf、fileread も参照してください

*fileerror* は、この関数を前回呼び出した後で実行された I/O 操作のステータスを確認し、問題がなければ 0 を返します。I/O 操作によってエラーが発生した場合は、0 以外の値が返されます。

I/O 操作を実行する前に *fileerror* を呼び出して前のエラー状態をリセットし、I/O 操作の後で再度呼び出して、正常に終了したかどうかを確認する必要があります。

*fileerror* が 0 以外の(つまり、エラーを示す)値を返す場合、適切なエラー メッセージが既にユーザに対して表示されています。

*例*

fileerror();
output("file.txt", "wt") {
  printf("Test\n");
  }
if (fileerror())
   exit(1);**fileglob()**

*関数*

フォルダ検索を実行します。

*構文*

int fileglob(string &array[], string pattern);*戻り値*

*fileglob* 関数は、配列にコピーされたエントリの数を返します。

dlgFileOpen()、dlgFileSave() も参照してください

*fileglob* は *pattern* を使用してフォルダ検索を実行します。

*pattern* には、ワイルドカード文字として「*」と「?」を含めることができます。*pattern* が「/」で終わる場合、指定したフォルダの内容が返されます。

結果の配列内で、「/」で終わる名前はフォルダ名です。

配列はアルファベット順に並べ替えられ、フォルダが最初に表示されます。

特別なエントリ「.」と「..」(現在のフォルダと親フォルダ)は配列で返されません。

*pattern* が一致しない場合、または指定したフォルダを検索する権限がない場合、結果の配列は空になります。

Windows ユーザに対する注: 配列内のフォルダの区切り文字は常にスラッシュです。これにより、ユーザ言語プログラムがプラットフォームとは独立して動作するようになります。パターンでは、バックスラッシュ(「¥」)もフォルダ区切り文字として扱われます。

Windows でファイル名を並べ替える際には、大文字と小文字が区別されます。

*例*

string a[];
int n = fileglob(a, "*.brd");**ファイル名関数**

*関数*

ファイル名を個別の部分に分割します。

*構文*

string filedir(string file);
string fileext(string file);
string filename(string file);
string filesetext(string file, string newext);*戻り値*

*filedir* は、file のフォルダを返します(Windows のドライブ文字を含む)。

*fileext* は、file の拡張子を返します。

*filename* は、file のファイル名を返します(拡張子を含む)。

*filesetext* は、拡張子を newext に設定した file を返します。

「ファイルデータ関数」も参照してください

*例*

if (board) board(B) {
  output(filesetext(B.name, ".out")) {
    ...
    }
  }**ファイルデータ関数**

*関数*

ファイルのタイムスタンプとサイズを取得します。

*構文*

int filesize(string filename);
int filetime(string filename);*戻り値*

*filesize* は、指定されたファイルのサイズ(バイト単位)を返します。

*filetime* は、指定されたファイルのタイムスタンプ(秒単位)を返します。形式は時間関数と互換性があります。

time、「ファイル名関数」も参照してください

*例*

board(B)
  printf("Board: %s\nSize: %d\nTime: %s\n",
         B.name, filesize(B.name),
         t2string(filetime(B.name)));**ファイル入力関数**

ファイル入力関数は、ファイルからデータを読み込むために使用されます。次のファイル入力を使用できます。

- fileread()

ファイルへの書き込み方法については、output() を参照してください。

**fileread()**

*関数*

ファイルからデータを読み込みます。

*構文*

int fileread(dest, string file);*戻り値*

*fileread* は、ファイルから読み込まれたオブジェクトの数を返します。

戻り値の実際の意味は、*dest* のタイプによって異なります。

lookup、strsplit、fileerror も参照してください

*dest* が文字配列の場合、ファイルは未加工バイナリ データとして読み込まれ、戻り値は文字配列に読み込まれたバイト数(ファイル サイズと同じ)を反映します。

*dest* が文字列配列の場合、ファイルはテキスト ファイル(配列メンバごとに 1 行)として読み込まれ、戻り値は文字列配列に読み込まれた行数になります。改行文字は除去されます。

*dest* が文字列の場合、ファイル全体がその文字列に読み込まれ、戻り値はその文字列の長さになります(オペレーティング システムが「改行」文字の代わりに「cr/lf」を使用してテキスト ファイルを保存する場合、これは必ずしもファイル サイズに等しいとは限りません)。

*例*

char b[];
int nBytes = fileread(b, "data.bin");
string lines[];
int nLines = fileread(lines, "data.txt");
string text;
int nChars = fileread(text, "data.txt");#### 数理関数

数理関数は、数理演算を実行する場合に使用します。次の数理関数を使用できます。

abs()
acos()
asin()
atan()
ceil()
cos()
exp()
floor()
frac()
log()
log10()
max()
min()
pow()
round()
sin()
sqrt()
trunc()
tan()*エラー メッセージ*

数理関数の呼び出しの引数がエラーになる場合、エラー メッセージには引数の実際の値が表示されます。したがって、次の文では、

real x = -1.0;
real r = sqrt(2 * x);次のエラー メッセージが表示されます。

Invalid argument in call to 'sqrt(-2)'**絶対値関数、最大関数、最小関数**

*関数*

絶対値関数、最大関数、最小関数。

*構文*

type abs(type x);
type max(type x, type y);
type min(type x, type y);*戻り値*

*abs* は、x の絶対値を返します。

*max* は、x と y の最大値を返します。

*min* は、x と y の最小値を返します。

これらの関数の戻り値のタイプは、引数の(大きい方の)タイプと同じです。*type* は char、int、または real のいずれかである必要があります。

*例*

real x = 2.567, y = 3.14;
printf("The maximum is %f\n", max(x, y));**丸め関数**

*関数*

丸め関数。

*構文*

real ceil(real x);
real floor(real x);
real frac(real x);
real round(real x);
real trunc(real x);*戻り値*

*ceil* は、x より小さくない最小の整数を返します。

*floor* は、x より大きくない最大の整数を返します。

*frac* は、x の小数部を返します。

*round* は、x を最も近い整数に丸めて返します。

*trunc* は、x の整数部を返します。

*例*

real x = 2.567;
printf("The rounded value of %f is %f\n", x, round(x));**三角関数**

*関数*

三角関数。

*構文*

real acos(real x);
real asin(real x);
real atan(real x);
real cos(real x);
real sin(real x);
real tan(real x);*戻り値*

*acos* は x のアーク コサインを返します。

*asin* は x のアーク サインを返します。

*atan* は x のアーク タンジェントを返します。

*cos* は x のコサインを返します。

*sin* は x のサインを返します。

*tan* は x のタンジェントを返します。

*定数*

PI: 「π」の値(3.14...)

> **Note:** 
注:

 角度はラジアン単位で指定します。

*例*

real x = PI / 2;
printf("The sine of %f is %f\n", x, sin(x));**指数関数**

*関数*

指数関数。

*構文*

real exp(real x);
real log(real x);
real log10(real x);
real pow(real x, real y);
real sqrt(real x);*戻り値*

*exp* は指数 e の x 乗を返します。*log* は x の自然対数を返します。*log10* は底を 10 とする x の対数を返します。*pow* は x の y 乗を返します。*sqrt* は x の平方根を返します。

*例*

real x = 2.1;
printf("The square root of %f is %f\n", x, sqrt(x));
printf("The 3rd root of %f is %f\n", x, pow(x, 1.0/3));#### その他の関数

その他の関数は、さまざまなタスクを実行するために使用されます。

次のその他の関数を使用できます。

- 設定パラメータ

- country()

- exit()

- fdlsignature()

- language()

- lookup()

- palette()

- sort()

- status()

- system()

- 単位の変換

**設定パラメータ**

*関数*

設定パラメータを保存および取得します。

*構文*

string cfgget(string name[, string default]);
void cfgset(string name, string value);*戻り値*

*cfgget* は、指定された名前で保存されたパラメータの値を返します。このようなパラメータが保存されていない場合でも、任意指定の既定値が返されます(既定値が指定されていない場合は、空の文字列)。cfgget 関数は、以前に cfgset() への呼び出しで保存された値を取得します。

*cfgset* 関数は、指定された名前のパラメータを指定された値に設定します。

名前に有効な文字は、「A」-「Z」、「a」-「z」、「0」-「9」、「.」、「_」です。

パラメータ名では大文字小文字が区別されます。

パラメータは、ユーザの *eaglerc* ファイルに保存されます。異なるユーザ言語プログラムで同じパラメータ名を使用していた場合に互いのパラメータが上書きされないようにするために、パラメータ名の先頭に ULP の名前を付けることをお勧めします。たとえば、MyParam という名前のパラメータを使用する *mytool.ulp* という名前の ULP では、次の名前でパラメータを保存します。

mytool.MyParam設定パラメータは、EAGLE のその他のユーザ固有パラメータもすべて含まれている *eaglerc* ファイルに保存されるため、*cfgget()* および *cfgset()* を使用して EAGLE のパラメータにアクセスすることもできます。ULP のパラメータが EAGLE のパラメータと衝突しないようにするには、次のように、EAGLE のパラメータの前に「EAGLE:」を付ける必要があります。

EAGLE:Option.XrefLabelFormatEAGLE のすべての内部パラメータと、それらのパラメータがどのように *eaglerc* ファイルに保存されているかに関するドキュメントはないことに注意してください。また、これらのパラメータを変更する場合は、十分に注意してください。*eaglerc* ファイル自体の場合と同様に、これらのパラメータは、自分が何を行っているかわかっている場合にしか操作しないでください。一部の EAGLE パラメータでは、変更を有効にするために EAGLE の再起動が必要になる場合があります。*eaglerc* ファイルでは、ユーザ言語パラメータは「ULP:」という接頭辞を付けて保存されます。したがって、この接頭辞は、次のように、ユーザ言語パラメータ名の前に配置することもできます。

ULP:mytool.MyParam*例*

string MyParam = cfgget("mytool.MyParam", "SomeDefault");
MyParam = "OtherValue";
cfgset("mytool.MyParam", MyParam);**country()**

*関数*

使用中のシステムの国コードを返します。

*構文*

string country();*戻り値*

*country* は、現在のシステムで使用されている国を識別する 2 つの大文字で構成される文字列を返します。このような国の設定を決定できない場合は、既定の「US」が返されます。

language も参照してください

*例*

dlgMessageBox("Your country code is: " + country());**exit()**

*関数*

ユーザ言語プログラムを終了します。

*構文*

void exit(int result);
void exit(string command);RUN も参照してください

exit 関数は、ユーザ言語プログラムの実行を終了します。

整数の結果が指定された場合は、プログラムの戻り値として使用されます。*string command* を指定すると、そのコマンドは、コマンド ラインで RUN コマンドの直後に入力されたかのように実行されます。その場合、ULP の戻り値は EXIT_SUCCESS に設定されます。

*定数*

EXIT_SUCCESS    return value for successful program execution (value 0)
EXIT_FAILURE    return value for failed program execution (value -1)**fdlsignature()**

*関数*

Premier Farnell's Design Link のデジタル署名を計算します。

*構文*

string fdlsignature(string s, string key);fdlsignature 関数は、Premier Farnell's Design Link インタフェースにアクセスしてデジタル署名を計算する際に使用されます。

**language()**

*関数*

使用中のシステムの言語コードを返します。

*構文*

string language();*戻り値*

*language* は、現在のシステムで使用されている言語を識別する 2 つの小文字で構成される文字列を返します。このような言語設定を決定できない場合は、既定の「en」が返されます。

country も参照してください

language 関数を使用すると、現在のシステムで使用されている言語に応じて、ULP が異なるメッセージ文字列を使用するようにすることができます。

次の例では、ULP で使用されるすべての文字列が文字列配列 *I18N[]* にリストされており、この ULP でサポートされるさまざまな言語コードが含まれている文字列が先頭に記述されています。各文字列の個々の部分を区切るために使用されている垂直タブ文字(lookup 関数では重要)と、カンマを使用して文字列を区切っていることに注意してください。実際の処理は関数 *tr()* で行われ、指定した文字列の翻訳バージョンを返します。元の文字列が *I18N* 配列に見つからない場合、または現在の言語に翻訳されていない場合、元の文字列が翻訳されずに使用されます。

*I18N* 配列に定義される最初の言語は、ULP 全体で使用される文字列が記述される言語である必要があります。通常この言語には、プログラムにアクセスできるユーザ数を最大にするために、英語が使用されます。

*例*

string I18N[] = {
  "en\v"
  "de\v"
  "it\v"
  ,
  "I18N Demo\v"
  "Beispiel f?r Internationalisierung\v"
  "Esempio per internazionalizzazione\v"
  ,
  "Hello world!\v"
  "Hallo Welt!\v"
  "Ciao mondo!\v"
  ,
  "+Ok\v"
  "+Ok\v"
  "+Approvazione\v"
  ,
  "-Cancel\v"
  "-Abbrechen\v"
  "-Annullamento\v"
  };
int Language = strstr(I18N[0], language()) / 3;
string tr(string s)
{
  string t = lookup(I18N, s, Language, '\v');
  return t ? t : s;
}
dlgDialog(tr("I18N Demo")) {
  dlgHBoxLayout dlgSpacing(350);
  dlgLabel(tr("Hello world!"));
  dlgHBoxLayout {
    dlgPushButton(tr("+Ok")) dlgAccept();
    dlgPushButton(tr("-Cancel")) dlgReject();
    }
  };**lookup()**

*関数*

文字列配列のデータを検索します。

*構文*

string lookup(string array[], string key, int field_index[, char separator]);
string lookup(string array[], string key, string field_name[, char separator]);*戻り値*

*lookup* は、*field_index* または *field_name* で識別されるフィールドの値を返します。フィールドが存在しない場合、または key に一致する文字列が見つからない場合は、空の文字列が返されます。

fileread、strsplit も参照してください

*lookup()* で使用できる配列はテキストの文字列で構成され、各文字列は 1 つのデータ レコードを表します。

各データ レコードには任意の数のフィールドが含まれ、区切り文字によって区切られます(既定は「\t」、タブ)。レコードの最初のフィールドがキーとして使用され、番号は 0 になります。

すべてのレコードに一意のキー フィールドを設定する必要があり、どのキー フィールドも空にすることはできません。そうしないと、検索するレコードは定義されません。

配列内の最初の文字列に「ヘッダ」レコード(つまり、各フィールドがその内容を説明するレコード)が含まれている場合、field_name 文字列を指定して lookup を使用すると、そのフィールドのインデックスが自動的に決定されます。これにより、目的のデータが含まれているフィールドのインデックスが正確にわからなくても、lookup 関数を使用することができます。最初のレコードに実際にヘッダ情報が含まれていることを確認するのは、ユーザの判断になります。

lookup() 呼び出しの key パラメータが空の文字列である場合は、配列の最初の文字列が使用されます。これにより、必要なフィールド名を持つヘッダ レコードがあるかどうかをプログラムが判断できます。

フィールドに区切り文字が含まれている場合、そのフィールドは二重引用符で囲む必要があります(たとえば、区切り文字としてセミコロン(「;」)が使用されていると想定すると、"abc;def")。同じことが、フィールドに二重引用符(")が含まれる場合にもあてはまります。この場合、フィールド内の二重引用符を重ねる必要があります(たとえば、"abc;""def"";ghi" で、これは abc;"def";ghi を示します)。

既定の「タブ」区切り文字を使用することをお勧めします。この区切り文字には、このような問題はありません(フィールドにタブを含めることはできません)。

次に、わかりやすくするために区切り文字として「;」を使用したデータ ファイルの例を示します。

Name;Manufacturer;Code;Price
7400;Intel;I-01-234-97;$0.10
68HC12;Motorola;M68HC1201234;$3.50*例*

string OrderCodes[];
if (fileread(OrderCodes, "ordercodes") > 0) {
   if (lookup(OrderCodes, "", "Code", ';')) {
      schematic(SCH) {
        SCH.parts(P) {
          string OrderCode;
          // both following statements do exactly the same:
          OrderCode = lookup(OrderCodes, P.device.name, "Code", ';');
          OrderCode = lookup(OrderCodes, P.device.name, 2, ';');
          }
        }
      }
   else
      dlgMessageBox("Missing 'Code' field in file 'ordercodes');
   }**palette()**

*関数*

カラー パレット情報を返します。

*構文*

int palette(int index[, int type]);*戻り値*

palette 関数は、0xaarrggbb 形式の整数の ARGB 値、または現在使用されているパレットのタイプを返します(index の値によって異なる)。

palette 関数は、指定されたインデックス(0 ～ PALETTE_ENTRIES-1 の範囲内)の色の ARGB 値を返します。*type* が指定されていない(または -1 の)場合、現在のエディタ ウィンドウに割り当てられているパレットが使用されます。それ以外の場合、*type* は使用するカラー パレットを指定します(PALETTE_BLACK、PALETTE_WHITE、または PALETTE_COLORED)。index に特別な値 -1 を指定すると、この関数は、エディタ ウィンドウで現在使用されているパレットの*タイプ*を返します。

*index* または *type* が範囲外の場合は、エラー メッセージが表示され、ULP は終了します。

*定数*

| 
 | 
 | 
 |

| 
PALETTE_TYPES | 
パレット タイプの数(3) | 
 |

| 
PALETTE_BLACK | 
黒色の背景パレット(0) | 
 |

| 
PALETTE_WHITE | 
白色の背景パレット(1) | 
 |

| 
PALETTE_COLORED | 
色付きの背景パレット(2) | 
 |

| 
PALETTE_ENTRIES | 
パレットごとの色の数(64) | 
 |

**sleep()**

*関数*

指定された秒数スリープします。

*構文*

void sleep(int seconds);time() も参照してください

sleep 関数は、ULP プログラムの実行を指定された秒数だけ遅らせます。

**sort()**

*関数*

配列または配列のセットを並べ替えます。

*構文*

void sort(int number, array1[, array2,...]);sort 関数は、指定された array1 を直接並べ替えるか、配列のセット(array2 で始まる)を並べ替えます。この場合、array1 はポインタ配列として使用される int 型の配列であると見なされます。

いずれの場合も、number 引数で配列の項目数を定義します。

*1 つの配列を並べ替える*

sort 関数が 1 つの配列で呼び出された場合、次の例に示すように、その配列が直接並べ替えられます。

string A[];
int n = 0;
A[n++] = "World";
A[n++] = "Hello";
A[n++] = "The truth is out there...";
sort(n, A);
for (int i = 0; i < n; ++i)
    printf(A[i]);*配列のセットを並べ替える*

sort 関数が複数の配列で呼び出される場合、最初の配列は int 型の配列である必要があり、他のすべての配列は任意の配列型にすることができ、並べ替えるデータが保持されます。次の例は、最初の配列をポインタとして使用する方法を示しています。

numeric string Nets[], Parts[], Instances[], Pins[];
int n = 0;
int index[];
schematic(S) {
  S.nets(N) N.pinrefs(P) {
    Nets[n] = N.name;
    Parts[n] = P.part.name;
    Instances[n] = P.instance.name;
    Pins[n] = P.pin.name;
    ++n;
    }
  sort(n, index, Nets, Parts, Instances, Pins);
  for (int i = 0; i < n; ++i)
      printf("%-8s %-8s %-8s %-8s\n",
             Nets[index[i]], Parts[index[i]],
             Instances[index[i]], Pins[index[i]]);
  }この背景にある考え方は、1 つのネットに複数のピンを接続でき、ネットリスト内でネット名を並べ替えることができ、1 つのネット内でもパーツ名を並べ替えることができる、などです。文字配列でキーワード numeric が使用されていることに注意してください。これにより、文字列の末尾の数値部分を考慮して文字列が並べ替えられるため、結果は IC1、IC2、...IC9、IC10 になります。アルファベット順の IC1、IC10、IC2、...IC9 ではありません。

配列のセットを並べ替える場合、最初の(インデックス)配列の型は int である必要があり、初期化する必要はありません。sort 関数を呼び出す前にインデックス配列に含まれている内容は、結果のインデックス値によって上書きされます。

**status()**

*関数*

ステータス バーにステータス メッセージを表示します。

*構文*

void status(string message);dlgMessageBox() も参照してください

status 関数は、ULP が実行されているエディタ ウィンドウのステータス バーに、指定されたメッセージを表示します。

**system()**

*関数*

外部プログラムを実行します。

*構文*

int system(string command);*戻り値*

system 関数は、コマンドの終了ステータスを返します。これは、問題がなければ通常は 0 で、エラーの場合はゼロ以外です。

system 関数は、command 文字列によって指定された外部プログラムを実行し、プログラムが終了するまで待機します。

*入出力のリダイレクト*

外部プログラムが特定のファイルから標準入力を読み込む(または標準出力を書き出す)場合は、入力/出力をリダイレクトする必要があります。

Linux および Mac OS X では、次に示すように、コマンド ラインに「<」または「>」を追加し、その後に目的のファイル名を追加します。

system("program < infile > outfile");この場合、プログラム実行時に、infile から読み込み、outfile に書き込みます。

Windows では、次のように、コマンド プロセッサを明示的に実行する必要があります

    system("cmd.exe /c program < infile > outfile");(DOS ベースの Windows システムでは、cmd.exe ではなく command.com を使用します)。

*バックグラウンド実行*

system 関数は、指定されたプログラムが終了するまで待機します。これは、数秒だけ実行されるプログラムや、ユーザの注意を完全に引き継ぐプログラムの場合に便利です。

外部プログラムの実行時間が長くなり、プログラムの終了を待たずにシステム コールがすぐに戻るようにする場合は、Linux および Mac OS X では、次のようにコマンド文字列に「&」を追加します。

system("program &");Windows では、次のように、コマンド プロセッサを明示的に実行する必要があります

system("cmd.exe /c start program");(DOS ベースの Windows システムでは、cmd.exe ではなく command.com を使用します)。

*例*

int result = system("simulate -f filename");この場合、ULP が作成したファイルを指定して、シミュレーション プログラムが呼び出されます。ここでの simulate は単なる例であり、EAGLE パッケージの一部ではないことに注意してください。

実際に実行するシステム コマンドをコントロールする場合は、次のように、コマンドを実行する前に確認を求めるラッパー関数を記述することができます。

int MySystem(string command)
{
  if (dlgMessageBox("!Ok to execute the following command?<p><tt>" + command + "</tt>", "&Yes", "&No") == 0)
     return system(command);
  return -1;
}
int result = MySystem("simulate -f filename");**単位の変換**

*関数*

内部単位を変換します。

*構文*

real u2inch(int n);
real u2mic(int n);
real u2mil(int n);
real u2mm(int n);
int inch2u(real n);
int mic2u(real n);
int mil2u(real n);
int mm2u(real n);*戻り値*

*u2inch* は、インチ単位で n の値を返します。

*u2mic* は、ミクロン(1/1000 mm)単位で n の値を返します。

*u2mil* は、mil (1/1000 インチ)単位で n の値を返します。

*u2mm* は、ミリメートル単位で n の値を返します。

*inch2u* は、内部単位として n (インチ単位)の値を返します。

*mic2u* は、内部単位として n (ミクロン単位)の値を返します。

*mil2u* は、内部単位として n (mil 単位)の値を返します。

*mm2u* は、内部単位として n (ミリメートル単位)の値を返します。

UL_GRID も参照してください

EAGLE では、すべての座標とサイズの値が分解能 1/320000 mm (0.003125 µ)の整数値として格納されます。上記の単位変換関数を使用して、これらの内部単位を目的の計測単位に変換(またはその逆に変換)することができます。

*例*

board(B) {
  B.elements(E) {
    printf("%s at (%f, %f)\n", E.name,
           u2mm(E.x), u2mm(E.y));
    }
  }#### ネットワーク関数

ネットワーク関数は、インターネット上のリモート サイトにアクセスするために使用します。

**neterror()**

*関数*

直前に実行したネットワーク関数呼び出しのエラー メッセージを返します。

*構文*

string neterror(void);*戻り値*

*neterror* は、直前に実行したネットワーク関数の呼び出しで発生したエラーを説明するテキスト メッセージを返します。 

エラーが発生しなかった場合、戻り値は空の文字列になります。

netget、netpost も参照してください

他のネットワーク関数が、エラーが発生したことを示す負の値を返した場合は、*neterror* 関数を呼び出す必要があります。*neterror* の戻り値は、ユーザに表示できるテキスト文字列です。

SSL 接続(HTTPS)に関連するエラーの場合、*netget* の注も考慮してください。

例

string Result;
if (netget(Result, "http://web.cadsoft.de/cgi-bin/http-test?see=me&hear=them") >= 0) {
   // process Result
   }
else
   dlgMessageBox(neterror());**netget()**

*関数*

ネットワーク上で GET 要求を実行します。

*構文*

int netget(dest, string url[, int timeout]);*戻り値*

*netget* は、ネットワークから読み込まれたオブジェクトの数を返します。戻り値の実際の意味は、dest のタイプによって異なります。

エラーの場合は負の値が返され、neterror() を呼び出してユーザにエラー メッセージを表示することができます。

netpost、neterror、fileread も参照してください

*netget* 関数は、指定された URL をネットワークに送信し、結果を dest 変数に格納します。timeout の秒数の間にネットワーク アクティビティが発生しなかった場合、接続は終了します。既定のタイムアウトは 20 秒です。

URL には、使用するプロトコル(HTTP、HTTPS、または FTP)を含める必要があります。また、次のように、パラメータの名前と値のペアを含めることができます。

http://web.cadsoft.de/cgi-bin/http-test?see=me&hear=them
ftp://ftp.cadsoft.de/eagle/userfiles/READMEリモート サイトにアクセスするためにユーザ ID とパスワードが必要な場合は、次の形式で指定できます。

https://userid:password@www.site.com/...*dest* が文字配列の場合、結果は未加工バイナリ データとして読み込まれ、戻り値は文字配列に格納されたバイト数を反映します。

*dest* が文字列配列の場合、結果はテキスト データ(配列メンバごとに 1 行)として扱われ、戻り値は文字列配列に格納された行数��なります。改行文字は除去されます。

*dest* が文字列の場合、結果はその文字列に格納され、戻り値は文字列の長さになります。バイナリ データの場合、結果は値が 0x00 であるバイトの最初の出現位置で切り捨てられることに注意してください。

プロキシを使用して HTTP または HTTPS でインターネットにアクセスする必要がある場合は、コントロール パネルの[ヘルプ]/[更新を確認]の下にある[設定]ダイアログで設定できます。

*SSL 接続*

SSL 接続(HTTPS による要求)の場合、証明書が必要です。システムによっては、証明書が見つからなかったり、有効期限が切れている可能性があります。この場合、接続は失敗し、関連エラー メッセージを neterror() で照会できます。このエラー メッセージを使用すると、見つからない証明書をインストールするか、期限切れの証明書を更新することで、この方法での接続を機能させることができるはずです。これを行う方法は、ご使用のシステムによって異なります(Windows の場合、コントロール パネルの[インターネット オプション]、など)。

例

string Result;
if (netget(Result, "http://web.cadsoft.de/cgi-bin/http-test?see=me&hear=them") >= 0) {
   // process Result
   }
else
   dlgMessageBox(neterror());**netpost()**

*関数*

ネットワーク上で POST 要求を実行します。

*構文*

int netpost(dest, string url, string data[, int timeout[, string content_type] ]);*戻り値*

netpost は、ネットワークから読み込まれたオブジェクトの数を返します。戻り値の実際の意味は、*dest* のタイプによって異なります。エラーの場合は負の値が返され、*neterror()* を呼び出してユーザにエラー メッセージを表示できます。

netget、neterror、fileread も参照してください

*netpost* 関数は、ネットワーク上の指定された URL にデータを送信し、結果を *dest* 変数に格納します。

timeout の秒数の間にネットワーク アクティビティが発生しなかった場合、接続は終了します。既定のタイムアウトは 20 秒です。

*content_type* を指定すると、既定の内容の種類である「text/html; charset=utf-8」が上書きされます。URL には、使用するプロトコル(HTTP または HTTPS)を含める必要があります。

リモート サイトにアクセスするためにユーザ ID とパスワードが必要な場合は、次の形式で指定できます。

https://userid:password@www.secret-site.com/...*dest* が文字配列の場合、結果は未加工バイナリ データとして読み込まれ、戻り値は文字配列に格納されたバイト数を反映します。

*dest* が文字列配列の場合、結果はテキスト データ(配列メンバごとに 1 行)として扱われ、戻り値は文字列配列に格納された行数になります。改行文字は除去されます。

*dest* が文字列の場合、結果はその文字列に格納され、戻り値は文字列の長さになります。バイナリ データの場合、結果は値が 0x00 であるバイトの最初の出現位置で切り捨てられることに注意してください。

プロキシを使用して HTTP または HTTPS でインターネットにアクセスする必要がある場合は、コントロール パネルの[ヘルプ]/[更新を確認]の下にある[設定]ダイアログで設定できます。

SSL 接続(HTTPS)に関連する問題が発生した場合は、netget の注も考慮してください。

例

string Data = "see=me\nhear=them";
string Result;
if (netpost(Result, "http://web.cadsoft.de/cgi-bin/http-test", Data) >= 0) {
   // process Result
   }
else
   dlgMessageBox(neterror());#### 出力関数

出力関数は、形式設定された文字列を出力するために使用されます。

**printf()**

*関数*

形式設定された出力をファイルに書き込みます。

*構文*

int printf(string format[, argument, ...]);*戻り値*

*printf* 関数は、直前の output 文で開かれているファイルに書き込まれた文字の数を返します。エラーの場合、printf は -1 を返します。

sprintf、output、fileerror も参照してください

*形式文字列*

format 文字列は、引数の変換、形式設定、および出力方法をコントロールします。形式設定に必要な数と同じ数の引数が必要です。引数の数とタイプは format と照合され、不一致があるとエラー メッセージが表示されます。format 文字列には、プレーン文字と形式指定子の 2 種類のオブジェクトが含まれています。

- プレーン文字は単に逐語的に出力にコピーされます

- 形式指定子は、引数リストから引数を取り出して形式を適用します

*形式指定子*

形式指定子の形式は次のとおりです。

% [flags] [width] [.prec] type各形式指定は、パーセント文字(%)で始まります。% の後に、次の内容がこの順序で指定されます。

an optional sequence of flag characters, [flags]
an optional width specifier, [width]
an optional precision specifier, [.prec]
the conversion type character, type*変換タイプの文字*

| 
 | 
 | 
 |

| 
d | 
符号付き 10 進整数 | 
 |

| 
o | 
符号なし 8 進整数 | 
 |

| 
u | 
符号なし 10 進整数 | 
 |

| 
x | 
符号なし 16 進整数(a、b、...) | 
 |

| 
X | 
符号なし 16 進整数(A、B、...) | 
 |

| 
f | 
[-]dddd.dddd という形式の符号付き実数値 | 
 |

| 
e | 
[-]d.dddde[±]ddd という形式の符号付き実数値 | 
 |

| 
E | 
e と同じ(指数は E) | 
 |

| 
g | 
e または f の形式の符号付き実数値(指定された値と精度に基づく) | 
 |

| 
[G] | 
g と同じ(e 形式を使用する場合の指数は E) | 
 |

| 
c | 
単一文字 | 
 |

| 
s | 
文字列 | 
 |

| 
% | 
% 文字を出力 | 
 |

*フラグ文字*

次のフラグ文字は、任意の順序と組み合わせで使用できます。

| 
 | 
 | 
 |

| 
"-" | 
形式設定された項目はフィールド内で左揃えになります。通常、項目は右揃えになります。 | 
 |

| 
"+" | 
符号付きの正の項目は常にプラス記号(+)で始まります。通常は、負の項目のみが符号で始まります。 | 
 |

| 
" " | 
符号付きの正の項目は常にスペース文字で始まります。"+" と " " の両方が指定されている場合、"+" が " " をオーバーライドします。 | 
 |

*幅指定子*

幅指定子は、出力値の最小フィールド幅を設定します。

幅は、10 進数の数字の文字列を使用して直接指定するか、アスタリスク(*)を使用して間接的に指定します。幅指定子にアスタリスクを使用する場合、形式設定される引数(この形式指定子を使用)の前の引数(int 型)で、出力フィールドの最小幅が決まります。

存在しない、または小さいフィールド幅によって、フィールドが切り捨てられることはありません。変換の結果がフィールド幅よりも広い場合、変換結果が含まれるようにフィールドが拡張されます。

| 
 | 
 | 
 |

| 
n | 
少なくとも n 文字が出力されます。出力値が n 文字未満の場合、出力は空白で埋められます(「-」フラグが指定されている場合は右側が埋められ、それ以外の場合は左側が埋められます)。 | 
 |

| 
0n | 
少なくとも n 文字が出力されます。出力値が n 文字未満の場合は、左側がゼロで埋められます。 | 
 |

| 
* | 
引数リストで幅指定子を指定します。これは、形式設定される実際の引数の前に指定する必要があります。 | 
 |

*精度指定子*

精度指定子は常にピリオド(.)で始まり、それ以前の幅指定子とは分離されます。幅の場合と同様に、精度は、10 進数の数字の文字列を使用して直接指定するか、アスタリスク(*)を使用して間接的に指定します。精度指定子にアスタリスクを使用する場合、形式設定される引数(この形式指定子を使用)の前の引数(int 型)で、精度が決まります。

| 
 | 
 | 
 |

| 
なし | 
精度は既定値に設定されます。 | 
 |

| 
.0 | 
int 型の場合、精度は既定値に設定されます。real 型の場合、小数点以下は出力されません。 | 
 |

| 
.n | 
n 文字または小数点以下 n 桁が出力されます。出力値が n 文字を超える場合、出力は切り捨てられるか、丸められる可能性があります(型の文字によって異なります)。 | 
 |

| 
* | 
引数リストで精度指定子を指定します。これは、形式設定される実際の引数の前に指定する必要があります。 | 
 |

*既定の精度値*

| 
 | 
 | 
 |

| 
douxX | 
1 | 
 |

| 
eEf | 
6 | 
 |

| 
gG | 
すべての有効桁 | 
 |

| 
c | 
効果なし | 
 |

| 
s | 
文字列全体を出力 | 
 |

*精度の指定(.n)が変換にどのように影響するか*

| 
 | 
 | 
 |

| 
douxX | 
*.n* は、少なくとも n 文字が出力されることを指定します。入力引数が n 桁より小さい場合、出力値の左側がゼロで埋められます。入力引数が n 桁より大きい場合、出力値は切り捨てられません。 | 
 |

| 
eEf | 
*.n* は、小数点以下 n 文字を出力し、最後に出力される桁を丸めることを指定します。 | 
 |

| 
gG | 
*.n* は、最大で n の有効桁が出力されることを指定します。 | 
 |

| 
c | 
*.n* は出力に影響しません。 | 
 |

| 
s | 
*.n* は、最大で n 文字が出力されることを指定します。 | 
 |

*バイナリ ゼロ文字*

sprintf とは異なり、printf 関数はバイナリ ゼロ文字(0x00)を出力できます。

char c = 0x00;
printf("%c", c);*例*

int i = 42;
real r = 3.14;
char c = 'A';
string s = "Hello";
printf("Integer: %8d\n", i);
printf("Hex:     %8X\n", i);
printf("Real:    %8f\n", r);
printf("Char:    %-8c\n", c);
printf("String:  %-8s\n", s);**sprintf()**

*関数*

形式設定した出力を文字列に書き込みます。

*構文*

int sprintf(string result, string format[, argument, ...]);*戻り値*

*sprintf* 関数は、結果の文字列に書き込まれた文字数を返します。エラーが発生した場合、*sprintf* は -1 を返します。

*printf* も参照してください

*形式文字列*

*printf* を参照してください。

*バイナリ ゼロ文字*

*sprintf* は、バイナリ ゼロ文字(0x00)が埋め込まれた文字列を返すことができないことに注意してください。結果の文字列にバイナリ ゼロ文字が含まれている場合、そのゼロ文字に続くすべての文字が削除されます。バイナリ データを出力する必要がある場合は、*printf* を使用します。

*例*

string result;
int number = 42;
sprintf(result, "The number is %d", number);#### 文字列関数

文字列関数は、文字列を操作するために使用されます。

次の文字列関数を使用できます。

strchr()
strjoin()
strlen()
strlwr()
strrchr()
strrstr()
strsplit()
strstr()
strsub()
strtod()
strtol()
strupr()
strxstr()**strchr()**

*関数*

文字列で、指定された文字の最初のオカレンスをスキャンします。

*構文*

int strchr(string s, char c[, int index]);*戻り値*

*strchr* 関数は、文字列内の文字の整数オフセットを返します。文字列内にその文字が存在しない場合は、-1 を返します。

strrchr、strstr も参照してください

*index* が指定されている場合、検索はその位置から開始されます。負の値の場合、文字列の末尾からカウントされます。

*例*

string s = "This is a string";
char c = 'a';
int pos = strchr(s, c);
if (pos >= 0)
   printf("The character %c is at position %d\n", c, pos);
else
   printf("The character was not found\n");**strjoin()**

*関数*

文字列配列を結合し、単一の文字列を形成します。

*構文*

string strjoin(string array[], char separator);*戻り値*

strjoin 関数は、配列のエントリを結合して返します。

strsplit、lookup、fileread も参照してください

*strjoin* は、指定した区切り文字で区切られた配列内のすべてのエントリを結合し、結果の文字列を返します。

separator が改行文字('\n')の場合、結果の文字列は改行文字で終了します。これは、N 行で構成され(各行が改行文字で終了)、fileread() 関数で読み込まれ、N 個の文字列の配列に分割されたテキスト ファイルを、ファイルから読み込まれたとおりの元の文字列に結合するためのものです。

例

string a[] = { "Field 1", "Field 2", "Field 3" };
string s = strjoin(a, ':');**strlen()**

*関数*

文字列の長さを計算します。

*構文*

int strlen(string s);*戻り値*

*strlen* 関数は、文字列内の文字数を返します。

*例*

string s = "This is a string";
int l = strlen(s);
printf("The string is %d characters long\n", l);**strlwr()**

*関数*

文字列内の大文字を小文字に変換します。

*構文*

string strlwr(string s);*戻り値*

*strlwr* 関数は、変換された文字列を返します。元の文字列(パラメータとして指定)は変更されません。

strupr、tolower も参照してください

*例*

string s = "This Is A String";
string r = strlwr(s);
printf("Prior to strlwr: %s - after strlwr: %s\n", s, r);**strrchr()**

*関数*

文字列で、指定された文字の最後のオカレンスをスキャンします。

*構文*

int strrchr(string s, char c[, int index]);*戻り値*

*strrchr* 関数は、文字列内の文字の整数オフセットを返します。文字列内にその文字が存在しない場合は、-1 を返します。

strchr、strrstr も参照してください

*index* が指定されている場合、検索はその位置から開始されます。負の値の場合、文字列の末尾からカウントされます。

*例*

string s = "This is a string";
char c = 'a';
int pos = strrchr(s, c);
if (pos >= 0)
   printf("The character %c is at position %d\n", c, pos);
else
   printf("The character was not found\n");**strrstr()**

*関数*

文字列で、指定された部分文字列の最後のオカレンスをスキャンします。

*構文*

int strrstr(string s1, string s2[, int index]);*戻り値*

strrstr 関数は、s1 内の s2 の最初の文字の整数オフセットを返します。文字列内にその部分文字列が存在しない場合は、-1 を返します。

strstr、strrchr も参照してください。

index が指定されている場合、検索はその位置から開始されます。負の値の場合、文字列の末尾からカウントされます。

*例*

string s1 = "This is a string", s2 = "is a";
int pos = strrstr(s1, s2);
if (pos >= 0)
   printf("The substring starts at %d\n", pos);
else
   printf("The substring was not found\n");**strsplit()**

*関数*

文字列を個別のフィールドに分割します。

*構文*

int strsplit(string &array[], string s, char separator);

*戻り値*

*strsplit* 関数は、配列にコピーされたエントリの数を返します。

strjoin、lookup、fileread も参照してください

*strsplit* は、指定した区切り文字で文字列 s を分割し、結果のフィールドを配列に格納します。

区切り文字が改行文字('\n')の場合、最後のフィールドが空である場合は削除されます。これは、N 行で構成され(各行が改行文字で終了)、fileread() 関数で読み込まれたテキスト ファイルを、N 個の文字列の配列に分割するためのものです。他の区切り文字を使用すると、文字列の最後にある空のフィールドが考慮されるため、「a:b:c:」の場合は 4 つのフィールドになり、最後のフィールドは空になります。

*例*

string a[];
int n = strsplit(a, "Field 1:Field 2:Field 3", ':');**strstr()**

*関数*

文字列で、指定された部分文字列の最初のオカレンスをスキャンします。

*構文*

int strstr(string s1, string s2[, int index]);*戻り値*

*strstr* 関数は、s1 内の s2 の最初の文字の整数オフセットを返します。文字列内にその部分文字列が存在しない場合は、-1 を返します。

strrstr、strchr、strxstr も参照してください

*index* が指定されている場合、検索はその位置から開始されます。負の値の場合、文字列の末尾からカウントされます。

*例*

string s1 = "This is a string", s2 = "is a";
int pos = strstr(s1, s2);
if (pos >= 0)
   printf("The substring starts at %d\n", pos);
else
   printf("The substring was not found\n");**strsub()**

*関数*

文字列から部分文字列を抽出します。

*構文*

string strsub(string s, int start[, int length]);

*戻り値*

*strsub* 関数は、*start *と *length* の値で示される部分文字列を返します。*length* の値は正の値である必要があります。正の値でない場合は、空の文字列が返されます。*length* が省略された場合、残りの文字列(*start* で始まる)が返されます。

*start* が文字列外の位置を指している場合、空の文字列が返されます。

*例*

string s = "This is a string";
string t = strsub(s, 4, 7);
printf("The extracted substring is: %s\n", t);**strtod()**

*関数*

文字列を実数値に変換します。

*構文*

real strtod(string s);*戻り値*

*strtod* 関数は、指定された文字列の数値表現を実数値で返します。変換は、実数定数の形式に適合しない最初の文字で終了します。文字列の変換中にエラーが発生した場合は、0.0 が返されます。

strtol も参照してください

*例*

string s = "3.1415";
real r = strtod(s);
printf("The value is %f\n", r);**strtol()**

*関数*

文字列を整数値に変換します。

*構文*

int strtol(string s);*戻り値*

*strtol* 関数は、指定された文字列の数値表現を整数値で返します。変換は、整数定数の形式に適合しない最初の文字で終了します。文字列の変換中にエラーが発生した場合は、0 が返されます。

strtod も参照してください

*例*

string s = "1234";
int i = strtol(s);
printf("The value is %d\n", i);**strupr()**

*関数*

文字列内の小文字を大文字に変換します。

*構文*

string strupr(string s);*戻り値*

*strupr* 関数は、変換された文字列を返します。元の文字列(パラメータとして指定)は変更されません。

strlwr、toupper も参照してください

*例*

string s = "This Is A String";
string r = strupr(s);
printf("Prior to strupr: %s - after strupr: %s\n", s, r);**strxstr()**

*関数*

文字列で、指定された正規表現の最初のオカレンスをスキャンします。

*構文*

int strxstr(string s1, string s2[, int index[, int &length]]);*戻り値*

*strxstr* 関数は、s2 の正規表現に一致する s1 内の部分文字列の整数オフセットを返します。文字列内で正規表現が一致しない場合は、-1 を返します。

strstr、strchr、strrstr も参照してください

*index* が指定されている場合、検索はその位置から開始されます。負の値の場合、文字列の末尾からカウントされます。

*length* が指定された場合、一致する部分文字列の実際の長さがその変数に返されます。

正規表現を使用すると、テキスト文字列内でパターンを検索できます。たとえば、正規表現 "i.*a" は、「i」で始まり、その後に任意の回数(「*」)の任意の文字(「.」)が続き、最後に「a」となる文字のシーケンスを検索します。これは、「is a」、「is this a」、「ia」と一致します。正規表現の詳細については、書物『Mastering Regular Expressions by Jeffrey E. F.Friedl』などを参照してください。

*例*

string s1 = "This is a string", s2 = "i.*a";
int len = 0;
int pos = strxstr(s1, s2, 0, len);
if (pos >= 0)
   printf("The substring starts at %d and is %d charcaters long\n", pos, len);
else
   printf("The substring was not found\n");#### URN 関数

URN 関数は、URN を処理するために使用されます。

**urnbase()**

*関数*

URN 文字列からベース URN を抽出します。

*構文*

string urnbase(string urn);*戻り値*

*urnbase* 関数は、指定された URN のベース URN、つまり末尾のバージョンと / を除いた URN を返します。たとえば、「urn:adsk.eagle:footprint:123/4」のベース URN は「urn:adsk.eagle:footprint:123」になります。バージョンが存在しない場合、入力文字列が返されます。

*例*

string urn = "urn:adsk.eagle:footprint:123/4";
string base = urnbase(urn);
printf("The base URN is: %s\n", base);**urnversion()**

*関数*

URN 文字列からバージョンを抽出します。

*構文*

int urnversion(string urn);*戻り値*

*urnversion* 関数は、指定された URN のバージョン、つまり、/ の後の番号を返します。バージョンが存在しない場合は、-1 が返されます。

*例*

string urn = "urn:adsk.eagle:footprint:123/4";
int version = urnversion(urn);
printf("The URN version is: %d\n", version);#### 時間関数

時間関数は、時間と日付の情報を取得および処理するために使用されます。

次の時間関数を使用できます。

sleep()
t2day()
t2dayofweek()
t2hour()
t2minute()
t2month()
t2second()
t2string()
t2year()
time()
timems()**time()**

*関数*

現在のシステム時刻を取得します。

*構文*

int time(void);*戻り値*

time 関数は、システム依存の基準日からの経過秒数として現在のシステム時刻を返します。

「時間の変換」、filetime、timems() も参照してください

*例*

int CurrentTime = time();**timems()**

*関数*

ULP の起動時からのミリ秒数を取得します。

*構文*

int timems(void);*戻り値*

*timems* 関数は、ULP の起動時からのミリ秒数を返します。86400000 ミリ秒(24 時間)経過すると、値は再度 0 から開始します。

time も参照してください

*例*

int elapsed = timems();**時間の変換**

*関数*

時間値を日、月、年などに変換します。

*構文*

int t2day(int t);
int t2dayofweek(int t);
int t2hour(int t);
int t2minute(int t);
int t2month(int t);
int t2second(int t);
int t2year(int t);

string t2string(int t[, string format]);*戻り値*

*t2day* returns the day of the month (1..31)
*t2dayofweek* returns the day of the week (0=sunday..6)
*t2hour* returns the hour (0..23)
*t2minute* returns the minute (0..59)
*t2month* returns the month (0..11)
*t2second* returns the second (0..59)
*t2year* returns the year (including century!)
*t2string* returns a formatted string containing date and timetime も参照してください

*t2string* 関数は、任意指定の形式パラメータを指定しないと、指定された時間 *t* を国固有のローカル時間の文字列に変換します。

形式文字列を指定して *t2string* を呼び出すと、その形式を使用して結果の形式が決定されます。

形式文字列では、次の式を使用できます。

| 
 | 
 | 
 |

| 
d | 
先頭にゼロが付いていない数値としての日付(1 ～ 31) | 
 |

| 
dd | 
先頭にゼロが付いている数値としての日付(01 ～ 31) | 
 |

| 
ddd | 
ローカライズされた曜日の短縮名(「月」～「日」) | 
 |

| 
dddd | 
ローカライズされた曜日の正式な名前(「月曜日」～「日曜日」) | 
 |

| 
M | 
先頭にゼロが付いていない数値としての月(1 ～ 12) | 
 |

| 
MM | 
先頭にゼロが付いている数値としての月(01 ～ 12) | 
 |

| 
MMM | 
ローカライズされた月の短縮名(「1 月」～「12 月」) | 
 |

| 
MMMM | 
ローカライズされた月の正式な名前(「1 月」～「12 月」) | 
 |

| 
yy | 
2 桁の数値としての年(00 ～ 99) | 
 |

| 
yyyy | 
4 桁の数値としての年 | 
 |

| 
h | 
先頭にゼロが付いていない時間(0 ～ 23、または AM/PM 表示の場合は 1 ～ 12) | 
 |

| 
hh | 
先頭にゼロが付いている時間(00 ～ 23、または AM/PM 表示の場合は 01 ～ 12) | 
 |

| 
m | 
先頭にゼロが付いていない分(0 ～ 59) | 
 |

| 
mm | 
先頭にゼロが付いている分(00 ～ 59) | 
 |

| 
s | 
先頭にゼロが付いていない秒(0 ～ 59) | 
 |

| 
ｻﾌﾞｽﾋﾟﾝﾄﾞﾙ | 
先頭にゼロが付いている秒(00 ～ 59) | 
 |

| 
z | 
先頭にゼロが付いていないミリ秒(指定される時間には 1 秒の分解能しかないため、常に 0) | 
 |

| 
zzz | 
先頭にゼロが付いていないミリ秒(指定される時間には 1 秒の分解能しかないため、常に 000) | 
 |

| 
AP | 
AM/PM 表示を使用(AP は「AM」または「PM」に置き換えられます) | 
 |

| 
ap | 
am/pm 表示を使用(ap は「am」または「pm」に置き換えられます) | 
 |

| 
[U] | 
指定された時間を UTC として表示します(最初の文字である必要があります。既定はローカル時間です) | 
 |

その他の文字はすべて「そのまま」コピーされます。単一引用符で囲まれた一連の文字はテキストとして扱われ、式としては使用されません。連続する 2 つの単一引用符('')は、出力では 1 つの単一引用符に置き換えられます。

*例*

int t = time();
printf("It is now %02d:%02d:%02d\n",
       t2hour(t), t2minute(t), t2second(t));
printf("ISO time is %s\n", t2string(t, "Uyyyy-MM-dd hh:mm:ss"));#### オブジェクト関数

オブジェクト関数は、オブジェクトに関する一般的な情報にアクセスするために使用します。

次のオブジェクト関数を使用できます。

clrgroup()
ingroup()
setgroup()
setvariant()
variant()**clrgroup()**

*関数*

オブジェクトのグループ フラグをクリアします。

*構文*

void clrgroup(object);ingroup()、setgroup()、GROUP コマンドも参照してください

*clrgroup()* 関数は、指定されたオブジェクトのグループ フラグをクリアし、以前に定義されたグループに含まれないようにします。

他のオブジェクト(UL_BOARD や UL_NET など)が含まれているオブジェクトに適用すると、含まれているすべてのオブジェクトのグループ フラグが再帰的にクリアされますが、*setgroup()* に類似した制限があります。

*例*

board(B) {
  B.elements(E)
    clrgroup(E);
  }**ingroup()**

*関数*

オブジェクトがグループ内にあるかどうかを確認します。

*構文*

int ingroup(object);*戻り値*

*ingroup* 関数は、指定されたオブジェクトがグループ内にある場合、ゼロ以外の値を返します。

clrgroup()、setgroup()、GROUP コマンドも参照してください

エディタでグループが定義されている場合、*ingroup()* 関数を使用して、特定のオブジェクトがグループに含まれているかどうかをチェックできます。

現在の図面で個別に選択可能な単一の座標を持つオブジェクト(UL_TEXT、UL_VIA、UL_CIRCLE など)は、その座標が定義されたグループ内にある場合、*ingroup()* を呼び出すとゼロ以外の値を返します。

UL_WIRE は、その端点がグループ内に含まれていない場合は 0、最初の端点が含まれている場合は 1、2 番目の端点が含まれている場合は 2、両方の端点が含まれている場合は 3 を返します。

UL_RECTANGLE および UL_FRAME は、1 つまたは複数のコーナーがグループに存在する場合、ゼロ以外の値を返します。値は、右上コーナーではビット 0、左上コーナーではビット 1、左下コーナーではビット 2、右下コーナーではビット 3 が設定されます。

座標を持たない(UL_NET、UL_SEGMENT、UL_SIGNAL、UL_POLYGON)か、または図面オブジェクトとしては実際に使用できない(UL_SHEET、UL_DEVICESET、UL_SYMBOL、UL_FOOTPRINT)高いランクのオブジェクトは、それらのオブジェクト内の 1 つまたは複数のオブジェクトがグループに含まれている場合、ゼロ以外の値を返します。オブジェクト階層の詳細については、「オブジェクト タイプ」を参照してください。

UL_CONTACTREF および UL_PINREF は、独自の座標を持っていませんが、参照される UL_CONTACT または UL_PIN がそれぞれグループ内にある場合は、ゼロ以外の値を返します。UL_GRID、UL_VARIANT、または UL_TEXT や UL_FRAME オブジェクトのワイヤなどの選択できないオブジェクトの場合、*ingroup()* の動作は定義されていないため、使用しないでください。

*コンテキスト メニュー オブジェクトを識別する*

コンテキスト メニューから ULP を起動すると、グループ メカニズムによって選択したオブジェクトにアクセスできます。選択したオブジェクトから 1 つの要素グループが作成されます。したがって、*ingroup()* で識別できます。(SET および RUN も参照してください)。

*例*

output("group.txt") {
  board(B) {
    B.elements(E) {
      if (ingroup(E))
         printf("Element %s is in the group\n", E.name);
      }
    }
  }**setgroup()**

*関数*

オブジェクトのグループ フラグを設定します。

*構文*

void setgroup(object[, int flags]);clrgroup()、ingroup()、GROUP コマンドも参照してください

*setgroup()* 関数は、指定されたオブジェクトのグループ フラグを設定し、グループに含まれるようにします。

flags を指定しない場合、オブジェクトは全体としてグループに追加されます(つまり、複数の選択点がある場合は、すべての選択点)。

flags の値がゼロ以外の場合、オブジェクトの指定した点のグループ フラグのみが設定されます。UL_WIRE の場合、「1」は最初の点のグループ フラグを設定し、「2」は 2 番目の点のグループ フラグを設定し、「3」は両方を設定します。以前に設定したグループ フラグは、*setgroup()* を呼び出しても変更されません。

他のオブジェクト(UL_BOARD や UL_NET など)が含まれているオブジェクトに適用すると、含まれているすべてのオブジェクトのグループ フラグが再帰的に設定されますが、次の制限があります。

これは UL_LIBRARY および UL_SCHEMATIC には該当しません。選択できない、または個別に選択できない下位オブジェクトにはフラグが付けられません(例: UL_GRID オブジェクトまたは UL_VARIANT オブジェクト、または UL_TEXT オブジェクトまたは UL_FRAME オブジェクトのワイヤ)。

オブジェクト階層の詳細については、「オブジェクト タイプ」を参照してください。

*例*

board(B) {
  B.elements(E)
    setgroup(E);
  }**setvariant()**

*関数*

現在のアセンブリ バリアントを設定します。

*構文*

int setvariant(string name);variant()、UL_VARIANTDEF、VARIANT コマンドも参照してください

*setvariant()* 関数は、現在のアセンブリ バリアントを name で指定されたバリアントに設定します。これを使用すると、すべてのパーツをループして、指定したバリアントで定義されているとおりにデータを正確に「参照」できます。

name は、現在の図面に含まれている有効なアセンブリ バリアントを参照している必要があります。

この関数は、指定されたアセンブリ バリアントが存在する場合はゼロ以外の値、それ以外の場合はゼロを返します。

*setvariant()* の呼び出しによって設定されたアセンブリ バリアントがアクティブなのは、ユーザ言語プログラムが戻るまでです。その後、図面内のバリアントは ULP を起動する前と同じになります。

基板内のアセンブリ バリアントを設定できるのは、一致する回路図がロードされている場合のみです。

*例*

if (setvariant("My variant")) {
   // do something ...
else
   // error: unknown variant**variant()**

*関数*

現在のアセンブリ バリアントを照会します。

*構文*

string variant(void);setvariant()、UL_VARIANTDEF、VARIANT コマンドも参照してください

*variant()* 関数は、現在のアセンブリ バリアントの名前を返します。バリアントが現在選択されていない場合は、空の文字列('')が返されます。

*例*

string CurrentVariant = variant();#### XML 関数

XML 関数は、XML (Extensible Markup Language)データを処理するために使用されます。次の XML 関数を使用できます。

xmlattribute()
xmlattributes()
xmlelement()
xmlelements()
xmltags()
xmltext()**xmlattribute()、xmlattributes()**

*関数*

XML タグの属性を抽出します。

*構文*

string xmlattribute(string xml, string tag, string attribute);
int xmlattributes(string &array[], string xml, string tag);xmlelement()、xmltags()、xmltext() も参照してください

*xmlattribute* 関数は、指定された XML コード内の指定されたタグから、指定された属性の値を返します。ある属性が同じタグ内に複数回現れる場合、最後のオカレンスの値が取得されます。

*xmlattributes* 関数は、指定された XML コード内の指定されたタグからすべての属性の名前を配列内に格納し、見つかった属性の数を返します。順序は、指定した XML コードと同じとは限りません。ある属性が同じタグ内に複数回現れる場合、その名前は配列内には 1 回しか現れません。

タグはパスの形式で指定されます。

指定した XML コードにエラーが含まれている場合、すべての XML 関数の結果が空になり、警告ダイアログがユーザに表示され、ULP および XML コードのどこでエラーが発生したのかが示されます。XML コード内の行と列の番号は、この関数に指定された実際の文字列を xml パラメータとして参照することに注意してください。

*例*

// String XML contains the following data:
//<root>
//  <body abc="def" xyz="123">
//    ...
//  </body>
//</root>

string s[];
int n = xmlattributes(s, XML, "root/body");

// Result: { "abc", "xyz" }

string s = xmlattribute(XML, "root/body", "xyz");

// Result: "123"**xmlelement()、xmlelements()**

*関数*

XML コードから要素を抽出します。

*構文*

string xmlelement(string xml, string tag);
int xmlelements(string &array[], string xml, string tag);xmltags()、xmlattribute()、xmltext() も参照してください

*xmlelement* 関数は、指定された XML コード内の指定されたタグの完全な XML 要素を返します。結果にはまだ要素の外側の XML タグが含まれているため、他の XML 関数を使用して処理を進めることができます。要素のプレーン テキスト部分内の空白は保持されます。ただし、要素内の XML タグの全体的な形式設定と要素の属性の順序は、元の XML コードとは異なる場合があります。xml 内に tag が複数存在する場合は、最初の tag が返されます。すべてのオカレンスを取得する場合は、*xmlelements* を使用します。

*xmlelements* 関数は xmlelement と同様に機能しますが、指定したタグを持つ要素のすべてのオカレンスを返します。戻り値は、配列に格納された要素の数です。

タグはパスの形式で指定されます。

指定した XML コードにエラーが含まれている場合、すべての XML 関数の結果が空になり、警告ダイアログがユーザに表示され、ULP および XML コードのどこでエラーが発生したのかが示されます。XML コード内の行と列の番号は、この関数に指定された実際の文字列を xml パラメータとして参照することに注意してください。

*例*

// String XML contains the following data:
//<root>
//  <body>
//    <contents>
//      <string>Some text 1</string>
//      <any>anything 1</any>
//    </contents>
//    <contents>
//      <string>Some text 2</string>
//      <any>anything 2</any>
//    </contents>
//    <appendix>
//      <string>Some text 3</string>
//    </appendix>
//  </body>
//</root>
//

string s = xmlelement(XML, "root/body/appendix");

// Result: " <appendix>\n  <string>Some text 3</string>\n </appendix>\n"

string s[];
int n = xmlelements(s, XML, "root/body/contents");

// Result: { " <contents>\n  <string>Some text 1</string>\n  <any>anything 1</any>\n </contents>\n",
//           " <contents>\n  <string>Some text 2</string>\n  <any>anything 2</any>\n </contents>\n"
//         }**xmltags()**

*関数*

XML コード内のタグ名のリストを抽出します。

*構文*

int xmltags(string &array[], string xml, string tag);xmlelement()、xmlattribute()、xmltext() も参照してください

*xmltags* 関数は、指定された XML コード内の指定されたタグの最上位のすべてのタグの名前を返します。戻り値は、配列に格納されたタグ名の数です。

各タグ名は、XML コード内に複数回現れる場合でも 1 回だけ返されます。

タグはパスの形式で指定されます。

指定した XML コードにエラーが含まれている場合、すべての XML 関数の結果が空になり、警告ダイアログがユーザに表示され、ULP および XML コードのどこでエラーが発生したのかが示されます。XML コード内の行と列の番号は、この関数に指定された実際の文字列を xml パラメータとして参照することに注意してください。

*例*

//String XML contains the following data:
//<root>
//  <body>
//    <contents>
//      <string>Some text 1</string>
//      <any>anything 1</any>
//    </contents>
//    <contents>
//      <string>Some text 2</string>
//      <any>anything 2</any>
//    </contents>
//    <appendix>
//      <string>Some text 3</string>
//    </appendix>
//  </body>
//</root>
//

string s[];
int n = xmltags(s, XML, "root/body");

// Result: { "contents", "appendix" } 

int n = xmltags(s, XML, "");        

// Result: "root"**xmltext()**

*関数*

XML 要素のテキスト データを抽出します。

*構文*

string xmltext(string xml, string tag);xmlelement()、xmlattribute()、xmltags() も参照してください

*xmltext* 関数は、指定された XML コード内の指定されたタグからテキスト データを返します。

テキスト内のタグは除去され、空白(改行文字を含む)は保持されます。

タグはパスの形式で指定されます。

指定した XML コードにエラーが含まれている場合、すべての XML 関数の結果が空になり、警告ダイアログがユーザに表示され、ULP および XML コードのどこでエラーが発生したのかが示されます。XML コード内の行と列の番号は、この関数に指定された実際の文字列を xml パラメータとして参照することに注意してください。

*例*

// String XML contains the following data:
//<root>
//  <body>
//    Some <b>text</b>.
//  </body>
//</root>
//

string s = xmltext(XML, "root/body");

// Result: "\n    Some text.\n  "## 組み込み文

組み込み文は、通常、データ構造またはファイルにアクセスできる特定のコンテキストを開くために使用されます。組み込み文の一般的な構文は次のとおりです。

name(parameters) statementここで、name は組み込み文の名前で、parameters は 1 つまたは複数のパラメータを表し、statement は組み込み文によって開かれたコンテキスト内で実行されるコードです。

statement は、次のように複合文にすることができます。

board(B) {
  B.elements(E) printf("Element: %s\n", E.name);
  B.Signals(S)  printf("Signal: %s\n", S.name);
  }次の組み込み文を使用できます。

- board()

- deviceset()

- library()

- module()

- output()

- footprint() (EAGLE 9.1 の新機能)

- schematic()

- sheet()

- symbol()

#### board()

**関数**

基板コンテキストを開きます。

**構文**

board(identifier) statementschematic、library も参照してください

*board* 文は、現在のエディタ ウィンドウに基板図面が含まれている場合、基板コンテキストを開きます。UL_BOARD タイプの変数が作成され、identifier によって示される名前が付けられます。

基板コンテキストが正常に開き、基板変数が作成されると、文が実行されます。文のスコープ内では、基板変数にアクセスして、基板から追加のデータを取得することができます。

現在のエディタ ウィンドウに基板図面が含まれていない場合は、エラー メッセージが表示され、ULP は終了します。

**基板が存在するかどうかを確認する**

引数を指定せずに *board* 文を使用すると、現在のエディタ ウィンドウに基板図面が含まれているかどうかを確認できます。この場合、board は整数定数のように動作し、現在のエディタ ウィンドウに基板図面がある場合は 1、それ以外の場合は 0 を返します。

**回路図から基板にアクセスする**

現在のエディタ ウィンドウに回路図図面が含まれている場合でも、次のように、board 文の前に接頭辞 project を追加することにより、その回路図の基板にアクセスすることができます。

project.board(B) { ... }これにより、現在のエディタ ウィンドウに基板図面または回路図図面のどちらが含まれているかには関係なく、基板コンテキストが開きます。ただし、デスクトップ上のどこかに、その基板が含まれているエディタ ウィンドウが存在する必要があります。

**例**

if (board)
   board(B) {
     B.elements(E)
       printf("Element: %s\n", E.name);
     }#### deviceset()

**関数**

デバイス セット コンテキストを開きます。

**構文**

deviceset(identifier) statementfootprint、symbol���library も参照してください

*deviceset* 文は、現在のエディタ ウィンドウにデバイス図面が含まれている場合、デバイス セット コンテキストを開きます。UL_DEVICESET タイプの変数が作成され、identifier によって示される名前が付けられます。

デバイス セット コンテキストが正常に開き、デバイス セット変数が作成されると、文が実行されます。文のスコープ内では、デバイス セット変数にアクセスして、デバイス セットから追加のデータを取得することができます。

現在のエディタ ウィンドウにデバイス図面が含まれていない場合は、エラー メッセージが表示され、ULP は終了します。

**デバイス セットが存在するかどうかを確認する**

引数を指定せずに deviceset 文を使用すると、現在のエディタ ウィンドウにデバイス図面が含まれているかどうかを確認できます。この場合、deviceset は整数定数のように動作し、現在のエディタ ウィンドウにデバイス図面がある場合は 1、それ以外の場合は 0 を返します。

**例**

if (deviceset)
   deviceset(D) {
     D.gates(G)
       printf("Gate: %s\n", G.name);
     }#### library()

**関数**

ライブラリ コンテキストを開きます。

**構文**

library(identifier) statementboard、schematic、deviceset、footprint、symbol も参照してください

*library* 文は、現在のエディタ ウィンドウにライブラリ図面が含まれている場合、ライブラリ コンテキストを開きます。UL_LIBRARY タイプの変数が作成され、identifier によって示される名前が付けられます。

ライブラリ コンテキストが正常に開き、ライブラリ変数が作成されると、文が実行されます。文のスコープ内では、ライブラリ変数にアクセスして、ライブラリから追加のデータを取得することができます。

現在のエディタ ウィンドウにライブラリ図面が含まれていない場合は、エラー メッセージが表示され、ULP は終了します。

**ライブラリが存在するかどうかを確認する**

引数を指定せずに library 文を使用すると、現在のエディタ ウィンドウにライブラリ図面が含まれているかどうかを確認できます。この場合、library は整数定数のように動作し、現在のエディタ ウィンドウにライブラリ図面がある場合は 1、それ以外の場合は 0 を返します。

**例**

if (library)
   library(L) {
     L.devices(D)
       printf("Device: %s\n", D.name);
     }#### module()

**関数**

モジュール コンテキストを開きます。

**構文**

module(identifier) statementboard、library、schematic、sheet も参照してください

*module* 文は、現在のエディタ ウィンドウにモジュール図面が含まれている場合、モジュール コンテキストを開きます。module 文は、エディタ ウィンドウで現在モジュール図面が編集されている場合は、モジュール コンテキストを開きます。UL_MODULE タイプの変数が作成され、identifier によって示される名前が付けられます。

モジュール コンテキストが正常に開き、モジュール変数が作成されると、文が実行されます。文のスコープ内では、モジュール変数にアクセスして、モジュールから追加のデータを取得することができます。

現在のエディタ ウィンドウにモジュール図面が含まれていない場合は、エラー メッセージが表示され、ULP が終了します。エディタ ウィンドウで現在モジュール図面が編集されていない場合は、エラー メッセージが表示され、ULP が終了します。

**モジュールが存在するかどうかを確認する**

引数を指定せずに module 文を使用すると、現在のエディタ ウィンドウにモジュール図面が含まれているかどうかを確認できます。この場合、module は整数定数のように動作し、現在のエディタ ウィンドウにモジュール図面がある場合は 1、それ以外の場合は 0 を返します。

**例**

if (module)
   module(M) {
     printf("Module: %s\n", M.name);
     }#### output()

**関数**

後続の printf() 呼び出しの出力ファイルを開きます。

**構文**

output(string filename[, string mode]) statementprintf、fileerror も参照してください

*output* 文は、指定したファイル名とモードを持つファイルを後続の printf() 呼び出しでの出力用に開きます。ファイルが正常に開かれた場合、文が実行され、その後ファイルが閉じられます。

ファイルを開くことができない場合は、エラー メッセージが表示され、ULP の実行が終了します。

既定では、出力ファイルは[プロジェクト]フォルダに書き込まれます。

**ファイル モード**

mode パラメータは、出力ファイルを開く方法を定義します。mode パラメータが指定されていない場合、既定は「wt」です。

a append to an existing file, or create a new file if it does not exist
w create a new file (overwriting an existing file)
t open file in text mode
b open file in binary mode
D delete this file when ending the EAGLE session (only works together with w)
F force using this file name (normally *.brd, *.sch and *.lbr are rejected)モード文字は、任意の順序と組み合わせで使用できます。ただし、a と w、または t と b のうち、それぞれ後の方のモードのみが意味を持ちます。たとえば、モード「abtw」はテキスト書き込み用にファイルを開き、「wt」と同じになります。

**ネストされた output 文**

使用可能な十分なファイル ハンドルがあり、2 つのアクティブな output 文が同じファイルにアクセスしない場合は、output 文をネストすることができます。

**例**

void PrintText(string s)
{
  printf("This also goes into the file: %s\n", s);
}
output("file.txt", "wt") {
  printf("Directly printed\n");
  PrintText("via function call");
  }#### footprint()、EAGLE 9.1 の新機能

**関数**

フットプリント コンテキストを開きます。

**構文**

footprint(identifier) statement (new as of EAGLE 9.1)library、deviceset、symbol も参照してください

*footprint* 文は、現在のエディタ ウィンドウにパッケージ図面が含まれている場合、パッケージ コンテキストを開きます。UL_FOOTPRINT タイプの変数が作成され、identifier によって示される名前が付けられます。

> **Note:** 注: footprint 文は、EAGLE 9.1 の新機能です。以前の EAGLE バージョンとの下位互換性を維持するために、*package* をエイリアスとして使用できます。

フットプリント コンテキストが正常に開き、フットプリント変数が作成されると、文が実行されます。文のスコープ内では、フットプリント変数にアクセスして、フットプリントから追加のデータを取得することができます。

現在のエディタ ウィンドウにフットプリント図面が含まれていない場合は、エラー メッセージが表示され、ULP は終了します。

**フットプリントが存在するかどうかを確認する**

引数を指定せずに footprint 文を使用すると、現在のエディタ ウィンドウにフットプリント図面が含まれているかどうかを確認できます。この場合、footprint は整数定数のように動作し、現在のエディタ ウィンドウにフットプリント図面がある場合は 1、それ以外の場合は 0 を返します。

**例**

if (footprint)
   footprint(F) {
     F.contacts(C)
       printf("Contact: %s\n", C.name);
     }#### schematic()

**関数**

回路図コンテキストを開きます。

**構文**

schematic(identifier) statementboard、library、module、sheet も参照してください

*schematic* 文は、現在のエディタ ウィンドウに回路図図面が含まれている場合、回路図コンテキストを開きます。UL_SCHEMATIC タイプの変数が作成され、identifier によって示される名前が付けられます。

回路図コンテキストが正常に開き、回路図変数が作成されると、文が実行されます。文のスコープ内では、回路図変数にアクセスして、回路図から追加のデータを取得することができます。

現在のエディタ ウィンドウに回路図図面が含まれていない場合は、エラー メッセージが表示され、ULP は終了します。

**回路図が存在するかどうかを確認する**

引数を指定せずに schematic 文を使用すると、現在のエディタ ウィンドウに回路図図面が含まれているかどうかを確認できます。この場合、schematic は整数定数のように動作し、現在のエディタ ウィンドウに回路図図面がある場合は 1、それ以外の場合は 0 を返します。

**基板から回路図にアクセスする**

現在のエディタ ウィンドウに基板図面が含まれている場合でも、次のように、schematic 文の前に接頭辞 project を追加することにより、その基板の回路図にアクセスできます。

project.schematic(S) { ... }これにより、現在のエディタ ウィンドウに回路図図面または基板図面のどちらが含まれているかには関係なく、回路図コンテキストが開きます。ただし、デスクトップ上のどこかに、その回路図が含まれているエディタ ウィンドウが存在する必要があります。

**現在のシートにアクセスする**

*sheet* 文を使用して、現在ロードされているシートに直接アクセスします。

**現在のモジュールにアクセスする**

*module* 文を使用して、現在編集中のモジュールに直接アクセスします。

**例**

if (schematic)
   schematic(S) {
     S.parts(P)
       printf("Part: %s\n", P.name);
     }#### sheet()

**関数**

シート コンテキストを開きます。

**構文**

sheet(identifier) statementschematic も参照してください

*sheet* 文は、現在のエディタ ウィンドウにシート図面が含まれている場合、シート コンテキストを開きます。UL_SHEET タイプの変数が作成され、identifier によって示される名前が付けられます。

シート コンテキストが正常に開き、シート変数が作成されると、文が実行されます。文のスコープ内では、シート変数にアクセスして、シートから追加のデータを取得することができます。

現在のエディタ ウィンドウにシート図面が含まれていない場合は、エラー メッセージが表示され、ULP は終了します。

**シートが存在するかどうかを確認する**

引数を指定せずに sheet 文を使用すると、現在のエディタ ウィンドウにシート図面が含まれているかどうかを確認できます。この場合、sheet は整数定数のように動作し、現在のエディタ ウィンドウにシート図面がある場合は 1、それ以外の場合は 0 を返します。

**例**

if (sheet)
   sheet(S) {
     S.instances(I)
       printf("Instance: %s\n", I.name);
     }#### symbol()

**関数**

記号コンテキストを開きます。

**構文**

symbol(identifier) statementlibrary、deviceset、footprint も参照してください

*symbol* 文は、現在のエディタ ウィンドウに記号図面が含まれている場合、記号コンテキストを開きます。UL_SYMBOL タイプの変数が作成され、identifier によって示される名前が付けられます。

記号コンテキストが正常に開き、記号変数が作成されると、文が実行されます。文のスコープ内では、記号変数にアクセスして、記号から追加のデータを取得することができます。

現在のエディタ ウィンドウに記号図面が含まれていない場合は、エラー メッセージが表示され、ULP は終了します。

**記号が存在するかどうかを確認する**

引数を指定せずに symbol 文を使用すると、現在のエディタ ウィンドウに記号図面が含まれているかどうかを確認できます。この場合、symbol は整数定数のように動作し、現在のエディタ ウィンドウに記号図面がある場合は 1、それ以外の場合は 0 を返します。

**例**

if (symbol)
   symbol(S) {
     S.pins(P)
       printf("Pin: %s\n", P.name);
     }
  
  
    
      
        **親ページ:** [ユーザ言語プログラミング](ECD-USER-LANG-REF.htm)