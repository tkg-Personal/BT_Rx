# UL_PIN

# UL_PIN

## データ メンバー

| 
 | 
 | 
 |

| 
angle | 
real (0、90、180、270) | 
 |

| 
接触 | 
UL_CONTACT (廃止予定。注を参照) | 
 |

| 
direction | 
int (PIN_DIRECTION_...) | 
 |

| 
関数 | 
int (PIN_FUNCTION_FLAG_...) | 
 |

| 
長さ | 
int (PIN_LENGTH_...) | 
 |

| 
name | 
string (PIN_NAME_LENGTH) | 
 |

| 
ネット | 
string (注を参照) | 
 |

| 
経路 | 
int (CONTACT_ROUTE_...) | 
 |

| 
swaplevel | 
int | 
 |

| 
visible | 
int (PIN_VISIBLE_FLAG_...) | 
 |

| 
x、y | 
int (接続点) | 
 |

## ループ メンバー

| 
 | 
 | 
 |

| 
circles() | 
UL_CIRCLE | 
 |

| 
contacts() | 
UL_CONTACT (注を参照) | 
 |

| 
texts() | 
UL_TEXT | 
 |

| 
wires() | 
UL_WIRE | 
 |

UL_SYMBOL、UL_PINREF、UL_CONTACTREF も参照してください

## 定数

| 
 | 
 | 
 |

| 
PIN_DIRECTION_NC | 
未接続 | 
 |

| 
PIN_DIRECTION_IN | 
入力 | 
 |

| 
PIN_DIRECTION_OUT | 
出力(トーテムポール) | 
 |

| 
PIN_DIRECTION_IO | 
入力/出力(双方向) | 
 |

| 
PIN_DIRECTION_OC | 
オープン コレクタ | 
 |

| 
PIN_DIRECTION_PWR | 
電源入力ピン | 
 |

| 
PIN_DIRECTION_PAS | 
パッシブ | 
 |

| 
PIN_DIRECTION_HIZ | 
高インピーダンス出力 | 
 |

| 
PIN_DIRECTION_SUP | 
供給ピン | 
 |

| 
PIN_FUNCTION_FLAG_NONE | 
記号なし | 
 |

| 
PIN_FUNCTION_FLAG_DOT | 
インバータ記号 | 
 |

| 
PIN_FUNCTION_FLAG_CLK | 
クロック記号 | 
 |

| 
PIN_LENGTH_POINT | 
ワイヤなし | 
 |

| 
PIN_LENGTH_SHORT | 
0.1 インチのワイヤ | 
 |

| 
PIN_LENGTH_MIDDLE | 
0.2 インチのワイヤ | 
 |

| 
PIN_LENGTH_LONG | 
0.3 インチのワイヤ | 
 |

| 
PIN_NAME_LENGTH | 
ピン名の推奨最大長さ(形式設定された出力でのみ使用) | 
 |

| 
PIN_VISIBLE_FLAG_OFF | 
名前を描画しない | 
 |

| 
PIN_VISIBLE_FLAG_PAD | 
パッド名を描画 | 
 |

| 
PIN_VISIBLE_FLAG_PIN | 
ピン名を描画 | 
 |

| 
CONTACT_ROUTE_ALL | 
すべての接触に対して明示的に配線する必要があります | 
 |

| 
CONTACT_ROUTE_ANY | 
任意の接触に配線できます | 
 |

## 注

*contacts()* ループ メンバーは、CONNECT コマンドを使用してピンに割り当てられている接触をループします。これは、UL_DEVICE コンテキストの場合や UL_PINREF を介する場合は該当しますが、UL_LIBRARY.symbols() を介する場合は該当しません。これに該当しない場合、リストは空です。

contact データ メンバは、CONNECT コマンドを使用して、ピンに割り当てられている接触を返します。この関数は廃止予定です。これは下位互換性を維持するために機能しており、1 つのパッドのみがピンに接続されている限り機能します。ただし、複数のパッドに接続されているピンで使用すると、実行時エラーが発生します。

*route* メンバーも、ピンが接続されている接触とのリレーションがある場合にのみ有効です。それ以外の場合は、値は 0 に設定されます。

contact データ メンバによって返される接触の座標(および、SMD の場合は画層)は、接触を呼び出したコンテキストによって異なります。

- シートで使用されている UL_PART からピンが派生しており、対応する要素が基板上に存在する場合、結果の接触の座標は基板で使用されている座標になります。

- それ以外の場合、接触の座標はフットプリント図面で定義されたものと同じになります。

*name* データ メンバーは、常にライブラリで定義されているピンの名前を返します。同じ名前のピンがある場合は、名前はそのままで「@」文字を付けて返します(詳細は PIN コマンドを参照)。一方、*texts* ループ メンバーは、現在の図面タイプで表示されているとおりのピン名(表示されている場合)を返します。

*net* データ メンバーは、このピンが接続されているネットの名前を返します(UL_SCHEMATIC コンテキストでのみ使用可能)。

## 例

library(L) {
  L.symbols(S) {
    printf("Symbol: %s\n", S.name);
    S.pins(P) {
      printf("\tPin: %s, (%f %f)", P.name, u2mm(P.x), u2mm(P.y));
      if (P.direction == PIN_DIRECTION_IN)
         printf(" input");
      if ((P.function & PIN_FUNCTION_FLAG_DOT) != 0)
         printf(" inverted");
      printf("\n");
      }
    }
  }