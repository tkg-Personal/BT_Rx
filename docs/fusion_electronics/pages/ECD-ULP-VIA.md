# UL_VIA

# UL_VIA

## データ メンバー

| 
 | 
 | 
 |

| 
diameter[layer] | 
int | 
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
end | 
int | 
 |

| 
フラグ | 
int (VIA_FLAG_...) | 
 |

| 
shape[layer] | 
int (VIA_SHAPE_...) | 
 |

| 
起動 | 
int | 
 |

| 
x、y | 
int (中心点) | 
 |

UL_SIGNAL も参照してください

## 定数

| 
 | 
 | 
 |

| 
VIA_FLAG_STOP | 
常にストップ マスクを生成 | 
 |

| 
VIA_SHAPE_SQUARE | 
正方形 | 
 |

| 
VIA_SHAPE_ROUND | 
円形 | 
 |

| 
VIA_SHAPE_OCTAGON | 
八角形 | 
 |

## 注

ビアの diameter と shape は、デザイン ルールに応じて各画層で異なる可能性があるため、それらを取得する画層によって異なります。データ メンバ diameter または shape へのインデックスとして LAYER_TOP、LAYER_BOTTOM、LAYER_TSTOP、または LAYER_BSTOP のいずれかの画層を指定する場合、結果の値はデザイン ルールに従って計算されます。LAYER_VIAS が指定されている場合、ビアで定義されている未処理の値が返されます。

*diameter* と *shape* は、常に指定されたレイヤーでのビアの直径または形状を返します。これは、その特定のビアがそのレイヤーを対象としていない場合(または、そのレイヤーがレイヤー設定で使用されていない場合)でも同様です。

*start* と *end* は、そのビアの開始と終了のレイヤー番号を返します。*start* の値は常に *end* の値よりも小さくなります。

*drillsymbol* は、このドリル直径に割り当てられているドリル記号の番号を返します(定義済みのドリル記号のリストについては、マニュアルを参照してください)。値が 0 の場合、このドリル直径に記号が割り当てられていないことを意味します。

## 例

board(B) {
  B.signals(S) {
    S.vias(V) {
      printf("Via: (%f %f)\n", u2mm(V.x), u2mm(V.y));
      }
    }
  }