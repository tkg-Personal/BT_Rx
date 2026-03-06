# UL_SCHEMATIC

# UL_SCHEMATIC

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

| 
xreflabel | 
string | 
 |

| 
xrefpart | 
string | 
 |

## ループ メンバー

| 
 | 
 | 
 |

| 
allnets() | 
UL_NET (注を参照) | 
 |

| 
allparts() | 
UL_PART (注を参照) | 
 |

| 
attributes() | 
UL_ATTRIBUTE (注を参照) | 
 |

| 
classes() | 
UL_CLASS | 
 |

| 
errors() | 
UL_ERROR | 
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
modules() | 
UL_MODULE | 
 |

| 
nets() | 
UL_NET | 
 |

| 
parts() | 
UL_PART | 
 |

| 
sheets() | 
UL_SHEET | 
 |

| 
variantdefs() | 
UL_VARIANTDEF | 
 |

UL_BOARD、UL_LIBRARY、variant() も参照してください。

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
alwaysvectorfont をこの回路図で永続的に設定 | 
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

if (sch.alwaysvectorfont) {
   // alwaysvectorfont is set in general
   }
if (sch.alwaysvectorfont & ALWAYS_VECTOR_FONT_GUI) {
   // alwaysvectorfont is set in the user interface
   }*checked* によって返される値は、ブール演算コンテキストで使用でき、直前の「電気的ルール チェック」(ERC)の後でのみ設定されます。

*name* メンバーは、フォルダを含む完全なファイル名を返します。

*xreflabel* メンバーと *xrefpart* メンバーは、クロスリファレンス ラベルとパーツ相互参照を表示するために使用される形式文字列を返します。

*attributes()* ループ メンバーは、グローバル属性をループします。

#### 仮想ネット、allnets() ループ

*allnets()* ループ メンバーは、回路図自体の nets()、およびモジュール インスタンスによって生成されたすべての仮想ネットをループします。

#### 仮想パーツ、allparts() ループ

モジュール インスタンスによって階層パーツが生成されますが、実際には回路図に存在せず、対応するパーツがモジュール内に存在するだけです。このため、「仮想パーツ」と呼ぶことがあります。複数のモジュール インスタンスを介して、複数の仮想パーツで 1 つのモジュール パーツを使用できます。各仮想パーツは基板の(実際に存在する)要素に対応しているため、ユーザ言語ではこれらのパーツも提供します(BOM 生成など)。

*allparts()* ループ メンバーは、回路図自体の parts()、およびすべての仮想パーツをループします。

## 例

schematic(S) {
  S.parts(P) printf("Part: %s\n", P.name);
  }