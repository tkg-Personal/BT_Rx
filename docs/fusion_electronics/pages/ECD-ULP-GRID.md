# UL_GRID

# UL_GRID

## データ メンバー

| 
 | 
 | 
 |

| 
distance | 
リアルな | 
 |

| 
ドット | 
int (0 = 線, 1= ドット) | 
 |

| 
複数 | 
int | 
 |

| 
オン | 
int (0 = オフ、1 = オン) | 
 |

| 
unit | 
int (GRID_UNIT_...) | 
 |

| 
unitdist | 
int (GRID_UNIT_...) | 
 |

UL_BOARD、UL_LIBRARY、UL_SCHEMATIC、「単位の変換」も参照してください

## 定数

| 
 | 
 | 
 |

| 
GRID_UNIT_MIC | 
ミクロン | 
 |

| 
GRID_UNIT_MM | 
ミリメートル | 
 |

| 
GRID_UNIT_MIL | 
ミル | 
 |

| 
GRID_UNIT_INCH | 
インチ | 
 |

## 注

*unitdist* は、実際のグリッド サイズ(*distance* によって返される)を定義するために設定されたグリッド単位を返し、*unit* は値の表示やユーザ入力の解釈に使用されるグリッド単位を返します。

## 例

board(B) {
  printf("Gridsize=%f\n", B.grid.distance);
  }