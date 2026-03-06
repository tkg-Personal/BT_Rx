# ダイアログ

# ダイアログ

ユーザ言語ダイアログでは、ユーザ言語プログラムの独自のフロントエンドを定義できます。以下のセクションでは、ユーザ言語ダイアログについて詳細に説明します。

- 「*定義済みダイアログ*」では、使用する準備ができている標準ダイアログについて説明します

- 「*ダイアログ オブジェクト*」では、ダイアログで使用できるオブジェクトを定義します

- 「*レイアウト情報*」では、ダイアログ内でオブジェクトの位置を定義する方法について説明します

- 「*ダイアログ関数*」では、ダイアログで使用する特殊な関数について説明します

- 「*完全な例*」では、データ入力ダイアログを使用した完全な ULP を示します

## 定義済みダイアログ

定義済みダイアログには、ファイル名の選択やエラー メッセージの発行に頻繁に使用される標準的なダイアログが実装されています。

複雑なユーザ ダイアログを定義する方法については、「ダイアログ オブジェクト」を参照してください。

#### dlgDirectory()

**関数**

フォルダ ダイアログを表示します。

**構文**

string dlgDirectory(string Title[, string Start])**戻り値**

*dlgDirectory* 関数は、選択したフォルダの絶対パス名を返します。ユーザがダイアログをキャンセルした場合、結果は空の文字列になります。

dlgFileOpen も参照してください

*dlgDirectory* 関数は、ユーザがフォルダを選択できるフォルダ ダイアログを表示します。*Title* は、ダイアログのタイトルとして使用されます。

*Start* が空でない場合、dlgDirectory の開始点として使用されます。

**例**

string dirName;
dirName = dlgDirectory("Select a directory", "");#### dlgFileOpen()、dlgFileSave()

**関数**

ファイル ダイアログを表示します。

**構文**

string dlgFileOpen(string Title[, string Start[, string Filter]])
string dlgFileSave(string Title[, string Start[, string Filter]])**戻り値**

*dlgFileOpen* 関数と *dlgFileSave* 関数は、選択したファイルの絶対パス名を返します。ユーザがダイアログをキャンセルした場合、結果は空の文字列になります。

dlgDirectory も参照してください

*dlgFileOpen* 関数と *dlgFileSave* 関数は、ユーザがファイルを選択できるファイル ダイアログを表示します。*Title* は、ダイアログのタイトルとして使用されます。

*Start* が空でない場合、ファイル ダイアログの開始点として使用されます。それ以外の場合は、現在のフォルダが使用されます。

*Filter* に一致するファイルのみが表示されます。*Filter* が空の場合は、すべてのファイルが表示されます。

*Filter* は、単純なワイルドカード(「*.brd」など)、ワイルドカードのリスト(「*.bmp *.jpg」など)か、「Bitmap files (*.bmp)」のような説明が含まれる場合もあります。ファイル ダイアログの[ファイルの種類]コンボ ボックスに複数のエントリが含まれる場合、「Bitmap files (*.bmp);; Other images (*.jpg *.png)」のように、2 つのセミコロンで区切る必要があります。

**例**

string fileName;
fileName = dlgFileOpen("Select a file", "", "*.brd");#### dlgMessageBox()

**関数**

メッセージ ボックスを表示します。

**構文**

int dlgMessageBox(string Message[, button_list])**戻り値**

*dlgMessageBox* 関数は、ユーザが選択したボタンのインデックスを返します。*button_list* の最初のボタンのインデックスは 0 です。

status() も参照してください。

*dlgMessageBox* 関数は、指定されたメッセージをモーダル ダイアログに表示し、*button_list* で定義されたボタンの 1 つが選択されるまで待機します。

*Message* に HTML タグが含まれていて、文字「<」、「>」、「&」を表示する場合は、それぞれ <、>、&amp; と指定する必要があります。

*button_list* は、メッセージ ボックスの下部に表示される一連のボタンを定義する、カンマで区切られた文字列のリストで、省略可能です。最大で 3 つのボタンを定義できます。*button_list* が指定されていない場合、既定で「OK」になります。

*button_list* の最初のボタンが既定のボタン(ユーザが[Enter]を押すと選択される)になり、リストの最後のボタンが「キャンセル ボタン」になります。このボタンは、ユーザが[Esc]を押すかメッセージ ボックスを閉じると選択されます。名前を「+」で始めることで、別のボタンを既定のボタンにすることができます。名前を「-」で始めることで、別のボタンをキャンセル ボタンにすることができます。実際の「+」または「-」でボタン テキストを開始するには、エスケープする必要があります。

ボタン テキストに「&」が含まれている場合、アンパサンドの後の文字はホットキーになり、ユーザが対応するキーを押すと、そのボタンが選択されます。実際の「&」文字をテキストに含めるには、エスケープする必要があります。

Message の最初の文字を次のように設定することで、メッセージ ボックスにアイコンを指定することができます。

   ';' - for an Information
   '!' - for a Warning
   ':' - for an Errorただし、Message がこれらの文字のいずれかで始まる場合は、エスケープする必要があります。

Mac OS X では、文字「:」の場合にのみ、実際にアイコンが表示されます。その他の文字はすべて無視されます。

**例**

if (dlgMessageBox("!Are you sure?", "&Yes", "&No") == 0) {
   // let's do it!
   }## ダイアログ オブジェクト

ユーザ言語ダイアログは、次のダイアログ オブジェクトから構築されます。

| 
 | 
 | 
 |

| 
dlgCell | 
グリッド セルのコンテキスト | 
 |

| 
dlgCheckBox | 
チェックボックス | 
 |

