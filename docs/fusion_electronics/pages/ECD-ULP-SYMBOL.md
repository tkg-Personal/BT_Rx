# UL_SYMBOL

# UL_SYMBOL

## データ メンバー

| 
 | 
 | 
 |

| 
area | 
UL_AREA | 
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
ライブラリ | 
string | 
 |

| 
libraryurn | 
string (注を参照) | 
 |

| 
libraryversion | 
int (注を参照) | 
 |

| 
locallymodified | 
int (注を参照) | 
 |

| 
librarylocallymodified | 
int (注を参照) | 
 |

| 
name | 
string (SYMBOL_NAME_LENGTH) | 
 |

| 
urn | 
string (注を参照) | 
 |

## ループ メンバー

| 
 | 
 | 
 |

| 
circles() | 
UL_CIRCLE | 
 |

| 
dimensions() | 
UL_DIMENSION | 
 |

| 
frames() | 
UL_FRAME | 
 |

| 
rectangles() | 
UL_RECTANGLE | 
 |

| 
pins() | 
UL_PIN | 
 |

| 
polyshapes() | 
UL_POLYSHAPE | 
 |

| 
texts() | 
UL_TEXT (注を参照) | 
 |

| 
wires() | 
UL_WIRE | 
 |

UL_GATE、UL_LIBRARY も参照してください

## 定数

| 
 | 
 | 
 |

| 
SYMBOL_NAME_LENGTH | 
記号名の推奨最大長さ(形式設定された出力でのみ使用) | 
 |

## 注

UL_SYMBOL が UL_INSTANCE から派生している場合、texts() メンバーはそのインスタンスのアタッチ解除されていないテキストのみをループします。*urn* には、urn:adsk.eagle:symbol:123/4 という形式の、この記号の一意の識別子が含まれています。この場合、/ の後の部分は記号のバージョンになります。ベース URN (バージョンなし)を取得するには、urnbase() を使用します。バージョンを取得するには、urnversion() を使用します。

*libraryurn* および *libraryversion* は、この UL_SYMBOL が管理ライブラリからのものである場合にのみ適用できます。そうでない場合、libraryurn は空の文字列になり、libraryversion は -1 になります。

*locallymodified* メンバーは、この UL_SYMBOL にローカルの修正がない場合は 0、この UL_SYMBOL にローカルの修正がある場合は 1 です。*librarylocallymodified* メンバーは、0 (この UL_SYMBOL がローカルで修正されたライブラリからのものではない場合)または 1 (この UL_SYMBOL がローカルで修正されたライブラリからのものである場合)になります。

## 例

library(L) {
  L.symbols(S) printf("Sym: %s\n", S.name);
  }