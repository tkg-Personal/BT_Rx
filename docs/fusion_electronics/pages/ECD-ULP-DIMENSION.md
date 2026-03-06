# UL_DIMENSION

# UL_DIMENSION

## データ メンバー

| 
 | 
 | 
 |

| 
dtype | 
int (DIMENSION_...) | 
 |

| 
画層 | 
int | 
 |

| 
extlength | 
int | 
 |

| 
extoffset | 
int | 
 |

| 
extwidth | 
int | 
 |

| 
精度 | 
int | 
 |

| 
ratio | 
int | 
 |

| 
size | 
int | 
 |

| 
unit | 
int (GRID_UNIT_...) | 
 |

| 
visible | 
int (unit、0 = オフ、1 = オン) | 
 |

| 
width | 
int | 
 |

| 
x1、y1 | 
int (最初の参照点) | 
 |

| 
x2、y2 | 
int (2 番目の参照点) | 
 |

| 
x3、y3 | 
int (位置合わせの参照点) | 
 |

## ループ メンバー

| 
 | 
 | 
 |

| 
texts() | 
UL_TEXT | 
 |

| 
wires() | 
UL_WIRE | 
 |

UL_BOARD、UL_GRID、UL_FOOTPRINT、UL_SHEET、UL_SYMBOL も参照してください

## 定数

| 
 | 
 | 
 |

| 
DIMENSION_PARALLEL | 
平行な計測線を使用した長さ寸法 | 
 |

| 
DIMENSION_HORIZONTAL | 
水平な計測線を使用した長さ寸法 | 
 |

| 
DIMENSION_VERTICAL | 
垂直な計測線を使用した長さ寸法 | 
 |

| 
DIMENSION_RADIUS | 
半径寸法 | 
 |

| 
DIMENSION_DIAMETER | 
直径寸法 | 
 |

| 
DIMENSION_ANGLE | 
角度寸法 | 
 |

| 
DIMENSION_LEADER | 
任意のポインタ | 
 |

## 注

ループ メンバー *texts()* および *wires()* は、寸法を構成するすべてのテキストおよびワイヤをループします。

## 例

board(B) {
  B.dimensions(D) {
    printf("Dimension: (%f %f), (%f %f), (%f %f)\n",
           u2mm(D.x1), u2mm(D.y1), u2mm(D.x2), u2mm(D.y2), u2mm(D.x3), u2mm(D.y3));
    }
  }