# UL_SHEET

# UL_SHEET

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
注釈 | 
string | 
 |

| 
headline | 
string | 
 |

| 
数値 | 
int | 
 |

## ループ メンバー

| 
 | 
 | 
 |

| 
busses() | 
UL_BUS | 
 |

| 
circles() | 
UL_CIRCLE | 
 |

| 
dimensions() | 
UL_DIMENSION | 
 |

| 
frames() | 
UL_FRAME | 
 |

| 
instances() | 
UL_INSTANCE | 
 |

| 
moduleinsts() | 
UL_MODULEINST | 
 |

| 
nets() | 
UL_NET | 
 |

| 
polyshapes() | 
UL_POLYSHAPE | 
 |

| 
rectangles() | 
UL_RECTANGLE | 
 |

| 
texts() | 
UL_TEXT | 
 |

| 
wires() | 
UL_WIRE | 
 |

UL_SCHEMATIC も参照してください

## 例

schematic(SCH) {
  SCH.sheets(S) {
    printf("Sheet: %d\n", S.number);
    }
  }