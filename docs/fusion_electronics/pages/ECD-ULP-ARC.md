# UL_ARC

# UL_ARC

## データ メンバー

| 
 | 
 | 
 |

| 
angle1 | 
real (開始角度、0.0...359.9) | 
 |

| 
angle2 | 
real (終了角度、0.0...719.9) | 
 |

| 
cap | 
int (CAP_...) | 
 |

| 
画層 | 
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
x1、y1 | 
int (始点) | 
 |

| 
x2、y2 | 
int (終点) | 
 |

| 
xc、yc | 
int (中心点) | 
 |

UL_WIRE も参照してください。

## 定数

| 
 | 
 | 
 |

| 
CAP_FLAT | 
平坦な円弧の終端 | 
 |

| 
CAP_ROUND | 
丸い円弧の終端 | 
 |

## 注

開始角度と終了角度は、数学的には正の値(つまり反時計回り)で定義されます(angle1 < angle2)。この条件を満たすために、UL_ARC の始点と終点は、円弧の派生元である UL_WIRE を基準にして交換される場合があります。

## 例

board(B) {
  B.wires(W) {
    if (W.arc)
       printf("Arc: (%f %f), (%f %f), (%f %f)\n",
              u2mm(W.arc.x1), u2mm(W.arc.y1), u2mm(W.arc.x2), u2mm(W.arc.y2), u2mm(W.arc.xc), u2mm(W.arc.yc));
    }
  }