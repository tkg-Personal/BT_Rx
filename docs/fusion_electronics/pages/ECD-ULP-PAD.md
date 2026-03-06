# UL_PAD

# UL_PAD

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
elongation | 
int | 
 |

| 
フラグ | 
int (PAD_FLAG_...) | 
 |

| 
name | 
string (PAD_NAME_LENGTH) | 
 |

| 
shape[layer] | 
int (PAD_SHAPE_...) | 
 |

| 
呼び合い | 
string | 
 |

| 
x、y | 
int (中心点、注を参照) | 
 |

UL_FOOTPRINT、UL_CONTACT、UL_SMD も参照してください

## 定数

| 
 | 
 | 
 |

| 
PAD_FLAG_STOP | 
ストップ マスクを生成 | 
 |

| 
PAD_FLAG_THERMALS | 
熱を生成 | 
 |

| 
PAD_FLAG_FIRST | 
特殊な「最初のパッド」の形状を使用 | 
 |

| 
PAD_SHAPE_SQUARE | 
正方形 | 
 |

| 
PAD_SHAPE_ROUND | 
円形 | 
 |

| 
PAD_SHAPE_OCTAGON | 
八角形 | 
 |

| 
PAD_SHAPE_LONG | 
long | 
 |

| 
PAD_SHAPE_OFFSET | 
offset | 
 |

| 
PAD_NAME_LENGTH | 
パッド名の最大推奨長さ(CONTACT_NAME_LENGTH と同じ) | 
 |

## 注

パッドのパラメータは、アクセスするコンテキストによって異なります。

- パッドが UL_LIBRARY コンテキストから派生している場合、座標(x, y)と角度はフットプリント図面で定義されたものと同じになります

- それ以外の場合、基板から実際の値を取得します

パッドの *diameter* と *shape* は、デザイン ルールに応じて各レイヤーで異なる可能性があるため、それらを取得するレイヤーによって異なります。データ メンバー diameter または shape のインデックスとして LAYER_TOP、LAYER_BOTTOM、LAYER_TSTOP、または LAYER_BSTOP のいずれかのレイヤーを指定する場合、結果の値はデザイン ルールに従って計算されます。LAYER_PADS が指定されている場合、ライブラリで定義されている未処理の値が返されます。

*drillsymbol* は、このドリル直径に割り当てられているドリル記号の番号を返します(定義済みのドリル記号のリストについては、マニュアルを参照してください)。値が 0 の場合、このドリル直径に記号が割り当てられていないことを意味します。

*angle* は、パッドが中心の周囲を反時計回りに回転する角度を定義します。

*elongation* は、形状 PAD_SHAPE_LONG および PAD_SHAPE_OFFSET の場合にのみ有効で、パッドの長い側が短い側よりどの程度長いかを示す割合を定義します。このメンバーは、他のパッド形状の場合は 0 を返します。

flags によって返される値は、個々のフラグ設定を決定するために、次のように PAD_FLAG_... 定数でマスクする必要があります。

if (pad.flags & PAD_FLAG_STOP) {
   ...
   }ULP で単にオブジェクトを描画するだけの場合、これらのフラグを明示的にチェックする必要はないことに注意してください。*diameter[]* メンバーと *shape[]* メンバーは、適切なデータを返します。たとえば、PAD_FLAG_STOP が設定されている場合、diameter[LAYER_TSTOP] は 0 を返し、このレイヤーには何も描画されません。flags メンバーは、主にライブラリ オブジェクトを作成するスクリプト ファイルを作成する ULP 用です。

## 例

library(L) {
  L.footprints(FPT) {
    FPT.contacts(C) {
      if (C.pad)
         printf("Pad: '%s', (%f %f), d=%f\n",
                 C.name, u2mm(C.pad.x), u2mm(C.pad.y), u2mm(C.pad.diameter[LAYER_BOTTOM]));
      }
    }
  }