| 
dlgComboBox | 
コンボ ボックス選択フィールド | 
 |

| 
dlgDialog | 
任意のダイアログの基本コンテナ | 
 |

| 
dlgGridLayout | 
グリッド ベース レイアウト コンテキスト | 
 |

| 
dlgGroup | 
グループ フィールド | 
 |

| 
dlgHBoxLayout | 
水平ボックス レイアウト コンテキスト | 
 |

| 
dlgIntEdit | 
整数入力フィールド | 
 |

| 
dlgLabel | 
テキスト ラベル | 
 |

| 
dlgListBox | 
リスト ボックス | 
 |

| 
dlgListView | 
リスト ビュー | 
 |

| 
dlgPushButton | 
押しボタン | 
 |

| 
dlgRadioButton | 
ラジオ ボタン | 
 |

| 
dlgRealEdit | 
実数入力フィールド | 
 |

| 
dlgSpacing | 
レイアウト間隔オブジェクト | 
 |

| 
dlgSpinBox | 
スピン ボックス選択フィールド | 
 |

| 
dlgStretch | 
レイアウト ストレッチ オブジェクト | 
 |

| 
dlgStringEdit | 
文字列入力フィールド | 
 |

| 
dlgTabPage | 
タブ ページ | 
 |

| 
dlgTabWidget | 
タブ ページのコンテナ | 
 |

| 
dlgTextEdit | 
テキスト入力フィールド | 
 |

| 
dlgTextView | 
テキスト ビューア フィールド | 
 |

| 
dlgVBoxLayout | 
垂直ボックス レイアウト コンテキスト | 
 |

#### dlgCell

**関数**

グリッド レイアウト コンテキスト内でのセルの位置を定義します。

**構文**

dlgCell(int row, int column[, int row2, int column2]) statementdlgGridLayout、dlgHBoxLayout、dlgVBoxLayout、「レイアウト情報」、「完全な例」も参照してください

*dlgCell* 文は、グリッド レイアウト コンテキスト内でのセルの位置を定義します。

行インデックスと列インデックスは 0 から始まるため、左上のセルのインデックスは(0, 0)です。

2 つのパラメータを指定すると、文で定義されたダイアログ オブジェクトは row と column で示される単一セル アドレスに配置されます。4 つのパラメータを指定すると、ダイアログ オブジェクトは、row/column から row2/column2 までのセル全体に広がります。

既定では、*dlgCell* には *dlgHBoxLayout* が含まれています。そのため、セルに複数のダイアログ オブジェクトが含まれている場合、水平方向に並べて配置されます。

**例**

string Text;
dlgGridLayout {
  dlgCell(0, 0) dlgLabel("Cell 0,0");
  dlgCell(1, 2, 4, 7) dlgTextEdit(Text);
  }#### dlgCheckBox

**関数**

チェックボックスを定義します。

**構文**

dlgCheckBox(string Text, int &Checked) [ statement ]dlgRadioButton、dlgGroup、「レイアウト情報」、「完全な例」も参照してください

*dlgCheckBox* 文は、指定された Text を使用してチェック ボックスを定義します。

Text に「&」が含まれている場合、アンパサンドの後の文字はホットキーになり、ユーザが[Alt]を押しながらホットキーを押すと、チェックボックスが切り替わります。実際の「&」文字をテキストに含めるには、エスケープする必要があります。

dlgCheckBox は主に dlgGroup 内で使用されますが、それ以外の方法でも使用できます。同じダイアログ内のすべてのチェック ボックスが、異なる Checked 変数を持っている必要があります。

ユーザが dlgCheckBox をオンにすると、関連付けられている Checked 変数が 1 に設定され、それ以外の場合は 0 に設定されます。Checked の初期値は、チェックボックスが初期状態でオンであるかどうかを定義します。Checked が 0 に等しくない場合、チェックボックスは初期状態でオンです。

dlgCheckBox が切り替わるたびに、文(省略可能)が実行されます。

**例**

int mirror = 0;
int rotate = 1;
int flip   = 0;
dlgGroup("Orientation") {
  dlgCheckBox("&Mirror", mirror);
  dlgCheckBox("&Rotate", rotate);
  dlgCheckBox("&Flip", flip);
  }#### dlgComboBox

**関数**

コンボ ボックス選択フィールドを定義します。

**構文**

dlgComboBox(string array[], int &Selected) [ statement ]

dlgListBox、dlgLabel、「レイアウト情報」、「完全な例」も参照してください

*dlgComboBox* 文は、指定された配列の内容を使用してコンボ ボックス選択フィールドを定義します。

*Selected* は、選択したコンボ ボックスのエントリのインデックスを反映します。最初のエントリのインデックスは 0 です。

array の各要素は、コンボ ボックス内の 1 つのエントリの内容を定義します。array 内の文字列はいずれも空にできません(空の文字列がある場合、その文字列以降のすべての文字列が削除されます)。

dlgComboBox の選択を変更するたびに、文(省略可能)が実行されます。文を実行する前に、ダイアログ オブジェクトで使用されたすべての変数が現在の値に更新され、文の中でこれらの変数に加えた変更は、文が戻ったときにダイアログに反映されます。

Selected の初期値が配列インデックスの範囲外の場合は、0 に設定されます。

**例**

string Colors[] = { "red", "green", "blue", "yellow" };
int Selected = 2; // initially selects "blue"
dlgComboBox(Colors, Selected) dlgMessageBox("You have selected " + Colors[Selected]);#### dlgDialog

**関数**

ユーザ言語ダイアログを実行します。

**構文**

int dlgDialog(string Title) block ;**戻り値**

