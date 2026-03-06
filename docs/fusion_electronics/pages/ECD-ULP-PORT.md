# UL_PORT

# UL_PORT

## データ メンバー

| 
 | 
 | 
 |

| 
border | 
int (MODULE_BORDER_...) | 
 |

| 
bus | 
string (注を参照) | 
 |

| 
direction | 
int (PIN_DIRECTION_...(注を参照)) | 
 |

| 
name | 
string (PORT_NAME_LENGTH) | 
 |

| 
ネット | 
string (注を参照) | 
 |

| 
x、y | 
int (接続点) | 
 |

## ループ メンバー

| 
 | 
 | 
 |

| 
nets() | 
UL_NET (注を参照) | 
 |

| 
texts() | 
UL_TEXT | 
 |

| 
wires() | 
UL_WIRE | 
 |

UL_MODULE、UL_MODULEINST、UL_PORTREF も参照してください

## 定数

| 
 | 
 | 
 |

| 
MODULE_BORDER_BOTTOM | 
モジュールの下境界 | 
 |

| 
MODULE_BORDER_RIGHT | 
モジュールの右境界 | 
 |

| 
MODULE_BORDER_TOP | 
モジュールの上境界 | 
 |

| 
MODULE_BORDER_LEFT | 
モジュールの左境界 | 
 |

| 
PORT_NAME_LENGTH | 
ポート名の推奨最大長さ(形式設定された出力でのみ使用) | 
 |

## 注

*direction* 値は、PIN_DIRECTION_... 値(PIN_DIRECTION_SUP を除く)と同じです。

*bus* データ メンバーと *net* データ メンバーは、このポートが接続されているバスまたはネットの名前を返します(UL_MODULEINST コンテキストでのみ使用可能)。また、*nets* ループ メンバーは、この接続で使用可能なすべてのネットをループします。

## 例

schematic(SCH) {
  SCH.modules(M) {
    M.ports(P) printf("Port: %s\n", P.name);
    }
  }