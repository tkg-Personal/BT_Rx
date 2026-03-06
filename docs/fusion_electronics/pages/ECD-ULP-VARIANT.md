# UL_VARIANT

# UL_VARIANT

## データ メンバー

| 
 | 
 | 
 |

| 
populate | 
int (0 = 入力しない、1 = 入力する) | 
 |

| 
価値 | 
文字列 | 
 |

| 
technology | 
string | 
 |

| 
variantdef | 
UL_VARIANTDEF | 
 |

UL_VARIANTDEF、UL_PART、variant() も参照してください

## 例

schematic(SCH) {
  printf("Defined assembly variants:\n");
  SCH.variantdefs(VD) {
    printf("\t'%s'\n", VD.name);
    }
  printf("\n");
  printf("Part\tVariantdef\tValue\tTechn.\tPopulated\n");
  SCH.parts(P) {
    printf("%s\t%s\t%s\t%s\t%s\n", P.name, "default", P.value, P.device.activetechnology, "yes");
    P.variants(V) {
      printf("%s\t%s\t%s\t%s\t%s\n", P.name, V.variantdef.name, V.value, V.technology, V.populate ? "yes" : "no");
      }
    }
  }