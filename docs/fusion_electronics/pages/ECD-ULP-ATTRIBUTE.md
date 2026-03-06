# UL_ATTRIBUTE

# UL_ATTRIBUTE

## データ メンバー

| 
 | 
 | 
 |

| 
constant | 
int (0 = 変数(上書き可能)、1 = 定数 - 注を参照) | 
 |

| 
defaultvalue | 
string (注を参照) | 
 |

| 
display | 
int (ATTRIBUTE_DISPLAY_FLAG_...) | 
 |

| 
name | 
文字列 | 
 |

| 
文字 | 
UL_TEXT (注を参照) | 
 |

| 
価値 | 
文字列 | 
 |

UL_DEVICE、UL_PART、UL_INSTANCE、UL_ELEMENT も参照してください。

## 定数

| 
 | 
 | 
 |

| 
ATTRIBUTE_DISPLAY_FLAG_OFF | 
何も表示されません | 
 |

| 
ATTRIBUTE_DISPLAY_FLAG_VALUE | 
value が表示されます | 
 |

| 
ATTRIBUTE_DISPLAY_FLAG_NAME | 
name が表示されます | 
 |

UL_ATTRIBUTE を使用すると、デバイスのライブラリで定義された属性や、回路図や基板のパーツに割り当てられた属性にアクセスすることができます。

## 注

display には、ATTRIBUTE_DISPLAY_FLAG_... で構成される論理和の値が含まれ、属性のどの部分が実際に描画されるかを定義します。この値は、display が UL_INSTANCE または UL_ELEMENT のコンテキストで使用される場合にのみ有効です。UL_ELEMENT コンテキストでは、constant は前方注釈/後方注釈がアクティブな場合にのみ実際の値を返し、それ以外の場合は 0 を返します。

defaultvalue メンバは、ライブラリで定義されている値を返します(実際の値と異なる場合。それ以外の場合は value と同じ)。UL_ELEMENT コンテキストでは、defaultvalue は前方注釈/後方注釈がアクティブな場合にのみ実際の値を返し、それ以外の場合は空の文字列を返します。

text メンバは、UL_INSTANCE または UL_ELEMENT のコンテキストでのみ使用可能で、すべてのテキスト パラメータが含まれている UL_TEXT オブジェクトを返します。このテキスト オブジェクトの値は、UL_ATTRIBUTE の「display」パラメータに従って表示される文字列です。別のコンテキストから呼び出すと、返された UL_TEXT オブジェクトのデータは未定義になります。

グローバル属性の場合、*name* と *value* のみが定義されます。

## 例

schematic(SCH) {
  SCH.parts(P) {
    P.attributes(A) {
      printf("%s = %s\n", A.name, A.value);
      }
    }
  }
schematic(SCH) {
  SCH.attributes(A) { // global attributes
    printf("%s = %s\n", A.name, A.value);
    }
  }