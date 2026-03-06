# UL_BOARD

# UL_BOARD

## データ メンバー

| 
 | 
 | 
 |

| 
alwaysvectorfont | 
int (ALWAYS_VECTOR_FONT_...、注を参照) | 
 |

| 
面積 | 
UL_AREA | 
 |

| 
オン | 
int (注を参照) | 
 |

| 
注釈 | 
string | 
 |

| 
グリッド | 
UL_GRID | 
 |

| 
headline | 
string | 
 |

| 
name | 
string (注を参照) | 
 |

| 
verticaltext | 
int (VERTICAL_TEXT_...) | 
 |

## ループ メンバー

| 
 | 
 | 
 |

| 
attributes() | 
UL_ATTRIBUTE (注を参照) | 
 |

| 
circles() | 
UL_CIRCLE | 
 |

| 
classes() | 
UL_CLASS | 
 |

| 
dimensions() | 
UL_DIMENSION | 
 |

| 
elements() | 
UL_ELEMENT | 
 |

| 
errors() | 
UL_ERROR | 
 |

| 
frames() | 
UL_FRAME | 
 |

| 
holes() | 
UL_HOLE | 
 |

| 
layers() | 
UL_LAYER | 
 |

| 
libraries() | 
UL_LIBRARY | 
 |

| 
polycutouts() | 
UL_POLYCUTOUT | 
 |

| 
polyshapes() | 
UL_POLYSHAPE | 
 |

| 
rectangles() | 
UL_RECTANGLE | 
 |

| 
signals() | 
UL_SIGNAL | 
 |

| 
texts() | 
UL_TEXT | 
 |

| 
variantdefs() | 
UL_VARIANTDEF | 
 |

| 
wires() | 
UL_WIRE | 
 |

UL_LIBRARY、UL_SCHEMATIC、variant() も参照してください

## 定数

| 
 | 
 | 
 |

| 
ALWAYS_VECTOR_FONT_GUI | 
alwaysvectorfont をユーザ インタフェース ダイアログで設定 | 
 |

| 
ALWAYS_VECTOR_FONT_PERSISTENT | 
alwaysvectorfont をこの基板で永続的に設定 | 
 |

| 
VERTICAL_TEXT_UP | 
縦書きテキストを読む方向: 上 | 
 |

| 
VERTICAL_TEXT_DOWN | 
縦書きテキストを読む方向: 下 | 
 |

## 注

*alwaysvectorfont* によって返される値は、次のように、ブール演算コンテキストで使用したり、この設定のソースを決定するために ALWAYS_VECTOR_FONT_... 定数でマスクできます。

if (B.alwaysvectorfont) {
   // alwaysvectorfont is set in general
   }
if (B.alwaysvectorfont & ALWAYS_VECTOR_FONT_GUI) {
   // alwaysvectorfont is set in the user interface
   }*checked* によって返される値は、ブール演算コンテキストで使用でき、直前の「デザイン ルール チェック」(DRC)の後でのみ設定されます。

name メンバーは、フォルダを含む完全なファイル名を返します。

*attributes()* ループ メンバーは、グローバル属性をループします。

## 例

board(B) {
  B.elements(E) printf("Element: %s\n", E.name);
  B.signals(S)  printf("Signal: %s\n", S.name);