*dlgDialog* 関数は、dlgAccept() 関数を呼び出すことでユーザ定義の意味を付与できる整数値を返します。

ダイアログを閉じると、戻り値は -1 になります。

dlgGridLayout、dlgHBoxLayout、dlgVBoxLayout、dlgAccept、dlgReset、dlgReject、「完全な例」も参照してください

dlgDialog 関数は、block で定義されたダイアログを実行します。これは、実際にユーザ言語の組み込み関数である唯一のダイアログ オブジェクトです。したがって、関数呼び出しが許可されている任意の場所で使用できます。

通常、ブロックには他のダイアログ オブジェクトのみが含まれますが、他のユーザ言語文を使用することもできます。たとえば、条件に応じてダイアログにオブジェクトを追加する場合などです(次の 2 番目の例を参照)。

既定では dlgDialog に *dlgVBoxLayout* が含まれているため、簡単なダイアログではレイアウトについて心配する必要はありません。

ユーザがダイアログを閉じて内容を承認できるようにするために、dlgDialog には dlgAccept() 関数の呼び出しが含まれている必要があります。

単純なメッセージ ボックスやファイル ダイアログしか必要としない場合は、代わりにいずれかの*定義済みダイアログ*を使用できます。

*例*

int Result = dlgDialog("Hello") {
  dlgLabel("Hello world");
  dlgPushButton("+OK") dlgAccept();
  };
int haveButton = 1;
dlgDialog("Test") {
  dlgLabel("Start");
  if (haveButton)
     dlgPushButton("Here") dlgAccept();
  };#### dlgGridLayout

**関数**

グリッド レイアウト コンテキストを開きます。

**構文**

dlgGridLayout statementdlgCell、dlgHBoxLayout、dlgVBoxLayout、「レイアウト情報」、「完全な例」も参照してください

*dlgGridLayout* 文は、グリッド レイアウト コンテキストを開きます。

文で直接使用できるダイアログ オブジェクトは、*dlgCell* だけです。これは、グリッド レイアウト内の特定のダイアログ オブジェクトの位置を定義します。

行インデックスと列インデックスは 0 から始まるため、左上のセルのインデックスは(0, 0)です。

行と列の数は、グリッド レイアウト コンテキスト内で定義されたダイアログ オブジェクトの位置に従って自動的に拡張されるため、行と列の数を明示的に定義する必要はありません。

**例**

dlgGridLayout {
  dlgCell(0, 0) dlgLabel("Row 0/Col 0");
  dlgCell(1, 0) dlgLabel("Row 1/Col 0");
  dlgCell(0, 1) dlgLabel("Row 0/Col 1");
  dlgCell(1, 1) dlgLabel("Row 1/Col 1");
  }#### dlgGroup

**関数**

グループ フィールドを定義します。

**構文**

dlgGroup(string Title) statement

dlgCheckBox、dlgRadioButton、「レイアウト情報」、「完全な例」も参照してください

*dlgGroup* 文は指定された Title を使用してグループを定義します。

既定では dlgGroup に *dlgVBoxLayout* が含まれているため、簡単なグループではレイアウトについて心配する必要はありません。

dlgGroup は主にラジオ ボタンやチェック ボックスのセットを含めるために使用されますが、他のオブジェクトを文に含めてもかまいません。dlgGroup 内のラジオ ボタンには 0 から始まる番号が付きます。

**例**

int align = 1;
dlgGroup("Alignment") {
  dlgRadioButton("&Top", align);
  dlgRadioButton("&Center", align);
  dlgRadioButton("&Bottom", align);
  }#### dlgHBoxLayout

**関数**

水平ボックス レイアウト コンテキストを開きます。

**構文**

dlgHBoxLayout statementdlgGridLayout、dlgVBoxLayout、「レイアウト情報」、「完全な例」も参照してください

*dlgHBoxLayout* 文は、指定された文の水平ボックス レイアウト コンテキストを開きます。

**例**

dlgHBoxLayout {
  dlgLabel("Box 1");
  dlgLabel("Box 2");
  dlgLabel("Box 3");
  }#### dlgIntEdit

**関数**

整数入力フィールドを定義します。

**構文**

dlgIntEdit(int &Value, int Min, int Max)dlgRealEdit、dlgStringEdit、dlgLabel、「レイアウト情報」、「完全な例」も参照してください

dlgIntEdit 文は、指定された Value を使用して整数入力フィールドを定義します。

Value が初期状態で Min と Max で定義される範囲の外にある場合、これらの値に制限されます。

**例**

int Value = 42;
dlgHBoxLayout {
  dlgLabel("Enter a &Number between 0 and 99");
  dlgIntEdit(Value, 0, 99);
  }#### dlgLabel

**関数**

テキスト ラベルを定義します。

**構文**

dlgLabel(string Text [, int Update])「レイアウト情報」、「完全な例」、dlgRedisplay() も参照してください

*dlgLabel* 文は、指定された Text を使用してラベルを定義します。

Text は、"Hello" などの文字列リテラル、または文字列変数のいずれかです。

Text に HTML タグが含まれている場合、文字「<」、「>」、「&」を表示する場合は、それぞれ 「<」、「>」、「&amp;」と指定する必要があります。

Text 内の外部ハイパーリンクは、適切なアプリケーション プログラムで開かれます。

*Update* パラメータが 0 ではなく Text が文字列変数である場合、その内容をたとえば *dlgPushButton* の文で修正でき、ラベルは自動的に更新されます。これは、もちろん、Text が専用の文字列変数である(たとえば、for 文のループ変数ではない)場合にのみ役立ちます。

