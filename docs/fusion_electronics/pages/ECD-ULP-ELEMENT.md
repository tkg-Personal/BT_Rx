# UL_ELEMENT

# UL_ELEMENT

## データ メンバー

| 
 | 
 | 
 |

| 
angle | 
real (0.0...359.9) | 
 |

| 
attribute[] | 
string (注を参照) | 
 |

| 
列 | 
string (注を参照) | 
 |

| 
ロックされている | 
int | 
 |

| 
ミラー | 
int | 
 |

| 
name | 
string (ELEMENT_NAME_LENGTH) | 
 |

| 
計画線 | 
UL_FOOTPRINT (EAGLE 9.1 の新機能、注を参照) | 
 |

| 
package3d | 
UL_PACKAGE3D (注を参照) | 
 |

| 
populate | 
int (0 = 入力しない、1 = 入力する) | 
 |

| 
row | 
string (注を参照) | 
 |

| 
smashed | 
int (注を参照) | 
 |

| 
spin | 
int | 
 |

| 
value | 
string (ELEMENT_VALUE_LENGTH) | 
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
attributes() | 
UL_ATTRIBUTE | 
 |

| 
texts() | 
UL_TEXT (注を参照) | 
 |

UL_BOARD、UL_CONTACTREF も参照してください

## 定数

| 
 | 
 | 
 |

| 
ELEMENT_NAME_LENGTH | 
要素名の推奨最大長さ(形式設定された出力でのみ使用) | 
 |

| 
ELEMENT_VALUE_LENGTH | 
要素の値の推奨最大長さ(形式設定された出力でのみ使用) | 
 |

## 注

*attribute[]* メンバーを使用すると、指定した属性の値に対する UL_ELEMENT を照会できます(次の 2 番目の例を参照)。指定した名前の属性が存在しない場合、またはこの属性が明示的に空である場合、返される文字列は空になります。

*texts()* メンバーは、REPOSITION を使用してアタッチ解除した要素のテキストと、この要素に割り当てられた属性の表示テキストのみをループします。要素のすべてのテキストを処理するには(描画する場合など)、要素自体の *texts()* メンバーと、要素のフットプリントの *texts()* メンバーをループする必要があります。

*footprint* メンバーは、EAGLE 9.1 で新たに追加されました。旧バージョンとの下位互換性を維持するために、*package* をエイリアスとして使用できます。

すべての UL_ELEMENT に 3D パッケージがあるわけではありません。*package3d* メンバーは、3D パッケージが存在するかどうかをテストするブール値として使用できます(例: if (E.package3d))。

*angle* は、要素が原点を中心にして反時計回りに回転する角度を定義します。

*column* メンバーと *row* メンバーは、基板図面のフレーム内での列と行の位置を返します。図面にフレームがない場合、または要素がフレームの外側に配置されている場合は、「?」(疑問符)が返されます。

*smashed* メンバーは、要素が分解されているかどうかを示します。この関数は、smashed["VALUE"] のように、角括弧内にパラメータの名前を指定することにより、アタッチ解除されたテキスト パラメータが存在するかどうかを調べるために使用することもできます。これは、MOVE R5>VALUE を実行して MOVE コマンドでテキストを選択する場合に便利です。有効なパラメータ名は、「NAME」、「VALUE」、およびユーザ定義属性の名前です。これらのパラメータ名では大文字と小文字は区別されず、先頭に「>」文字を付けることができます。

## 例

board(B) {
  B.elements(E) {
    printf("Element: %s, (%f %f), Footprint=%s\n",
           E.name, u2mm(E.x), u2mm(E.y), E.footprint.name);
    }
  }
board(B) {
  B.elements(E) {
    if (E.attribute["REMARK"])
       printf("%s: %s\n", E.name, E.attribute["REMARK"]);
    }
  }