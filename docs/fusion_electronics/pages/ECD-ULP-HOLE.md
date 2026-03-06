# UL_HOLE

# UL_HOLE

## データ メンバー

| 
 | 
 | 
 |

| 
diameter[layer] | 
int (注を参照) | 
 |

| 
ﾄﾞﾘﾙ | 
int | 
 |

| 
drillsymbol | 
int | 
 |

| 
x、y | 
int (中心点) | 
 |

UL_BOARD、UL_FOOTPRINT も参照してください

## 注

*diameter[]* は、LAYER_TSTOP および LAYER_BSTOP の各レイヤーに対してのみ定義され、指定したレイヤーのはんだストップ マスクの直径を返します。

*drillsymbol* は、このドリル直径に割り当てられているドリル記号の番号を返します(定義済みのドリル記号のリストについては、マニュアルを参照してください)。値が 0 の場合、このドリル直径に記号が割り当てられていないことを意味します。

## 例

board(B) {
  B.holes(H) {
    printf("Hole: (%f %f), drill=%f\n",
           u2mm(H.x), u2mm(H.y), u2mm(H.drill));
    }
  }