Text に「&」が含まれており、ラベルの後に続くオブジェクトにキーボード フォーカスを設定できる場合、アンパサンドの後に続く文字はホットキーになります。[Alt]を押しながらホットキーを押すと、フォーカスは dlgLabel の直後に定義されたオブジェクトに移動します。実際の「&」文字をテキストに含めるには、エスケープする必要があります。

**例**

string OS = "Windows";
dlgHBoxLayout {
  dlgLabel(OS, 1);
  dlgPushButton("&Change OS") { OS = "Linux"; }
  }#### dlgListBox

**関数**

リスト ボックス選択フィールドを定義します。

**構文**

dlgListBox(string array[], int &Selected) [ statement ]dlgComboBox、dlgListView、dlgSelectionChanged、dlgLabel、「レイアウト情報」、「完全な例」も参照してください

*dlgListBox* 文は、指定された配列の内容を使用してリスト ボックス選択フィールドを定義します。

*Selected* は、選択したリスト ボックスのエントリのインデックスを反映します。最初のエントリのインデックスは 0 です。

array の各要素は、リスト ボックス内の 1 つの行の内容を定義します。array 内の文字列はいずれも空にできません(空の文字列がある場合、その文字列以降のすべての文字列が削除されます)。

*dlgListBox* のエントリをダブルクリックするたびに、文(省略可能)が実行されます(リストでの選択のみが変更された場合に文が呼び出されるようにする方法については、*dlgSelectionChanged* を参照)。文を実行する前に、ダイアログ オブジェクトで使用されたすべての変数が現在の値に更新され、文の中でこれらの変数に加えた変更は、文が戻ったときにダイアログに反映されます。

Selected の初期値が配列インデックスの範囲外の場合、エントリは選択されません。

**例**

string Colors[] = { "red", "green", "blue", "yellow" };
int Selected = 2; // initially selects "blue"
dlgListBox(Colors, Selected) dlgMessageBox("You have selected " + Colors[Selected]);#### dlgListView

**関数**

複数列リスト ビューの選択フィールドを定義します。

**構文**

dlgListView(string Headers, string array[], int &Selected[, int &Sort]) [ statement ]

dlgListBox、dlgSelectionChanged、dlgLabel、「レイアウト情報」、「完全な例」も参照してください

*dlgListView* 文は、指定された配列の内容を使用して複数列リスト ビューの選択フィールドを定義します。

Headers は、列ヘッダのタブ区切りリストです。

*Selected* は、配列内の選択されたリスト ビュー エントリのインデックスを反映します(エントリが実際に表示される順序は異なる可能性があります。これは、dlgListView の内容がさまざまな列で並べ替えられる可能性があるためです)。最初のエントリのインデックスは 0 です。

初期状態で特定のエントリを選択しない場合、Selected を -1 に初期化する必要があります。-2 に設定すると、現在の並べ替え列に従った最初の項目が現在の項目になります。ビュー エントリが選択されていない場合、-1 が返されます。

*Sort* は、リスト ビューの並べ替えに使用する列を定義します。左端の列の番号が 1 です。このパラメータの符号は、並べ替える方向を定義します(正の値の場合、昇順で並べ替えられます)。Sort が 0 または有効な列数の範囲外の場合、並べ替えは行われません。Sort の戻り値は、リストの列ヘッダをクリックすることによりユーザが選択した列と並べ替えモードを反映します。既定では、dlgListView は最初の列を昇順で並べ替えます。

array の各要素は、リスト ビュー内の 1 つの行の内容を定義し、タブで区切られた値が含まれている必要があります。array の要素の値がヘッダ文字列のエントリよりも少ない場合、残りのフィールドは空になります。array の要素の値がヘッダ文字列のエントリよりも多い場合、余分な要素は削除されます。array 内の文字列はいずれも空にできません(空の文字列がある場合、その文字列以降のすべての文字列が削除されます)。

改行(「\n」)が含まれているリスト エントリは、それに従って複数の行に表示されます。

dlgListView のエントリをダブルクリックするたびに、文(省略可能)が実行されます(リストでの選択のみが変更された場合に文が呼び出されるようにする方法については、dlgSelectionChanged を参照)。文を実行する前に、ダイアログ オブジェクトで使用されたすべての変数が現在の値に更新され、文の中でこれらの変数に加えた変更は、文が戻ったときにダイアログに反映されます。

*Selected* の初期値が配列インデックスの範囲外の場合、エントリは選択されません。

*Headers* が空の文字列の場合、配列の最初の要素がヘッダ文字列として使用されます。したがって、最初のエントリのインデックスは 1 になります。

*dlgListView* の内容は、列のヘッダをクリックすることにより、任意の列で並べ替えできます。列は、列ヘッダを「クリックアンドドラッグ」することで入れ替えることもできます。これらの変更は配列の内容に影響しないことに注意してください。内容を英数字順に並べ替える場合、numeric string[] の配列を使用できます。

**例**

string Colors[] = { "red\tThe color RED", "green\tThe color GREEN", "blue\tThe color BLUE" };
int Selected = 0; // initially selects "red"
dlgListView("Name\tDescription", Colors, Selected) dlgMessageBox("You have selected " + Colors[Selected]);#### dlgPushButton

**関数**

押しボタンを定義します。

**構文**

dlgPushButton(string Text) statement「レイアウト情報」、「ダイアログ関数」、「完全な例」も参照してください。

*dlgPushButton* 文は、指定された Text を使用して押しボタンを定義します。

Text に「&」が含まれている場合、アンパサンドの後の文字はホットキーになり、ユーザが[Alt]を押しながらホットキーを押すと、ボタンが選択されます。実際の「&」文字をテキストに含めるには、エスケープする必要があります。

