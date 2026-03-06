# UL_CLASS

# UL_CLASS

## データ メンバー

| 
 | 
 | 
 |

| 
clearance[number] | 
int (注を参照) | 
 |

| 
ﾄﾞﾘﾙ | 
int | 
 |

| 
name | 
string (注を参照) | 
 |

| 
数値 | 
int | 
 |

| 
width | 
int | 
 |

「デザイン ルール」、UL_NET、UL_SIGNAL、UL_SCHEMATIC、UL_BOARD も参照してください

## 注

*clearance* メンバーは、このネット クラスと、指定された番号を持つネット クラスとの間のクリアランス値を返します。番号(および角括弧)が省略されている場合、ネット クラスの独自のクリアランス値が返されます。番号を指定する場合、0 からこのネット クラスの番号の間でなければなりません。

*name* メンバーが空の文字列を返す場合、ネット クラスは定義されていないため、信号やネットで使用されていません。

## 例

board(B) {
  B.signals(S) {
    printf("%-10s %d %s\n", S.name, S.class.number, S.class.name);
    }
  }