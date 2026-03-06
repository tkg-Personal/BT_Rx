# UL_FOOTPRINT

# UL_FOOTPRINT

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
string (PACKAGE_NAME_LENGTH) | 
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
contacts() | 
UL_CONTACT | 
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
holes() | 
UL_HOLE | 
 |

| 
polycutouts() | 
UL_POLYCUTOUT | 
 |

| 
polyshapes() | 
UL_POLYSHAPE (注を参照) | 
 |

| 
rectangles() | 
UL_RECTANGLE | 
 |

| 
texts() | 
UL_TEXT (注を参照) | 
 |

| 
wires() | 
UL_WIRE (注を参照) | 
 |

UL_DEVICE、UL_ELEMENT、UL_LIBRARY、UL_PACKAGE3D も参照してください

## 定数

| 
 | 
 | 
 |

| 
PACKAGE_NAME_LENGTH | 
パッケージ名の推奨最大長さ(形式設定された出力でのみ使用) | 
 |

## 注

UL_FOOTPRINT オブジェクトは、EAGLE 9.1 の新機能です。以前の EAGLE バージョンとの下位互換性を維持するために、UL_PACKAGE をエイリアスとして使用できます。

*description* メンバーは DESCRIPTION コマンドで定義された完全な説明テキストを返し、headline メンバーは説明の最初の行のみを HTML タグなしで返します。説明テキストを使用する場合、改行文字(「\n」)を含めることができます。

UL_FOOTPRINT が UL_ELEMENT から派生している場合、texts() メンバはその要素のアタッチ解除されていないテキストのみをループします。

UL_FOOTPRINT が UL_ELEMENT から派生している場合、任意のパッド形状との接触に属するポリゴン形状およびワイヤは、この接触のループ メンバー polygons() および wires() でのみ使用できます。

*urn* には、urn:adsk.eagle:footprint:123/4 という形式の、このフットプリントの一意の識別子が含まれています。この場合、/ の後の部分はフットプリントのバージョンになります。ベース URN (バージョンなし)を取得するには、*urnbase()* を使用します。バージョンを取得するには、*urnversion()* を使用します。

*libraryurn* および *libraryversion* は、この UL_FOOTPRINT が管理ライブラリからのものである場合にのみ適用できます。そうでない場合、libraryurn は空の文字列になり、libraryversion は -1 になります。

*locallymodified* メンバーは、この UL_FOOTPRINT にローカルの修正がない場合は 0、この UL_FOOTPRINT にローカルの修正がある場合は 1 です。*librarylocallymodified* メンバーは、0 (この UL_FOOTPRINT がローカルで修正されたライブラリからのものではない場合)または 1 (この UL_FOOTPRINT がローカルで修正されたライブラリからのものである場合)になります。

## 例

library(L) {
  L.footprints(FPT) {
    printf("Footprint: %s\n", FPT.name);
    FPT.contacts(C) {
      if (C.pad)
         printf("\tPad: %s, (%f %f)\n",
                 C.name, u2mm(C.pad.x), u2mm(C.pad.y));
      else if (C.smd)
         printf("\tSmd: %s, (%f %f)\n",
                 C.name, u2mm(C.smd.x), u2mm(C.smd.y));
      }
    }
  }
board(B) {
  B.elements(E) {
    printf("Element: %s, Footprint: %s\n", E.name, E.footprint.name);
    }
  }