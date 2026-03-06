# 文

# 文

文は、次のいずれかです。

- 複合文

- 制御文

- 式文

- 組み込み文

- 定数定義

- 変数定義

文は、ユーザ言語プログラムの実行時の制御のフローを指定します。特定の制御文がないと、文は ULP ファイルに記述されているとおりの順番で実行されます。

## 複合文

複合文(ブロックとも呼ばれる)は、一致する中括弧({ })で囲まれた文のリスト(場合によっては空)です。構文的には、ブロックは単一の文とみなすことができますが、識別子のスコープもコントロールします。ブロック内で宣言された識別子のスコープは、宣言の位置から閉じ中括弧までです。

複合文は、任意の深さまでネストできます。

## 式文

式文は、式の後にセミコロンを付けたものです。

式文は、式を評価することによって実行されます。この評価のすべての副作用は、次の文が実行される前に完了します。ほとんどの式文は、割り当てまたは関数呼び出しです。

特殊なケースとして、セミコロンのみで構成される空の文があります。空の文は何も実行しませんが、ULP の構文上文が予期されている位置で、プログラムでは文を必要としない場合に役立つことがあります。

## 制御文

制御文は、プログラム フローをコントロールするために使用されます。

*反復*文:

do...while
for
while
*選択*文:

if...else
switch
*ジャンプ*文:

break
continue
return
### break

break 文の一般的な構文は次のとおりです。

break;
この文は、それを囲んでいる最も内側の do...while 文、for 文、switch 文、または while 文を即座に終了します。これは、オブジェクト タイプのループ メンバにも適用されます。

これらの文はすべて組み合わせたり任意の深さにネストすることができるため、break 文が確実に正しい文を終了するように注意してください。

#### continue

continue 文の一般的な構文は次のとおりです。

continue;
この文は、それを囲んでいる最も内側の do...while 文、while 文、または for 文のテスト条件、またはそれを囲んでいる最も内側の for 文の増分式に制御を移します。

これらの文はすべて組み合わせたり任意の深さにネストすることができるため、continue 文が確実に正しい文に作用するように注意してください。

### do...while

do...while 文の一般的な構文は次のとおりです。

do statement while (condition);
この文は、condition 式がゼロになるまで statement を実行します。statement を最初に実行した後で条件がテストされます。つまり、statement は常に少なくとも 1 回実行されます。

文の中に break 文も return 文もない場合、無限ループを避けるために、文が条件の値に作用するか、または condition 自体が評価中に変わる必要があります。

**例**:

string s = "Trust no one!";
int i = -1;
do {
   ++i;
   } while (s[i]);
### for

for 文の一般的な構文は次のとおりです。

for ([init]; [test]; [inc]) statement
この文は、次の手順を実行します。

- 初期化式 init が存在する場合は実行されます。

- test 式が存在する場合は実行されます。結果がゼロ以外の場合(または test 式が存在しない場合)、statement が実行されます。

- inc 式が存在する場合は実行されます。

- 最後に、制御が手順 2 に戻ります。

文の中に break 文も return 文もない場合、無限ループを避けるために、*inc* 式(または文)が test 式の値に作用するか、または test 自体が評価中に変わる必要があります。

初期化式 *init* は通常、1 つまたは複数のループ カウンタを初期化します。また、ループ カウンタとして新しい変数を定義することもできます。このような変数のスコープは、for ループを囲むブロックの最後まで有効です。

**例**:

string s = "Trust no one!";
int sum = 0;
for (int i = 0; s[i]; ++i)
    sum += s[i]; // sums up the characters in s
### if...else

if...else 文の一般的な構文は次のとおりです。

if (expression)
   t_statement
[else
   f_statement]
条件式が評価され、値がゼロ以外の場合、t_statement が実行されます。それ以外の場合は、else 句がある場合は f_statement が実行されます。

else 句は、常に、最後に出現した else がない if に一致します。これが目的と異なる場合は、次のように、中括弧を使用して文をグループ化する必要があります。

if (a == 1) {
   if (b == 1)
      printf("a == 1 and b == 1\n");
   }
else
   printf("a != 1\n");
#### 戻る

void 以外の戻り型を持つ関数には、次の構文の return 文が少なくとも 1 つ含まれている必要があります。

return expression;
ここで、*expression* は関数の戻り型と互換性のある型に評価される必要があります。*expression* の値は関数によって返される値です。

関数の型が void の場合、*expression* なしの return 文を使用して関数呼び出しから戻ることができます。

#### switch

switch 文の一般的な構文は次のとおりです。

switch (sw_exp) {
  case case_exp: case_statement
  ...
  [default: def_statement]
  }
この文では、*sw_exp* (整数型である必要があります)の値に応じて、いくつかの case ラベルが付いた文のうち 1 つに制御を移すことができます。

任意の case_statement に 1 つまたは複数の case ラベルを付けることができます。各 case ラベルの *case_exp* は、それを囲む switch 文内で一意の定数整数に評価される必要があります。

また、最大で 1 つの既定のラベルを指定できます。

*sw_exp* を評価した後、case_exp と照合されます。一致するものが見つかった場合、一致する case ラベルを持つ case_statement に制御が渡されます。一致するものが見つからず、既定のラベルが存在する場合、def_statement に制御が渡されます。それ以外の場合は、switch 文のどの文も実行されません。

*case* ラベルと *default* ラベルが検出された場合、プログラム実行は影響を受けません。単に、ラベルから次の文に制御が渡されます。

特定の case に対する一連の文の最後で実行を停止するには、break 文を使用します。

**例**:

string s = "Hello World";
int vowels = 0, others = 0;
for (int i = 0; s[i]; ++i)
    switch (toupper(s[i])) {
      case 'A':
      case 'E':
      case 'I':
      case 'O':
      case 'U': ++vowels;
                break;
      default: ++others;
      }
printf("There are %d vowels in '%s'\n", vowels, s);
#### while

while 文の一般的な構文は次のとおりです。

while (condition) statement
この文は、*condition* 式がゼロ以外である限り statement を実行します。

statement を最初に実行する前に条件がテストされます。つまり、*condition* が最初にゼロである場合、statement が 1 回も実行されない可能性があります。

文の中に break 文も return 文もない場合、無限ループを避けるために、文が条件の値に作用するか、または *condition* 自体が評価中に変わる必要があります。

**例**:

string s = "Trust no one!";
int i = 0;
while (s[i])
      ++i;

  
  
    
      
        **親ページ:** [ユーザ言語プログラミング](ECD-USER-LANG-REF.htm)