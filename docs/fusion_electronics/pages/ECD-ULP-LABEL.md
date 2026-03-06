# UL_LABEL

# UL_LABEL

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
ミラー | 
int | 
 |

| 
spin | 
int | 
 |

| 
文字 | 
UL_TEXT | 
 |

| 
x、y | 
int (原点) | 
 |

| 
外部参照 | 
int (0 = プレーン、1 = 相互参照) | 
 |

## ループ メンバー

| 
 | 
 | 
 |

| 
wires() | 
UL_WIRE (注を参照) | 
 |

UL_SEGMENT も参照してください

## 注

*xref* がゼロ以外の値を返す場合、*wires()* ループ メンバーは相互参照ラベルのフラグを形成するワイヤをループします。それ以外の場合は、空のループになります。

*angle、*layer*、*mirror*、および *spin の各メンバーは、常に text メンバーによって返される UL_TEXT オブジェクトのメンバーと同じ値を返します。相互参照ラベル(ゼロ以外の xref)の場合、テキストの x メンバーと y メンバーは少しオフセットされた値を返し、それ以外の場合は UL_LABEL と同じ値を返します。

*xref* はネット ラベルの場合にのみ意味があります。バス ラベルの場合は常に 0 を返します。

## 例

sheet(SH) {
  SH.nets(N) {
    N.segments(S) {
      S.labels(L) {
        printf("Label: (%f %f) '%s'", u2mm(L.x), u2mm(L.y), L.text.value);
        }
      }
    }
  }