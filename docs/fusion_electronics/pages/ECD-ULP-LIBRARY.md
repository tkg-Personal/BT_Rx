# UL_LIBRARY

# UL_LIBRARY

## データ メンバー

| 
 | 
 | 
 |

| 
editable | 
int (注を参照) | 
 |

| 
注釈 | 
string (注を参照) | 
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
ID | 
string (注を参照) | 
 |

| 
name | 
string (LIBRARY_NAME_LENGTH、注を参照) | 
 |

## ループ メンバー

| 
 | 
 | 
 |

| 
devices() | 
UL_DEVICE | 
 |

| 
devicesets() | 
UL_DEVICESET | 
 |

| 
layers() | 
UL_LAYER | 
 |

| 
footprints() | 
UL_FOOTPRINT (EAGLE 9.1 の新機能、注を参照) | 
 |

| 
packages3d() | 
UL_PACKAGE3D | 
 |

| 
symbols() | 
UL_SYMBOL | 
 |

## 定数

| 
 | 
 | 
 |

| 
LIBRARY_NAME_LENGTH | 
ライブラリ名の推奨最大長さ(形式設定された出力でのみ使用) | 
 |

*devices()* メンバーは、ライブラリ内のすべての UL_DEVICESET のパッケージ バリアントとテクノロジをループします。したがって、実際に使用できるすべてのデバイス バリエーションが得られます。*devicesets()* メンバーは UL_DEVICESET のみをループし、そこから UL_DEVICE メンバーを照会できます。

## 注

*footprints()* メンバーは、EAGLE 9.1 の新機能です。旧バージョンの EAGLE との下位互換性を維持するために、packages() をエイリアスとして使用できます。

*description* メンバーは DESCRIPTION コマンドで定義された完全な説明テキストを返し、headline メンバーは説明の最初の行のみを HTML タグなしで返します。説明テキストを使用する場合、改行文字(「\n」)を含めることができます。description と headline の情報はライブラリ図面内でのみ使用できます。ライブラリが UL_BOARD コンテキストまたは UL_SCHEMATIC コンテキストから派生している場合は使用できません。

ライブラリが UL_BOARD コンテキストまたは UL_SCHEMATIC コンテキストから派生している場合、*name* は純粋なライブラリ名(パスや拡張子はなし)を返します。それ以外の場合は、完全なライブラリ ファイル名を返します。

*id* メンバーは、この UL_LIBRARY が管理ライブラリを参照している場合にのみ適用できます。そうでない場合、id は空の文字列になります。

ユーザがライブラリを編集できる(ユーザがライブラリを所有している)場合、*editable* メンバーは値 1 を返します。そうでない場合は 0 が返されます。

## 例

library(L) {
  L.devices(D)     printf("Dev: %s\n", D.name);
  L.devicesets(D)  printf("Dev: %s\n", D.name);
  L.footprints(F)  printf("Fpt: %s\n", F.name);
  L.packages3d(P)  printf("3dp: %s\n", P.name);
  L.symbols(S)     printf("Sym: %s\n", S.name);
  }
schematic(S) {
  S.libraries(L) printf("Library: %s\n", L.name);
  }