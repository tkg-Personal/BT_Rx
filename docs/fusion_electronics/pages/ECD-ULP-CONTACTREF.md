# UL_CONTACTREF

# UL_CONTACTREF

## データ メンバー

| 
 | 
 | 
 |

| 
contact | 
UL_CONTACT | 
 |

| 
要素 | 
UL_ELEMENT | 
 |

| 
経路 | 
int (CONTACT_ROUTE_...) | 
 |

| 
routetag | 
string (注を参照) | 
 |

UL_SIGNAL、UL_PINREF も参照してください

## 定数

| 
 | 
 | 
 |

| 
CONTACT_ROUTE_ALL | 
すべての接触に対して明示的に配線する必要があります | 
 |

| 
CONTACT_ROUTE_ANY | 
任意の接触に配線できます | 
 |

## 注

*route* の値が CONTACT_ROUTE_ANY の場合、*routetag* データ メンバーは、同じピンに属する *contactrefs* のグループを表す追加のタグを返します。

## 例

board(B) {
  B.signals(S) {
    printf("Signal '%s'\n", S.name);
    S.contactrefs(C) {
      printf("\t%s, %s\n", C.element.name, C.contact.name);
      }
    }
  }