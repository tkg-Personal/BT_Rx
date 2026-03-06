# UL_MODULEINST

# UL_MODULEINST

## データ メンバー

| 
 | 
 | 
 |

| 
angle | 
real (0、90、180、270) | 
 |

| 
列 | 
string (注を参照) | 
 |

| 
ミラー | 
int | 
 |

| 
モジュール | 
UL_MODULE | 
 |

| 
modulevariant | 
string (選択したモジュールの variantdef) | 
 |

| 
name | 
string (INSTANCE_NAME_LENGTH) | 
 |

| 
offset | 
int | 
 |

| 
row | 
string (注を参照) | 
 |

| 
sheet | 
int (シート番号) | 
 |

| 
smashed | 
int (注を参照) | 
 |

| 
x、y | 
int (原点) | 
 |

## ループ メンバー

| 
 | 
 | 
 |

| 
texts() | 
UL_TEXT (注を参照) | 
 |

| 
wires() | 
UL_WIRE | 
 |

UL_PORTREF、UL_VARIANTDEF も参照してください

## 定数

| 
 | 
 | 
 |

| 
INSTANCE_NAME_LENGTH | 
インスタンス名の推奨最大長さ(形式設定された出力でのみ使用) | 
 |

## 注

*texts()* メンバーは、分解したかどうかに関係なく、モジュール インスタンスのすべてのテキストをループします。*column* メンバーと *row* メンバーは、このインスタンスが呼び出されたシートのフレーム内での列と行の位置を返します。そのシートにフレームがない場合、またはインスタンスがフレームの外側に配置されている場合は、「?」(疑問符)が返されます。これらのメンバーは、シート コンテキストでのみ使用できます。

*smashed* メンバーは、インスタンスが分解されているかどうかを示します。この関数は、smashed["NAME"] のように、角括弧内にパラメータの名前を指定することにより、アタッチ解除されたテキスト パラメータが存在するかどうかを調べるために使用することもできます。これは、MOVE MOD1>NAME を実行して MOVE コマンドでテキストを選択する場合に便利です。

## 例

schematic(SCH) {
  SCH.sheets(SH) {
    SH.moduleinsts(MI) {
      printf("Module instance %s is located on sheet %d\n", MI.name, MI.sheet);
      }
    }
  }