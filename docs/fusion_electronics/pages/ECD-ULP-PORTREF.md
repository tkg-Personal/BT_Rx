# UL_PORTREF

# UL_PORTREF

## データ メンバー

| 
 | 
 | 
 |

| 
moduleinst | 
UL_MODULEINST | 
 |

| 
ポート | 
UL_PORT | 
 |

UL_SEGMENT も参照してください

## 例

schematic(SCH) {
  SCH.sheets(SH) {
    printf("Sheet: %d\n", SH.number);
    SH.nets(N) {
      printf("\tNet: %s\n", N.name);
      N.segments(SEG) {
        SEG.portrefs(P) {
          printf("\tconnected to: %s, %s\n",
                 P.moduleinst.name, P.port.name);
          }
        }
      }
    }
  }