Text が「+」文字で始まる場合、このボタンが既定のボタンになります。このボタンは、ユーザが[Enter]を押すと選択��れます。Text が「-」文字で始まる場合、このボタンがキャンセル ボタンになります。このボタンは、ユーザがダイアログを閉じると選択されます。

注意:

 このようにマークされたキャンセル ボタンの文に dlgReject() の呼び出しが含まれていることを確認してください。そうしないと、ユーザがダイアログを閉じることができなくなる可能性があります。

実際の「+」文字または「-」文字をテキストの最初の文字として使用するには、エスケープする必要があります。

ユーザが *dlgPushButton* を選択すると、指定した文が実行されます。文を実行する前に、ダイアログ オブジェクトで使用されたすべての変数が現在の値に更新され、文の中でこれらの変数に加えた変更は、文が戻ったときにダイアログに反映されます。

**例**

int defaultWidth = 10;
int defaultHeight = 20;
int width = 5;
int height = 7;
dlgPushButton("&Reset defaults") {
  width = defaultWidth;
  height = defaultHeight;
  }
dlgPushButton("+&Accept") dlgAccept();
dlgPushButton("-Cancel") { if (dlgMessageBox("Are you sure?", "Yes", "No") == 0) dlgReject(); }#### dlgRadioButton

**関数**

ラジオ ボタンを定義します。

**構文**

dlgRadioButton(string Text, int &Selected) [ statement ]dlgCheckBox、dlgGroup、「レイアウト情報」、「完全な例」も参照してください

*dlgRadioButton* 文は、指定された Text を使用してラジオ ボタンを定義します。

Text に「&」が含まれている場合、アンパサンドの後の文字はホットキーになり、ユーザが[Alt]を押しながらホットキーを押すと、ボタンが選択されます。実際の「&」文字をテキストに含めるには、エスケープする必要があります。

*dlgRadioButton* は、*dlgGroup* 内でのみ使用できます。同じグループ内のすべてのラジオ ボタンが、同じ *Selected* 変数を使用する必要があります。

ユーザが *dlgRadioButton* を選択すると、*dlgGroup* 内でのこのボタンのインデックスが *Selected* 変数に格納されます。*Selected* の初期値は、初期状態でどのラジオ ボタンが選択されているかを定義します。*Selected* がこのグループの有効範囲外である場合、どのラジオ ボタンも選択されません。正しくラジオ ボタンを選択するには、最初の *dlgRadioButton* を定義する前に *Selected* を設定し、後続の各ラジオ ボタンを追加する間には変更しないでください。そうしないと、どのラジオ ボタン(存在する場合)が選択されるかが未定義になります。

dlgRadioButton が選択されるたびに、文(省略可能)が実行されます。

**例**

int align = 1;
dlgGroup("Alignment") {
  dlgRadioButton("&Top", align);
  dlgRadioButton("&Center", align);
  dlgRadioButton("&Bottom", align);
  }#### dlgRealEdit

**関数**

実数入力フィールドを定義します。

**構文**

dlgRealEdit(real &Value, real Min, real Max)dlgIntEdit、dlgStringEdit、dlgLabel、「レイアウト情報」、「完全な例」も参照してください

*dlgRealEdit* 文は、指定された Value を使用して実数入力フィールドを定義します。

*Value* が初期状態で Min と Max で定義される範囲の外にある場合、これらの値に制限されます。

**例**

real Value = 1.4142;
dlgHBoxLayout {
  dlgLabel("Enter a &Number between 0 and 99");
  dlgRealEdit(Value, 0.0, 99.0);
  }#### dlgSpacing

**関数**

ボックス レイアウト コンテキスト内の追加のスペースを定義します。

**構文**

dlgSpacing(int Size)dlgHBoxLayout、dlgVBoxLayout、dlgStretch、「レイアウト情報」、「完全な例」も参照してください

*dlgSpacing* 文は、垂直または水平のボックス レイアウト コンテキスト内の追加のスペースを定義します。

Size は、追加のスペースのピクセル数を定義します。

**例**

dlgVBoxLayout {
  dlgLabel("Label 1");
  dlgSpacing(40);
  dlgLabel("Label 2");
  }#### dlgSpinBox

**関数**

スピン ボックス選択フィールドを定義します。

**構文**

dlgSpinBox(int &Value, int Min, int Max)dlgIntEdit、dlgLabel、「レイアウト情報」、「完全な例」も参照してください

*dlgSpinBox* 文は、指定された Value を使用してスピン ボックス入力フィールドを定義します。

*Value* が初期状態で Min と Max で定義される範囲の外にある場合、これらの値に制限されます。

**例**

int Value = 42;
dlgHBoxLayout {
  dlgLabel("&Select value");
  dlgSpinBox(Value, 0, 99);
  }#### dlgStretch

**関数**

ボックス レイアウト コンテキスト内の空のストレッチ可能なスペースを定義します。

**構文**

dlgStretch(int Factor)dlgHBoxLayout、dlgVBoxLayout、dlgSpacing、「レイアウト情報」、「完全な例」も参照してください

*dlgStretch* 文は、垂直または水平のボックス レイアウト コンテキスト内の空のストレッチ可能なスペースを定義します。

*Factor* は、スペースのストレッチ係数を定義します。

**例**

dlgHBoxLayout {
  dlgStretch(1);
  dlgPushButton("+OK")    { dlgAccept(); };
  dlgPushButton("Cancel") { dlgReject(); };
  }#### dlgStringEdit

**関数**

文字列入力フィールドを定義します。

**構文**

