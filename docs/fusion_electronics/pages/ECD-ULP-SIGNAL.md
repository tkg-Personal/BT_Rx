# UL_SIGNAL

# UL_SIGNAL

## データ メンバー

| 
 | 
 | 
 |

| 
airwireshidden | 
int | 
 |

| 
クラス | 
UL_CLASS | 
 |

| 
name | 
string (SIGNAL_NAME_LENGTH) | 
 |

## ループ メンバー

| 
 | 
 | 
 |

| 
contactrefs() | 
UL_CONTACTREF | 
 |

| 
polypours() | 
UL_POLYPOUR | 
 |

| 
vias() | 
UL_VIA | 
 |

| 
wires() | 
UL_WIRE | 
 |

UL_BOARD も参照してください

## 定数

| 
 | 
 | 
 |

| 
SIGNAL_NAME_LENGTH | 
信号名の推奨最大長さ(形式設定された出力でのみ使用) | 
 |

## 例

board(B) {
  B.signals(S) printf("Signal: %s\n", S.name);
  }