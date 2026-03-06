# UL_GATE

# UL_GATE

## データ メンバー

| 
 | 
 | 
 |

| 
addlevel | 
int (GATE_ADDLEVEL_...) | 
 |

| 
name | 
string (GATE_NAME_LENGTH) | 
 |

| 
swaplevel | 
int | 
 |

| 
シンボル | 
UL_SYMBOL | 
 |

| 
x、y | 
int (原点、注を参照) | 
 |

UL_DEVICE も参照してください

## 定数

| 
 | 
 | 
 |

| 
GATE_ADDLEVEL_MUST | 
必須 | 
 |

| 
GATE_ADDLEVEL_CAN | 
可能 | 
 |

| 
GATE_ADDLEVEL_NEXT | 
次へ進む | 
 |

| 
GATE_ADDLEVEL_REQUEST | 
request | 
 |

| 
GATE_ADDLEVEL_ALWAYS | 
always | 
 |

| 
GATE_NAME_LENGTH | 
ゲート名の推奨最大長さ(形式設定された出力でのみ使用) | 
 |

## 注

原点(x, y)の座標は、常にデバイス内のゲートの位置の座標です(UL_GATE が UL_INSTANCE から派生している場合も含む)。

## 例

library(L) {
  L.devices(D) {
    printf("Device: %s, Footprint: %s\n", D.name, D.footprint.name);
    D.gates(G) {
      printf("\t%s, swaplevel=%d, symbol=%s\n",
             G.name, G.swaplevel, G.symbol.name);
      }
    }
  }