# UL_PACKAGE3D

# UL_PACKAGE3D

## データ メンバー

| 
 | 
 | 
 |

| 
description | 
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
name | 
文字列 | 
 |

| 
urn | 
string (注を参照) | 
 |

UL_DEVICE、UL_ELEMENT、UL_LIBRARY、UL_FOOTPRINT も参照してください

## 注

*description* メンバーは完全な説明テキストを返し、*headline* メンバーは説明の最初の行のみを HTML タグなしで返します。説明テキストを使用する場合、改行文字(「\n」)を含めることができます。

urn には、urn:adsk.eagle:package:123/4 という形式の、この 3D パッケージの一意の識別子が含まれています。この場合、/ の後の部分は 3D パッケージのバージョンになります。ベース URN (バージョンなし)を取得するには、*urnbase()* を使用します。バージョンを取得するには、*urnversion()* を使用します。

*libraryurn* および *libraryversion* は、この UL_PACKAGE3D が管理ライブラリからのものである場合にのみ適用できます。そうでない場合、libraryurn は空の文字列になり、libraryversion は -1 になります。

## 例

library(L) {
  L.packages3d(P3D) {
    printf("3D Package: %s (%s, Version %d)\n", P3D.name, urnbase(P3D.urn), urnversion(P3D.urn));
    }
  }
board(B) {
  B.elements(E) {
    printf("Element: %s", E.name);
    if (E.package3d) printf(", 3D Package: %s (%s, Version %d)\n", E.package3d.name, urnbase(E.package3d.urn), urnversion(E.package3d.urn));
    else printf("\n");
    }
  }