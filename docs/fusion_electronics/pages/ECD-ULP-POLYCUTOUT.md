# UL_POLYCUTOUT

# UL_POLYCUTOUT

## データ メンバー

| 
 | 
 | 
 |

| 
layer | 
int | 
 |

## ループ メンバー

| 
 | 
 | 
 |

| 
contours() | 
UL_WIRE (注を参照) | 
 |

| 
wires() | 
UL_WIRE | 
 |

UL_BOARD、UL_FOOTPRINT も参照してください

## 注

*contours()* ループ メンバーは、ポリゴンベタのカットアウトの描画に使用されるワイヤ セグメントをループします。これらは、端から端までの方向の直線のワイヤ セグメントで、時計回りに方向付けられます。*wires()* ループ メンバーは、常にユーザが描画したポリゴン ワイヤをループします。