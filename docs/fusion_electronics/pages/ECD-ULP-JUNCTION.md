# UL_JUNCTION

# UL_JUNCTION

## データ メンバー

| 
 | 
 | 
 |

| 
diameter | 
int | 
 |

| 
x、y | 
int (中心点) | 
 |

UL_SEGMENT も参照してください

## 例

schematic(SCH) {
  SCH.sheets(SH) {
    SH.nets(N) {
      N.segments(SEG) {
        SEG.junctions(J) {
          printf("Junction: (%f %f)\n", u2mm(J.x), u2mm(J.y));
          }
        }
      }
    }
  }