# UL_POLYPOUR

# UL_POLYPOUR

## データ メンバー

| 
 | 
 | 
 |

| 
hatched | 
int (0 = オフ、1 = オン) | 
 |

| 
選択表示 | 
int | 
 |

| 
画層 | 
int | 
 |

| 
orphans | 
int (0 = オフ、1 = オン) | 
 |

| 
pour | 
int (POLYGON_POUR_...) | 
 |

| 
rank | 
int | 
 |

| 
間隔 | 
int | 
 |

| 
thermals | 
int (0 = オフ、1 = オン) | 
 |

| 
thermalWidth | 
int | 
 |

| 
width | 
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
fillings() | 
UL_WIRE (注を参照) | 
 |

| 
wires() | 
UL_WIRE | 
 |

UL_SIGNAL も参照してください

## 注

*contours()* ループ メンバーは、ポリゴンベタの塗り潰しデータのアウトラインの描画に使用されるワイヤをループします。*fillings()* ループ メンバーは、hatched データ メンバーが設定されている場合にポリゴンベタの描画に使用されるハッチング ワイヤをループします。hatched データ メンバーが設定されていない場合、*fillings()* は何も実行しません。*wires()* ループ メンバーは、常にユーザが描画したポリゴン ワイヤをループします。

ポリゴンベタの塗り潰し結果は、いくつかの異なる閉じた図形(正のポリゴンベタ輪郭と呼ばれる)で構成されます。それぞれの図形には、他のオブジェクトが正の輪郭から取り除かれることで生じる空間または穴(負のポリゴンベタ輪郭)が含まれる場合があります。負の輪郭に他の正の輪郭が含まれる場合もあり、以下同様です。

## contours() を呼び出して結果を解釈する

2 番目のパラメータを指定せずに *contours()* ループ メンバーを呼び出した場合、正のポリゴンベタ輪郭のアウトラインまたは負のポリゴンベタ輪郭の穴のどちらに属しているかには関係なく、すべての輪郭ワイヤをループします。この場合、*contours()* によってループされるワイヤは、常に正のポリゴンベタ輪郭で開始されます。正の輪郭ワイヤと負の輪郭ワイヤを個別に取得する場合は、追加の整数パラメータを指定して *contours()* を呼び出します(次の 2 番目の例を参照)。このパラメータの符号は、正または負のポリゴンベタ輪郭のどちらを返すかを決定し、値はそのポリゴンベタ輪郭のインデックスを示します。指定したインデックスを持つ銅箔ベタ輪郭がない場合、文は実行されません。この方法の利点は、特定の銅箔ベタ輪郭の始点と終点を自分で(座標を比較して)決定する必要がないことです。任意のインデックスについて、この文は銅箔ベタ輪郭のすべてのワイヤに対して実行されます。2 番目のパラメータを 0 として渡すと、2 番目のパラメータを指定しない場合と同じ動作になります。

銅箔ベタ輪郭のワイヤは、端から端までの方向になります。ある輪郭の終了位置と次の輪郭の開始位置を判断するには、最初のワイヤの(x1,y1)座標を保存し、次の各ワイヤの(x2,y2)座標と照合します。これらの点が同じ場合、銅箔ベタ輪郭の最後のワイヤが見つかっています。

正の銅箔ベタ輪郭(外側のエッジを形成)は時計回りに方向付けられ、負の銅箔ベタ輪郭(穴のエッジを形成)は反時計回りに方向付けられます。銅箔ベタの「内側」と「外側」を決定するには、任意の輪郭に沿って点(x1,y1)から(x2,y2)の方向を見てみます。銅箔ベタの「内側」は常にワイヤの右側です。

## 例

board(B) {
  B.signals(S) {
    S.polypours(P) {
      int x0, y0, first = 1;
      P.contours(W) {
        if (first) {
           // a new polygon contouris starting
           x0 = W.x1;
           y0 = W.y1;
           }
        // ...
        // do something with the wire
        // ...
        if (first)
           first = 0;
        else if (W.x2 == x0 && W.y2 == y0) {
           // this was the last wire of the polygon contour,
           // so the next wire (if any) will be the first wire
           // of the next polygon contour
           first = 1;
           }
        }
      }
    }
  }
board(B) {
  B.signals(S) {
    S.polypours(P) {
      // process only the "positive" polygon contours:
      int i = 1;
      int active;
      do {
         active = 0;
         P.contours(W, i) {
           active = 1;
           // do something with the wire
           }
         i++;
         } while (active);
      }
    }
  }