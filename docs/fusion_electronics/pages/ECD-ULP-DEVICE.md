# UL_DEVICE

# UL_DEVICE

## データ メンバー

| 
 | 
 | 
 |

| 
activetechnology | 
string (注を参照) | 
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
string | 
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
name | 
string (DEVICE_NAME_LENGTH) | 
 |

| 
計画線 | 
UL_FOOTPRINT (EAGLE 9.1 の新機能、注を参照) | 
 |

| 
prefix | 
string (DEVICE_PREFIX_LENGTH) | 
 |

| 
technologies | 
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
attributes() | 
UL_ATTRIBUTE (注を参照) | 
 |

| 
gates() | 
UL_GATE | 
 |

| 
packages3d() | 
UL_PACKAGE3D | 
 |

UL_DEVICESET、UL_LIBRARY、UL_PART も参照してください

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

*name* と *technologies* を除く、UL_DEVICE のすべてのメンバーは、UL_DEVICE が定義されている UL_DEVICESET の各メンバーと同じ値を返します。name メンバーは、PACKAGE コマンドを使用するために、このデバイスが作成されたパッケージ バリアントの名前を返します。説明テキストを使用する場合、改行文字(「\n」)を含めることができます。

## 注

*activetechnology* メンバーが返す値は、そのメンバーが呼び出されるコンテキストによって異なります。

- デバイスが現在ライブラリ エディタ ウィンドウで編集されているデバイスセットから派生している場合、TECHNOLOGY コマンドによって設定されているアクティブなテクノロジが返されます。

- デバイスが UL_PART から派生している場合、そのパーツによって使用されている実際のテクノロジが返されます。

- それ以外の場合は、空の文字列が返されます。

*footprint* データ メンバーは、PACKAGE コマンドを使用してデバイスに割り当てられているフットプリントを返します。フットプリントがデバイスに割り当てられているかどうかを確認するブール関数として使用できます(次の例を参照)。(*footprint* データ メンバーは、EAGLE 9.1 で新たに追加されました。以前の EAGLE バージョンとの下位互換性を維持するために、*package* もサポートされています。)

technologies メンバーが返す値は、そのメンバーが呼び出されるコンテキストによって異なります。

- デバイスが UL_DEVICESET から派生した場合、technologies はすべてのデバイスのテクノロジが含まれている文字列を空白で区切って返します。

- デバイスが UL_PART から派生している場合、そのパーツによって使用されている実際のテクノロジのみが返されます。

*attributes()* ループ メンバーには、属性の提供先のテクノロジを指定する追加パラメータがあります(次の 2 番目の例を参照)。

*libraryurn* および *libraryversion* は、この UL_DEVICE が管理ライブラリからのものである場合にのみ適用できます。そうでない場合、*libraryurn* は空の文字列になり、*libraryversion* は -1 になります。

## 例

library(L) {
  L.devicesets(S) {
    S.devices(D) {
      if (D.footprint)
         printf("Device: %s, Footprint: %s\n", D.name, D.footprint.name);
      D.gates(G) {
        printf("\t%s\n", G.name);
        }
      }
    }
  }

library(L) {
  L.devicesets(DS) {
    DS.devices(D) {
      string t[];
      int n = strsplit(t, D.technologies, ' ');
      for (int i = 0; i < n; i++) {
          D.attributes(A, t[i]) {
            printf("%s = %s\n", A.name, A.value);
            }
          }
      }
    }
  }