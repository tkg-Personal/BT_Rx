# UL_SMD

# UL_SMD

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
dx[layer]、dy[layer] | 
int (size) | 
 |

| 
フラグ | 
int (SMD_FLAG_...) | 
 |

| 
画層 | 
int (注を参照) | 
 |

| 
name | 
string (SMD_NAME_LENGTH) | 
 |

| 
roundness | 
int (注を参照) | 
 |

| 
呼び合い | 
string | 
 |

| 
x、y | 
int (中心点、注を参照) | 
 |

UL_FOOTPRINT、UL_CONTACT、UL_PAD も参照してください

## 定数

| 
 | 
 | 
 |

| 
SMD_FLAG_STOP | 
ストップ マスクを生成 | 
 |

| 
SMD_FLAG_THERMALS | 
熱を生成 | 
 |

| 
SMD_FLAG_CREAM | 
クリーム マスクを生成 | 
 |

| 
SMD_NAME_LENGTH | 
SMD 名の最大推奨長さ(CONTACT_NAME_LENGTH と同じ) | 
 |

## 注

SMD のパラメータは、アクセスするコンテキストによって異なります。

- SMD が UL_LIBRARY コンテキストから派生している場合、SMD の座標(x, y)、角度、画層、および丸みはフットプリント図面で定義されたものと同じになります

- それ以外の場合、基板から実際の値を取得します。

dx データ メンバと dy データ メンバが任意指定の画層インデックスを指定して呼び出された場合、その画層のデータがデザイン ルールに従って返されます。有効なレイヤーは、Top レイヤーにある SMD では LAYER_TOP、LAYER_TSTOP、および LAYER_TCREAM、Bottom レイヤーにある SMD では LAYER_BOTTOM、LAYER_BSTOP、および LAYER_BCREAM です。

*angle* は、SMD が中心の周囲を反時計回りに回転する角度を定義します。

flags によって返される値は、個々のフラグ設定を決定するために、次のように SMD_FLAG_... 定数でマスクする必要があります。

if (smd.flags & SMD_FLAG_STOP) {
   ...
   }ULP で単にオブジェクトを描画するだけの場合、これらのフラグを明示的にチェックする必要はないことに注意してください。dx[] メンバーと dy[] メンバーは、適切なデータを返します。たとえば、SMD_FLAG_STOP が設定されている場合、dx[LAYER_TSTOP] は 0 を返し、このレイヤーには何も描画されません。flags メンバーは、主にライブラリ オブジェクトを作成するスクリプト ファイルを作成する ULP 用です。

## 例

library(L) {
  L.footprints(FPT) {
    FPT.contacts(C) {
      if (C.smd)
         printf("Smd: '%s', (%f %f), dx=%f, dy=%f\n",
                 C.name, u2mm(C.smd.x), u2mm(C.smd.y), u2mm(C.smd.dx), u2mm(C.smd.dy));
      }
    }
  }