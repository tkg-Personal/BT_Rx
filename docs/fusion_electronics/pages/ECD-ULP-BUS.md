# UL_BUS

# UL_BUS

## データ メンバー

| 
 | 
 | 
 |

| 
name | 
string (BUS_NAME_LENGTH) | 
 |

## ループ メンバー

| 
 | 
 | 
 |

| 
segments() | 
UL_SEGMENT | 
 |

UL_SHEET も参照してください

## 定数

| 
 | 
 | 
 |

| 
BUS_NAME_LENGTH | 
バス名の最大長(古い機能 - バージョン 4 以降ではバス名を任意の長さにすることができるため) | 
 |

## 例

schematic(SCH) {
  SCH.sheets(SH) {
    SH.busses(B) printf("Bus: %s\n", B.name);
    }
  }