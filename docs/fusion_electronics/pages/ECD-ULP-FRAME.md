# UL_FRAME

# UL_FRAME

## データ メンバー

| 
 | 
 | 
 |

| 
columns | 
int (-127...127) | 
 |

| 
行 | 
int (-26...26) | 
 |

| 
境界 | 
int (FRAME_BORDER_...) | 
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

UL_BOARD、UL_FOOTPRINT、UL_SHEET、UL_SYMBOL も参照してください

## 定数

| 
 | 
 | 
 |

| 
FRAME_BORDER_BOTTOM | 
下の境界を描画します | 
 |

| 
FRAME_BORDER_RIGHT | 
右の境界を描画します | 
 |

| 
FRAME_BORDER_TOP | 
上の境界を描画します | 
 |

| 
FRAME_BORDER_LEFT | 
左の境界を描画します | 
 |

## 注

*border* には、FRAME_BORDER_... で構成されるビット論理和の値が含まれ、4 つの境界のうちどれが実際に描画されるかを定義します。

ループ メンバー *texts()* および *wires()* は、フレームを構成するすべてのテキストおよびワイヤをループします。

## 例

board(B) {
  B.frames(F) {
    printf("Frame: (%f %f), (%f %f)\n",
           u2mm(F.x1), u2mm(F.y1), u2mm(F.x2), u2mm(F.y2));
    }
  }