# UL_PART

# UL_PART

## データ メンバー

| 
 | 
 | 
 |

| 
attribute[] | 
string (注を参照) | 
 |

| 
デバイス | 
UL_DEVICE | 
 |

| 
deviceset | 
UL_DEVICESET | 
 |

| 
モジュール | 
UL_MODULE (注を参照) | 
 |

| 
modulepart | 
UL_PART (注を参照) | 
 |

| 
modulepath | 
string (注を参照) | 
 |

| 
name | 
string (PART_NAME_LENGTH) | 
 |

| 
package3d | 
UL_PACKAGE3D | 
 |

| 
populate | 
int (0 = 入力しない、1 = 入力する) | 
 |

| 
value | 
string (PART_VALUE_LENGTH) | 
 |

## ループ メンバー

| 
 | 
 | 
 |

| 
attributes() | 
UL_ATTRIBUTE (注を参照) | 
 |

| 
instances() | 
UL_INSTANCE (注を参照) | 
 |

| 
variants() | 
UL_VARIANT (注を参照) | 
 |

UL_SCHEMATIC、UL_SHEET も参照してください

## 定数

| 
 | 
 | 
 |

| 
PART_NAME_LENGTH | 
パーツ名の推奨最大長さ(形式設定された出力でのみ使用) | 
 |

| 
PART_VALUE_LENGTH | 
パーツの値の推奨最大長さ(形式設定された出力でのみ使用) | 
 |

## 注

*attribute[]* メンバーを使用すると、指定した属性の値で UL_PART を照会できます(次の 2 番目の例を参照)。指定した名前の属性が存在しない場合、またはこの属性が明示的に空である場合、返される文字列は空になります。

UL_PART の attributes() をループする場合、結果の UL_ATTRIBUTE オブジェクトのメンバー name、value、defaultvalue、および constant のみが有効です。

UL_PART のアセンブリ *variants()* をループする場合、実際のバリアントのみを使用できます。ここでは、既定のアセンブリ バリアントは使用できません。したがって、このループは、アセンブリ バリアントがないパーツではアクティブになりません。

パーツがシート コンテキスト内にある場合、*instances()* ループ メンバーはそのシートで実際に使用されるインスタンスのみをループします。パーツが回路図またはモジュールのコンテキスト内にある場合、すべてのインスタンスがループされます。

パーツが仮想パーツである場合(仮想パーツは UL_SCHEMATIC.allparts() で取得できます。UL_SCHEMATIC を参照)、instances() ループは空です。

パーツがモジュールからのものであるか、仮想パーツである場合、module はこれを参照します。それ以外(メイン回路図内のパーツ)の場合、module は null です。

パーツが仮想である場合、modulepart はソース モジュール module からの(実際の)パーツです。メイン回路図内のパーツの場合、またはモジュール パーツ自体である場合、modulepart は null です。

パーツが仮想である場合、modulepath は、使用されているパーツが含まれているモジュールを指す一連のモジュール インスタンスの名前が含まれている文字列です。これらの名前は「:」で区切られます。それ以外の場合、この文字列は空です。

たとえば、「MI1:R1」という名前の仮想パーツの modulepath は「MI1」です。オフセット表記付きのモジュール インスタンス「MX」から取得した「R101」の modulepath は「MX」です。「MAIN:SUB1:SUBSUB1:C5」の modulepath は「MAIN:SUB1:SUBSUB1」です。

すべての UL_PART に 3D パッケージがあるわけではありません。*package3d* メンバーは、3D パッケージが存在するかどうかをテストするブール値として使用できます(例: if (P.package3d))。

## 例

schematic(S) {
  S.parts(P) printf("Part: %s\n", P.name);
}
schematic(S) {
  S.allparts(P) {
    if (P.attribute["REMARK"])
       printf("%s: %s\n", P.name, P.attribute["REMARK"]);
    if (P.modulepart) {
       P.modulepart.instances(I)
         printf("%s is a virtual part from %s in module %s with part instance on sheet %d\n",
                P.name, P.modulepart.name, P.module.name, I.sheet);
    }
    else {
       P.instances(I)
         printf("%s is a part on main schematic with instance on sheet %d\n",
                P.name, I.sheet);
    }
  }
}
schematic(S) {
  S.allparts(P) {
    if (P.modulepart) {
       string miNames[];
       int nr = strsplit(miNames, P.modulepath, ':');
       if (nr == 1)
          printf("%s is a virtual part created by module instance %s in main schematic.\n",
                 P.name, miNames[0]);
       else {
          printf("%s is a virtual part in a multiple hierarchy created by this path of module instances:\n", P.name);
          for (int i = 0; i < nr; ++i)
              printf("%s\n", miNames[i]);
       }
    }
  }
}