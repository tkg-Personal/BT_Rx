# UL_TEXT

# UL_TEXT

## データ メンバー

| 
 | 
 | 
 |

| 
align | 
int (ALIGN_...) | 
 |

| 
角度 | 
real (0.0...359.9) | 
 |

| 
フォント | 
int (FONT_...) | 
 |

| 
画層 | 
int | 
 |

| 
linedistance | 
int | 
 |

| 
ミラー | 
int | 
 |

| 
ratio | 
int | 
 |

| 
size | 
int | 
 |

| 
spin | 
int | 
 |

| 
価値 | 
文字列 | 
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
wires() | 
UL_WIRE (注を参照) | 
 |

UL_BOARD、UL_FOOTPRINT、UL_SHEET、UL_SYMBOL も参照してください

## 定数

| 
 | 
 | 
 |

| 
FONT_VECTOR | 
ベクトル フォント | 
 |

| 
FONT_PROPORTIONAL | 
プロポーショナル フォント | 
 |

| 
FONT_FIXED | 
固定フォント | 
 |

| 
ALIGN_BOTTOM_LEFT | 
下/左揃え | 
 |

| 
ALIGN_BOTTOM_CENTER | 
下/中心揃え | 
 |

| 
ALIGN_BOTTOM_RIGHT | 
下/右揃え | 
 |

| 
ALIGN_CENTER_LEFT | 
中心/左揃え | 
 |

| 
ALIGN_CENTER | 
中心揃え | 
 |

| 
ALIGN_CENTER_RIGHT | 
中心/右揃え | 
 |

| 
ALIGN_TOP_LEFT | 
上/左揃え | 
 |

| 
ALIGN_TOP_CENTER | 
上/中心揃え | 
 |

| 
ALIGN_TOP_RIGHT | 
上/右揃え | 
 |

## 注

*wires()* ループ メンバーは、ベクトル フォント使用時は常にテキストを構成する個々のワイヤにアクセスします。これは、実際のフォントが FONT_VECTOR でない場合も同様です。

UL_TEXT が UL_ELEMENT コンテキストまたは UL_INSTANCE コンテキストから派生している場合、メンバーの値は基板またはシートの図面に配置されている実際のテキストの値になります。

## 例

board(B) {
  B.texts(T) {
    printf("Text: %s\n", T.value);
    }
  }