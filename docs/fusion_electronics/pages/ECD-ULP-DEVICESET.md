# UL_DEVICESET

# UL_DEVICESET

## データ メンバー

| 
 | 
 | 
 |

| 
activedevice | 
UL_DEVICE (注を参照) | 
 |

| 
面積 | 
UL_AREA | 
 |

| 
注釈 | 
string | 
 |

| 
headline | 
string (注を参照) | 
 |

| 
ライブラリ | 
string | 
 |

| 
libraryurn | 
string (注を参照) | 
 |

| 
libraryversion | 
int (注を参照) | 
 |

| 
locallymodified | 
int (注を参照) | 
 |

| 
librarylocallymodified | 
int (注を参照) | 
 |

| 
name | 
string (DEVICE_NAME_LENGTH) | 
 |

| 
prefix | 
string (DEVICE_PREFIX_LENGTH) | 
 |

| 
urn | 
string (注を参照) | 
 |

| 
value | 
string (「On」または「Off」) | 
 |

## ループ メンバー

| 
 | 
 | 
 |

| 
devices() | 
UL_DEVICE | 
 |

| 
gates() | 
UL_GATE | 
 |

UL_DEVICE、UL_LIBRARY、UL_PART も参照してください

## 定数

| 
 | 
 | 
 |

| 
DEVICE_NAME_LENGTH | 
デバイス名の推奨最大長さ(形式設定された出力でのみ使用) | 
 |

| 
DEVICE_PREFIX_LENGTH | 
デバイスの接頭表記の推奨最大長さ(形式設定された出力でのみ使用) | 
 |

## 注

デバイスセットが現在ライブラリ エディタ ウィンドウで編集されている場合、*activedevice* メンバーは、PACKAGE コマンドで選択されたアクティブなデバイスを返します。そのような *activedevice* を使用できるかどうかを確認するブール関数として使用できます(次の例を参照)。

*description* メンバーは DESCRIPTION コマンドで定義された完全な説明テキストを返し、*headline* メンバーは説明の最初の行のみを HTML タグなしで返します。*description* のテキストを使用する場合、改行文字(「\n」)が含まれている場合があることに注意してください。

*urn* には、urn:adsk.eagle:component:123/4 という形式の、このデバイスセットの一意の識別子が含まれています。この場合、/ の後の部分はデバイスセットのバージョンになります。ベース URN (バージョンなし)を取得するには、urnbase() を使用します。バージョンを取得するには、urnversion() を使用します。

*libraryurn* および *libraryversion* は、この UL_DEVICESET が管理ライブラリからのものである場合にのみ適用できます。そうでない場合、*libraryurn* は空の文字列になり、*libraryversion* は -1 になります。

*locallymodified* メンバーは、この UL_DEVICESET にローカルの修正がない場合は 0、この UL_DEVICESET にローカルの修正がある場合は 1 です。*librarylocallymodified* メンバーは、0 (この UL_DEVICESET がローカルで修正されたライブラリからのものではない場合)または 1 (この UL_DEVICESET がローカルで修正されたライブラリからのものである場合)になります。

## 例

library(L) {
  L.devicesets(D) {
    printf("Device set: %s, Description: %s\n", D.name, D.description);
    D.gates(G) {
      printf("\t%s\n", G.name);
      }
    }
  }

if (deviceset)
   deviceset(DS) {
     if (DS.activedevice)
        printf("Active Device: %s\n", DS.activedevice.name);
     }