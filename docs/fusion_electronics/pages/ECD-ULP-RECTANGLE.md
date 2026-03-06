# UL_RECTANGLE

# UL_RECTANGLE

## データ メンバー

| 
 | 
 | 
 |

| 
angle | 
real (0.0...359.9) | 
 |

| 
画層 | 
int | 
 |

| 
x1、y1 | 
int (左下コーナー) | 
 |

| 
x2、y2 | 
int (右上コーナー) | 
 |

UL_BOARD、UL_FOOTPRINT、UL_SHEET、UL_SYMBOL も参照してください

座標(x1 y1)と(x2 y2)は、角度に関係なく、常に長方形の初期方向を参照します。

*angle* は、長方形が中心の周囲を反時計回りに回転する角度を定義します。中心座標は、(x1+x2)/2 と(y1+y2)/2 で指定します。

## 例

board(B) {
  B.rectangles(R) {
    printf("Rectangle: (%f %f), (%f %f)\n",
           u2mm(R.x1), u2mm(R.y1), u2mm(R.x2), u2mm(R.y2));
    }
  }