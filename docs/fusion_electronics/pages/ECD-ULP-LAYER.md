# UL_LAYER

# UL_LAYER

## データ メンバー

| 
 | 
 | 
 |

| 
color | 
int | 
 |

| 
充填 | 
int | 
 |

| 
name | 
string (LAYER_NAME_LENGTH) | 
 |

| 
数値 | 
int | 
 |

| 
used | 
int (0 = 未使用、1 = 使用中) | 
 |

| 
visible | 
int (0 = オフ、1 = オン) | 
 |

UL_BOARD、UL_LIBRARY、UL_SCHEMATIC も参照してください

## 定数

| 
 | 
 | 
 |

| 
LAYER_NAME_LENGTH | 
レイヤー名の推奨最大長さ(形式設定された出力でのみ使用) | 
 |

| 
LAYER_TOP | 
画層番号 | 
 |

| 
LAYER_BOTTOM | 
 | 
 |

| 
LAYER_PADS | 
 | 
 |

| 
LAYER_VIAS | 
 | 
 |

| 
LAYER_UNROUTED | 
 | 
 |

| 
LAYER_DIMENSION | 
 | 
 |

| 
LAYER_TPLACE | 
 | 
 |

| 
LAYER_BPLACE | 
 | 
 |

| 
LAYER_TORIGINS | 
 | 
 |

| 
LAYER_BORIGINS | 
 | 
 |

| 
LAYER_TNAMES | 
 | 
 |

| 
LAYER_BNAMES | 
 | 
 |

| 
LAYER_TVALUES | 
 | 
 |

| 
LAYER_BVALUES | 
 | 
 |

| 
LAYER_TSTOP | 
 | 
 |

| 
LAYER_BSTOP | 
 | 
 |

| 
LAYER_TCREAM | 
 | 
 |

| 
LAYER_BCREAM | 
 | 
 |

| 
LAYER_TFINISH | 
 | 
 |

| 
LAYER_BFINISH | 
 | 
 |

| 
LAYER_TGLUE | 
 | 
 |

| 
LAYER_BGLUE | 
 | 
 |

| 
LAYER_TTEST | 
 | 
 |

| 
LAYER_BTEST | 
 | 
 |

| 
LAYER_TKEEPOUT | 
 | 
 |

| 
LAYER_BKEEPOUT | 
 | 
 |

| 
LAYER_TRESTRICT | 
 | 
 |

| 
LAYER_BRESTRICT | 
 | 
 |

| 
LAYER_VRESTRICT | 
 | 
 |

| 
LAYER_DRILLS | 
 | 
 |

| 
LAYER_HOLES | 
 | 
 |

| 
LAYER_MILLING | 
 | 
 |

| 
LAYER_MEASURES | 
 | 
 |

| 
LAYER_DOCUMENT | 
 | 
 |

| 
LAYER_REFERENCE | 
 | 
 |

| 
LAYER_TDOCU | 
 | 
 |

| 
LAYER_BDOCU | 
 | 
 |

| 
LAYER_NETS | 
 | 
 |

| 
LAYER_BUSSES | 
 | 
 |

| 
LAYER_PINS | 
 | 
 |

| 
LAYER_SYMBOLS | 
 | 
 |

| 
LAYER_NAMES | 
 | 
 |

| 
LAYER_VALUES | 
 | 
 |

| 
LAYER_INFO | 
 | 
 |

| 
LAYER_GUIDE | 
 | 
 |

| 
LAYER_USER | 
ユーザ定義画層の最小番号(100) | 
 |

## 例

board(B) {
  B.layers(L) printf("Layer %3d %s\n", L.number, L.name);
  }