dlgStringEdit(string &Text[, string &History[][, int Size]])dlgRealEdit、dlgIntEdit、dlgTextEdit、dlgLabel、「レイアウト情報」、「完全な例」も参照してください

*dlgStringEdit* 文は、指定された Text を使用して 1 行テキスト入力フィールドを定義します。

*History* が指定されている場合、ユーザが入力した文字列の履歴は、その文字列配列に格納されます。入力フィールドには、以前に入力した文字列から選択できるボタンがあります。ゼロより大きい *Size* を指定すると、最大でその数までの文字列のみが配列に格納されます。ダイアログを新しく開いたときに *History* にデータが含まれている場合、そのデータが履歴の初期化に使用されます。最後に入力したユーザ入力がインデックス 0 に格納されています。*History* 内の文字列はいずれも空にできません。空の文字列がある場合、その文字列以降のすべての文字列が削除されます。

**例**

string Name = "Linus";
dlgHBoxLayout {
  dlgLabel("Enter &Name");
  dlgStringEdit(Name);
  }#### dlgTabPage

**関数**

タブ ページを定義します。

**構文**

dlgTabPage(string Title) statementdlgTabWidget、「レイアウト情報」、「完全な例」も参照してください

*dlgTabPage* 文は、指定された文が含まれている、指定されたタイトルを持つタブ ページを定義します。

Title に「&」が含まれている場合、アンパサンドの後の文字はホットキーになり、ユーザが[Alt]を押しながらホットキーを押すと、このタブ ページが開きます。実際の「&」文字をテキストに含めるには、エスケープする必要があります。

タブ ページは、dlgTabWidget 内でのみ使用できます。

既定では *dlgTabPage* に *dlgVBoxLayout* が含まれているため、簡単なタブ ページではレイアウトについて心配する必要はありません。

**例**

dlgTabWidget {
  dlgTabPage("Tab &1") {
    dlgLabel("This is page 1");
    }
  dlgTabPage("Tab &2") {
    dlgLabel("This is page 2");
    }
  }#### dlgTabWidget

**関数**

タブ ページのコンテナを定義します。

**構文**

dlgTabWidget { tabpages }
dlgTabWidget(int &Index) { tabpages }dlgTabPage、「レイアウト情報」、「完全な例」も参照してください

*dlgTabWidget* は、タブ ページのセットのコンテナを定義します。

*tabpages* は、1 つまたは複数の dlgTabPage オブジェクトのシーケンスである必要があります。このシーケンスには、他のダイアログ オブジェクトは使用できません。

*Index* は、初期状態で選択されるタブを定義します。この選択が変更されると、それに従って変数 Index が設定されます。最初のページのインデックスは 0 です(タイトルとは無関係)。

**例**

dlgTabWidget {
  dlgTabPage("Tab &1") {
    dlgLabel("This is page 1");
    }
  dlgTabPage("Tab &2") {
    dlgLabel("This is page 2");
    }
  }
dlgDialog("test")
{
  int TabNr = 0;
  int CheckBoxValue[];
  dlgTabWidget(TabNr) {
     for (int i = 0; i <= 9; i++) {
         string s;
         sprintf(s, "%d", i);
         dlgTabPage("Tab " + s) {
            dlgLabel("This is page " + s);
            dlgCheckBox(s, CheckBoxValue[i]) {
               string Msg;
               sprintf(Msg, "Value #%d: %d\n", TabNr, CheckBoxValue[TabNr]);
               dlgMessageBox(Msg);
               }
            }
         }
     }
};#### dlgTextEdit

**関数**

マルチ テキスト入力フィールドを定義します。

**構文**

dlgTextEdit(string &Text)dlgStringEdit、dlgTextView、dlgLabel、「レイアウト情報」、「完全な例」も参照してください

*dlgTextEdit* 文は、指定された Text を使用してマルチ テキスト入力フィールドを定義します。

Text 内の行は、改行文字(「\n」)で区切る必要があります。Text の行の末尾に空白文字が含まれている場合は削除され、返された後は各行の末尾に空白はありません。テキストの末尾の空の行は全体が削除されます。

**例**

string Text = "This is some text.\nLine 2\nLine 3";
dlgVBoxLayout {
  dlgLabel("&Edit the text");
  dlgTextEdit(Text);
  }#### dlgTextView

機能

マルチ テキスト ビューア フィールドを定義します。

構文

dlgTextView(string Text) dlgTextView(string Text, string &Link) statement

dlgTextEdit、dlgLabel、「レイアウト情報」、「完全な例」も参照してください

dlgTextView 文は、指定された Text を使用してマルチ テキスト ビューア フィールドを定義します。

Text には HTML タグを含めることができます。

Text 内の外部ハイパーリンクは、適切なアプリケーション プログラムで開かれます。

Link が指定されており、Text にハイパーリンクが含まれている場合、ユーザがハイパーリンクをクリックするたびに文が実行されます。Link の値は、<a href=...> タグで href の値として定義されている値に設定されます。文の実行後に Link 変数が空でない場合は、既定のハイパーリンク処理が行われます。これは、dlgTextView が開かれる前に Link にテキストが含まれている場合にも該当し、初期状態で指定された位置にスクロールすることができます。Link が指定されている場合、外部ハイパーリンクは開かれません。

例

string Text = "This is some text.\nLine 2\nLine 3"; dlgVBoxLayout { dlgLabel("&View the text"); dlgTextView(Text); }

#### dlgVBoxLayout

**関数**

垂直ボックス レイアウト コンテキストを開きます。

**構文**

dlgVBoxLayout statementdlgGridLayout、dlgHBoxLayout、「レイアウト情報」、「完全な例」も参照してください

