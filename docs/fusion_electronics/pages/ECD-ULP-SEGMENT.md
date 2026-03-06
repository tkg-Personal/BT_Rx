# UL_SEGMENT

# UL_SEGMENT

## ループ メンバー

| 
 | 
 | 
 |

| 
junctions() | 
UL_JUNCTION (注を参照) | 
 |

| 
labels() | 
UL_LABEL | 
 |

| 
pinrefs() | 
UL_PINREF (注を参照) | 
 |

| 
portrefs() | 
UL_PORTREF | 
 |

| 
texts() | 
UL_TEXT (廃止予定。注を参照) | 
 |

| 
wires() | 
UL_WIRE | 
 |

UL_BUS、UL_NET も参照してください

## 注

*junctions()* ループ メンバーと *pinrefs()* ループ メンバーは、ネット セグメントでのみ使用できます。

*texts()* ループ メンバーは、旧バージョンの EAGLE でセグメントのラベルをループするために使用されていましたが、互換性のためにのみ存在しています。クロスリファレンス ラベルのテキストは、正しい位置に表示されません。セグメントのラベルにアクセスするには、*labels()* ループ メンバーを使用します。

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