# UL_CIRCLE

# UL_CIRCLE

## データ メンバー

| 
 | 
 | 
 |

| 
layer | 
int | 
 |

| 
半径 | 
int | 
 |

| 
width | 
int | 
 |

| 
x、y | 
int (中心点) | 
 |

UL_BOARD、UL_FOOTPRINT、UL_SHEET、UL_SYMBOL も参照してください

## 例

board(B) {
  B.circles(C) {
    printf("Circle: (%f %f), r=%d, w=%d\n",
           u2mm(C.x), u2mm(C.y), u2mm(C.radius), u2mm(C.width));
    }
  }