*dlgVBoxLayout* 文は、指定された文の垂直ボックス レイアウト コンテキストを開きます。

既定では *dlgDialog* に *dlgVBoxLayout* が含まれているため、簡単なダイアログではレイアウトについて心配する必要はありません。

**例**

dlgVBoxLayout {
  dlgLabel("Box 1");
  dlgLabel("Box 2");
  dlgLabel("Box 3");
  }## レイアウト情報

ユーザ言語ダイアログ内のすべてのオブジェクトは、レイアウト コンテキスト内に配置されます。

レイアウト コンテキストは、グリッド、水平、または垂直のいずれかです。

#### グリッド レイアウト コンテキスト

グリッド レイアウト コンテキスト内のオブジェクトには、それらのオブジェクトを配置するセルのグリッド座標を指定する必要があります。行 5、列 2 にテキスト ラベルを配置するには、次のように記述します。

dlgGridLayout {
  dlgCell(5, 2) dlgLabel("Text");
  }オブジェクトが複数のセルにわたる場合は、開始セルと終了セルの座標を指定する必要があります。行 1、列 2 から行 3、列 5 までの範囲のグループを配置するには、次のように記述します。

dlgGridLayout {
  dlgCell(1, 2, 3, 5) dlgGroup("Title") {
    //...
    }
  }#### 水平レイアウト コンテキスト

水平レイアウト コンテキストのオブジェクトは左から右に配置されます。特殊なオブジェクト dlgStretch と dlgSpacing を使用して、使用可能なスペースの配分をさらに細かく調整できます。

ダイアログの右端に表示される 2 つのボタンを定義するには、次のように記述します。

dlgHBoxLayout {
  dlgStretch(1);
  dlgPushButton("+OK")    dlgAccept();
  dlgPushButton("Cancel") dlgReject();
  }#### 垂直レイアウト コンテキスト

垂直レイアウト コンテキストのオブジェクトは、上から下に配置される点を除き、水平レイアウト コンテキストのオブジェクトと同じ規則に従います。

#### レイアウト コンテキストを併用する

垂直、水平、およびグリッドのレイアウト コンテキストを併用して、目的のダイアログ レイアウト構造を作成することができます。この例については、「完全な例」を参照してください。

## ダイアログ関数

ユーザ言語ダイアログでは、次の関数を使用できます。

- *dlgAccept()* は、ダイアログを閉じ、その内容を受け入れます

- *dlgRedisplay()* は、値が変更された直後にダイアログを再表示します

- *dlgReset()* は、すべてのダイアログ オブジェクトを初期値にリセットします

- *dlgReject()* は、ダイアログを閉じ、その内容を拒否します

- *dlgSelectionChanged()* は、dlgListView または dlgListBox での現在の選択が変更されたかどうかを示します

#### dlgAccept()

**関数**

ダイアログを閉じ、その内容を受け入れます。

**構文**

void dlgAccept([ int Result ]);dlgReject、dlgDialog、「完全な例」も参照してください

*dlgAccept* 関数は、dlgDialog を閉じ、現在の文のシーケンスの処理が完了した後で戻ります。

ダイアログの値に対してユーザが行った変更はすべて受け入れられ、ダイアログ オブジェクトの定義時に指定された変数にコピーされます。

省略可能な *Result* は、ダイアログによって返される値です。通常、これは正の整数値です。値が指定されていない場合、既定で 1 になります。

*dlgAccept()* は通常のプログラム実行に戻ることに注意してください。したがって、下記のようなシーケンスでは、

dlgPushButton("OK") {
  dlgAccept();
  dlgMessageBox("Accepting!");
  }dlgAccept() の後の文も実行されます。

**例**

int Result = dlgDialog("Test") {
               dlgPushButton("+OK")    dlgAccept(42);
               dlgPushButton("Cancel") dlgReject();
               };#### dlgRedisplay()

**関数**

値を変更した後、ダイアログを再表示します。

**構文**

void dlgRedisplay(void);dlgReset、dlgDialog、「完全な例」も参照してください

*dlgRedisplay* 関数は、ダイアログ オブジェクトの定義時に使用した変数に対する変更が行われた直後に *dlgDialog* を更新するために呼び出すことができます。

プログラム コードの実行中にダイアログを更新する場合にのみ、*dlgRedisplay()* を呼び出す必要があります。次の例では、ステータスが「Running...」に変更され、「program action」が実行される前に、この変更を有効にするために dlgRedisplay() を呼び出す必要があります。ステータスが最後に「Finished」に変更された後は、dlgRedisplay() を呼び出す必要はありません。文が終了すると、すべてのダイアログ オブジェクトが自動的に更新されるためです。

**例**

string Status = "Idle";
int Result = dlgDialog("Test") {
               dlgLabel(Status, 1); // note the '1' to tell the label to be updated!
               dlgPushButton("+OK")    dlgAccept(42);
               dlgPushButton("Cancel") dlgReject();
               dlgPushButton("Run") {
                 Status = "Running...";
                 dlgRedisplay();
                 // some program action here...
                 Status = "Finished.";
                 }
               };#### dlgReset()

**関数**

すべてのダイアログ オブジェクトを初期値にリセットします。

**構文**

void dlgReset(void);dlgReject、dlgDialog、「完全な例」も参照してください

*dlgReset* 関数は、現在の dlgDialog のすべてのダイアログ オブジェクトに初期値をコピーします。

ユーザがダイアログの値に加えた変更はすべて破棄されます。

*dlgReject()* を呼び出すことは、*dlgReset()* を呼び出すことも意味します。

**例**

