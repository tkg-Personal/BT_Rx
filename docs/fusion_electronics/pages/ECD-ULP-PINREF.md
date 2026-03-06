# UL_PINREF

# UL_PINREF

## データ メンバー

| 
 | 
 | 
 |

| 
instance | 
UL_INSTANCE | 
 |

| 
パーツ | 
UL_PART | 
 |

| 
ピン | 
UL_PIN | 
 |

UL_SEGMENT、UL_CONTACTREF も参照してください

## 例

schematic(SCH) {
  SCH.sheets(SH) {
    printf("Sheet: %d\n", SH.number);
    SH.nets(N) {
      printf("\tNet: %s\n", N.name);
      N.segments(SEG) {
        SEG.pinrefs(P) {
          printf("connected to: %s, %s, %s\n",
                 P.part.name, P.instance.name, P.pin.name);
          }
        }
      }
    }
  }