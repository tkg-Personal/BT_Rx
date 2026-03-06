# ULP を記述する

# ULP を記述する

ユーザ言語プログラムは、C 言語に似た構文で記述されるプレーン テキスト ファイルです。ユーザ言語プログラムは、拡張子 .ulp を使用します。ULP ファイルは、任意のテキスト エディタを使用して作成できます(追加の制御文字をファイルに挿入しない場合)。また、組み込みテキスト エディタを使用することもできます。ユーザ言語プログラムは、2 つの主要な項目、定義と文で構成されています。

定義は、文で使用される定数、変数、および関数を定義するために使用されます。

単純な ULP は次のようになります。

#usage "Add the characters in the word 'Hello'\n"
       "Usage: RUN sample.ulp"
// Definitions:
string hello = "Hello";
int count(string s)
{
  int c = 0;
  for (int i = 0; s[i]; ++i)
      c += s[i];
  return c;
}
// Statements:
output("sample") {
  printf("Count is: %d\n", count(hello));
  }
#usage ディレクティブが存在する場合、プログラムの説明を表示するために、コントロール パネルでその値が使用されます。

ULP の結果が、エディタ ウィンドウで実行される特定のコマンドである場合、exit() 関数を使用してそのコマンドをエディタ ウィンドウに送信できます。

  
  
    
      
        **親ページ:** [ユーザ言語プログラミング](ECD-USER-LANG-REF.htm)