int Number = 1;
int Result = dlgDialog("Test") {
               dlgIntEdit(Number);
               dlgPushButton("+OK")    dlgAccept(42);
               dlgPushButton("Cancel") dlgReject();
               dlgPushButton("Reset")  dlgReset();
               };#### dlgReject()

**関数**

ダイアログを閉じ、その内容を拒否します。

**構文**

void dlgReject([ int Result ]);dlgAccept、dlgReset、dlgDialog、「完全な例」も参照してください

*dlgReject* 関数は、dlgDialog を閉じ、現在の文のシーケンスの処理が完了した後に戻ります。

ユーザがダイアログの値に加えた変更はすべて破棄されます。ダイアログ オブジェクトの定義時に指定された変数は、ダイアログが戻るときに元の値にリセットされます。

省略可能な *Result* は、ダイアログによって返される値です。通常、これは 0 または負の整数値です。値が指定されていない場合、既定で 0 になります。

*dlgReject()* は通常のプログラム実行に戻ることに注意してください。したがって、下記のようなシーケンスでは、

dlgPushButton("Cancel") {
  dlgReject();
  dlgMessageBox("Rejecting!");
  }*dlgReject()* の後の文も実行されます。

*dlgReject()* を呼び出すことは、*dlgReset()* を呼び出すことも意味します。

**例**

int Result = dlgDialog("Test") {
               dlgPushButton("+OK")    dlgAccept(42);
               dlgPushButton("Cancel") dlgReject();
               };#### dlgSelectionChanged()

**関数**

dlgListView または dlgListBox での現在の選択が変更されたかどうかを示します

**構文**

int dlgSelectionChanged(void);**戻り値**

*dlgSelectionChanged* 関数は、リスト内の選択が変更された場合のみゼロ以外の値を返します。

dlgListView、dlgListBox も参照してください

*dlgSelectionChanged* 関数をリスト コンテキストで使用し、ユーザが項目をダブルクリックしたため、*dlgListView* または *dlgListBox* の文が呼び出されたかどうか、またはリスト内の現在の選択のみが変更されたかどうかを判断できます。

dlgListView または dlgListBox の文に dlgSelectionChanged の呼び出しが含まれていない場合、この文はユーザがリスト内の項目をダブルクリックしたときにのみ実行されます。ただし、リスト内の現在の選択に対する変更に対して ULP が対応する必要がある場合は、リストの文内で dlgSelectionChanged を呼び出すことができます。これにより、リスト内の現在の選択が変更された場合にも、文が呼び出されます。

ダイアログを開くと最初にリスト項目が選択され、リストの文に dlgSelectionChanged の呼び出しが含まれている場合、「選択なし」から実際の選択への最初の変更を示すために、文の実行では dlgSelectionChanged が true を返します。後で文字列またはリストの選択をプログラムで変更しても、リストの文は自動的には実行されません。これは、現在のリスト項目が別のダイアログ オブジェクトをコントロールする場合(たとえば、現在選択されている項目の拡張表現を表示する dlgTextView など)に注意が必要です。

**例**

string Colors[] = { "red\tThe color RED", "green\tThe color GREEN", "blue\tThe color BLUE" };
int Selected = 0; // initially selects "red"
string MyColor;
dlgLabel(MyColor, 1);
dlgListView("Name\tDescription", Colors, Selected) {
  if (dlgSelectionChanged())
     MyColor = Colors[Selected];
  else
     dlgMessageBox("You have chosen " + Colors[Selected]);
  }## エスケープ文字

ボタンやラベルのテキストには特殊な意味を持つ文字があるため、そのまま表示する場合はエスケープする必要があります。これを行うには、次のように、文字の前にバックスラッシュを追加する必要があります。

dlgLabel("Miller \\& Co.");これにより、ダイアログに「Miller & Co.」と表示されます。ここでは実際には 2 つのバックスラッシュ文字が使用されていることに注意してください。これは、この行が最初にユーザ言語パーサによって処理され、最初のバックスラッシュが除去されるためです。

## 完全な例

以下に、ユーザ言語ダイアログの完全な例を示します。

int hor = 1;
int ver = 1;
string fileName;
int Result = dlgDialog("Enter Parameters") {
  dlgHBoxLayout {
    dlgStretch(1);
    dlgLabel("This is a simple dialog");
    dlgStretch(1);
    }
  dlgHBoxLayout {
    dlgGroup("Horizontal") {
      dlgRadioButton("&Top", hor);
      dlgRadioButton("&Center", hor);
      dlgRadioButton("&Bottom", hor);
      }
    dlgGroup("Vertical") {
      dlgRadioButton("&Left", ver);
      dlgRadioButton("C&enter", ver);
      dlgRadioButton("&Right", ver);
      }
    }
  dlgHBoxLayout {
    dlgLabel("File &name:");
    dlgStringEdit(fileName);
    dlgPushButton("Bro&wse") {
      fileName = dlgFileOpen("Select a file", fileName);
      }
    }
  dlgGridLayout {
    dlgCell(0, 0) dlgLabel("Row 0/Col 0");
    dlgCell(1, 0) dlgLabel("Row 1/Col 0");
    dlgCell(0, 1) dlgLabel("Row 0/Col 1");
    dlgCell(1, 1) dlgLabel("Row 1/Col 1");
    }
  dlgSpacing(10);
  dlgHBoxLayout {
    dlgStretch(1);
    dlgPushButton("+OK")    dlgAccept();
    dlgPushButton("Cancel") dlgReject();
    }
  };
  
  
    
      
        **親ページ:** [ユーザ言語プログラミング](ECD-USER-LANG-REF.htm)