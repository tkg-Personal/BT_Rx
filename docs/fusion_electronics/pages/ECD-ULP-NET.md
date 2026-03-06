# UL_NET

# UL_NET

## データ メンバー

| 
 | 
 | 
 |

| 
class | 
UL_CLASS | 
 |

| 
列 | 
string (注を参照) | 
 |

| 
name | 
string (NET_NAME_LENGTH) | 
 |

| 
row | 
string (注を参照) | 
 |

## ループ メンバー

| 
 | 
 | 
 |

| 
portrefs() | 
UL_PORTREF | 
 |

| 
pinrefs() | 
UL_PINREF (注を参照) | 
 |

| 
segments() | 
UL_SEGMENT (注を参照) | 
 |

UL_SHEET、UL_SCHEMATIC も参照してください

## 定数

| 
 | 
 | 
 |

| 
NET_NAME_LENGTH | 
ネット名の推奨最大長さ(形式設定された出力でのみ使用) | 
 |

## 注

*pinrefs()* ループ メンバーは、ネットが回路図コンテキスト内にある場合にのみ使用できます。*segments()* ループ メンバーは、ネットがシート コンテキスト内にある場合にのみ使用できます。

*column* メンバーと *row* メンバーは、このネットが描画されたシートのフレーム内での列と行の位置を返します。ネットは特定の領域全体に拡張できるため、これらの関数はそれぞれ、空白で区切られた 2 つの値を返します。column の場合、これらはネットが接している最も左と最も右の列になり、row の場合は最も上と最も下の行になります。

シート上のネットの列と行を決定する場合、最初に列を、次にその列内の行を考慮します。ここでは、XREF ラベルが通常のラベルよりも優先され、通常のラベルはネット ワイヤよりも優先されます。

そのシートにフレームがない場合は、「? ?」(2 つの疑問符)が返されます。ネットの一部がフレームの外側に配置されている場合、いずれかの値が「?」(疑問符)になる場合があります。これらのメンバーは、シート コンテキストでのみ使用できます。

UL_SCHEMATIC.allnets() を使用してネットを取得する場合、有効なメンバは name、class、および pinrefs() です。pinrefs() は、モジュール インスタンスによって生成された仮想ピン参照もループします。

## 例

schematic(S) {
  S.nets(N) {
    printf("Net: %s\n", N.name);
    // N.segments(SEG) will NOT work here!
    }
  // or with virt. nets:
  S.allnets(N) {
    printf("Net: %s\n", N.name);
    }
  }
schematic(S) {
  S.sheets(SH) {
    SH.nets(N) {
      printf("Net: %s\n", N.name);
      N.segments(SEG) {
        SEG.wires(W) {
          printf("\tWire: (%f %f) (%f %f)\n",
                 u2mm(W.x1), u2mm(W.y1), u2mm(W.x2), u2mm(W.y2));
          }
        }
      }
    }
  }