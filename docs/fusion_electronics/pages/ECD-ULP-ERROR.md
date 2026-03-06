# UL_ERROR

# UL_ERROR

## データ メンバー

| 
 | 
 | 
 |

| 
area | 
UL_AREA | 
 |

| 
area2 | 
UL_AREA (注を参照) | 
 |

| 
code | 
int (識別番号) | 
 |

| 
注釈 | 
string | 
 |

| 
画層 | 
int | 
 |

| 
modulename | 
string | 
 |

| 
s1 | 
string (注を参照) | 
 |

| 
s2 | 
string | 
 |

| 
s3 | 
string | 
 |

| 
s4 | 
string | 
 |

| 
s5 | 
string | 
 |

| 
s6 | 
string | 
 |

| 
sheet | 
int (シート番号) | 
 |

| 
構文と要素 | 
string (署名文字列) | 
 |

| 
state | 
int (ERROR_STATE_...) | 
 |

| 
type | 
int (ERROR_TYPE_...) | 
 |

| 
x、y | 
int (中心点) | 
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

UL_BOARD、UL_SCHEMATIC も参照してください

## 定数

| 
 | 
 | 
 |

| 
ERROR_STATE_ACTIVE | 
エラーはまだ承認または処理されていません | 
 |

| 
ERROR_STATE_APPROVED | 
エラーは承認されました | 
 |

| 
ERROR_STATE_PROCESSED | 
エラーは処理されました | 
 |

| 
ERROR_TYPE_NONE | 
エラーなし | 
 |

| 
ERROR_TYPE_WARNING | 
warning | 
 |

| 
ERROR_TYPE_ERROR | 
error | 
 |

| 
ERROR_TYPE_CONSISTENCY | 
一貫性エラー | 
 |

## 注

UL_ERROR は ERC または DRC のエラーに関する情報を提供する抽象オブジェクトです。

メンバー *layer* および *contours()* は UL_BOARD コンテキストでのみ使用可能で、メンバー *area2、*modulename*、*s1...s6*、および *sheet は UL_SCHEMATIC コンテキストでのみ使用可能です。

メンバー *area2* は 2 番目の領域です。一部の ERC エラーの場合にのみ使用可能で、対応する基板領域を参照します。メンバー *s1..s6* は文字列値で、ERC エラーの場合は、名前などの特定の情報が含まれます。

*contours()* ループ メンバーは、DRC エラー ポリゴンの輪郭ワイヤをループします。

## 例

string s1;
string ErrLst[];
int ErrCnt = 0;
string ErrLstHeader;
if (board) board(B) {
   ErrLstHeader = "Code\tState\tDescription\tLayer\tSignature";
   if (B.checked) {
      B.errors(ER) {
         if (ER.state == ERROR_STATE_ACTIVE) {
            sprintf(s1, "%d\t%d\t%s\t%d\t%s", ER.code, ER.state, ER.description, ER.layer, ER.signature);
            ErrLst[ErrCnt++] = s1;
         }
      }
   }
}
if (schematic) schematic(SCH) {
   ErrLstHeader = "Code\tState\tDescription\tSheet\tModule\ts1\ts2\ts3\ts4\ts5\ts6";
   if (SCH.checked) {
      SCH.errors(ER) {
         if (ER.state == ERROR_STATE_ACTIVE) {
            sprintf(s1, "%d\t%d\t%s\t%d\t%s\t%s\t%s\t%s\t%s\t%s\t%s", ER.code, ER.state, ER.description, ER.sheet, ER.modulename, ER.s1, ER.s2, ER.s3, ER.s4, ER.s5, ER.s6);
            ErrLst[ErrCnt++] = s1;
         }
      }
   }
}
dlgDialog("Errors") {
   int sel = -1;
   dlgListView(ErrLstHeader, ErrLst, sel);
   dlgPushButton("+OK") dlgAccept();
};