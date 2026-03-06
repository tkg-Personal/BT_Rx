# UL_AREA

# UL_AREA

## データ メンバー

| 
 | 
 | 
 |

| 
x1、y1 | 
int (左下コーナー) | 
 |

| 
x2、y2 | 
int (右上コーナー) | 
 |

UL_BOARD、UL_DEVICE、UL_FOOTPRINT、UL_SHEET、UL_SYMBOL も参照してください。

UL_AREA は、オブジェクトによってカバーされる領域に関する情報を提供する抽象オブジェクトです。UL_ELEMENT または UL_INSTANCE コンテキストの UL_FOOTPRINT または UL_SYMBOL の場合、領域は図面の絶対座標で指定されます(要素またはインスタンスのオフセットや、REPOSITION 後の移動したテキストの領域など)。

## 例

board(B) {
  printf("Area: (%f %f), (%f %f)\n",
          u2mm(B.area.x1), u2mm(B.area.y1), u2mm(B.area.x2), u2mm(B.area.y2));
  }