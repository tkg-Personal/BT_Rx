# UL_MODULE

# UL_MODULE

## データ メンバー

| 
 | 
 | 
 |

| 
dx、dy | 
int (サイズ) | 
 |

| 
注釈 | 
string | 
 |

| 
headline | 
string | 
 |

| 
name | 
文字列 | 
 |

| 
prefix | 
string | 
 |

## ループ メンバー

| 
 | 
 | 
 |

| 
parts() | 
UL_PART | 
 |

| 
ports() | 
UL_PORT | 
 |

| 
sheets() | 
UL_SHEET | 
 |

| 
variantdefs() | 
UL_VARIANTDEF | 
 |

UL_PORT、UL_SCHEMATIC も参照してください

## 例

schematic(SCH) {
  SCH.modules(M) {
    M.parts(P) printf("Part: %s\n", P.name);
    }
  }