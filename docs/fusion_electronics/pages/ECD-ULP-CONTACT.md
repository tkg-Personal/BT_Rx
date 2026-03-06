# UL_CONTACT

# UL_CONTACT

## データ メンバー

| 
 | 
 | 
 |

| 
name | 
string (CONTACT_NAME_LENGTH) | 
 |

| 
パッド | 
UL_PAD | 
 |

| 
呼び合い | 
string | 
 |

| 
smd | 
UL_SMD | 
 |

| 
x、y | 
int (中心点、注を参照) | 
 |

## ループ メンバー

| 
 | 
 | 
 |

| 
polyshapes() | 
UL_POLYSHAPE (任意のパッド形状) | 
 |

| 
wires() | 
UL_WIRE (任意のパッド形状) | 
 |

UL_FOOTPRINT、UL_PAD、UL_SMD、UL_CONTACTREF、UL_PINREF も参照してください

## 定数

| 
 | 
 | 
 |

| 
CONTACT_NAME_LENGTH | 
接触名の推奨最大長さ(形式設定された出力でのみ使用) | 
 |

## 注

*signal* データ メンバーは、この接触が接続されている信号を返します(基板のコンテキストでのみ使用可能)。

接触の座標(x、y)は、接触を呼び出したコンテキストによって異なります。

- 接点が UL_LIBRARY コンテキストから派生している場合、接触の座標はパッケージ図面で定義されたものと同じになります。

- それ以外の場合、基板から実際の値を取得します。

## 例

library(L) {
  L.footprints(FPT) {
    FPT.contacts(C) {
      printf("Contact: '%s', (%f %f)\n",
             C.name, u2mm(C.x), u2mm(C.y));
      }
    }
  }