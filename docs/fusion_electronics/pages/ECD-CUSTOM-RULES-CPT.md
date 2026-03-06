# カスタム ルール

# カスタム ルール

Fusion のカスタム ルールは、次のようなさまざまなスコープを使用します:

- In Signal

- In Net Classes

- In Component

- On Layers

- On Signal Layers

- In Named Group

- In Diff Pair

- Is Signal

一部のルールでは、チェックするオブジェクトが既に制限されているため、すべてのスコープがすべてのルールカテゴリに適用されるわけではありません。これにより、特定のスコープが不要になります。

カスタムルールは、優先順位で並べ替えることができます。最も低い値が最も優先されます。各カテゴリ内で、スコープが厳密でないルールの前にスコープが厳密なルールを配置します。この方法によって、確実に Fusion で厳密なルールが最初に使用されます。

![カスタム デザイン ルールのダイアログ](../images/how-to/design-rules-dialog.png)

## ルールの優先順位とスコープの一致の厳密さ

カスタム ルールを追加する場合は、ルールの優先順位とスコープの厳密さを慎重に考慮します。Fusion では、チェック対象のオブジェクトに対して最初に一致するルールが使用されます。厳密でないルールの優先順位が高い場合は、Fusion ではそのルールがより厳しいルールに優先して使用されます。

注記: より厳密なスコープに優先順位の高い**最小値**、および**優先値**を付けるべきです。

## 使用可能なルールのスコープ

| 
**スコープ式** | 
**パラメーター** | 
**情報** | 
**例** | 
 |

| 
Is Copper | 
なし | 
任意の銅箔レイヤーの任意のオブジェクト(パッド、SMD、ビアを含む上面、内側、下面)をチェックします。 | 
 | 
 |

| 
Is Copper(wire、polygon) | 
なし | 
任意の銅箔レイヤー上のワイヤ、ポリゴンのオブジェクト(上面、内側、下面)のみをチェックします。 | 
 | 
 |

| 
Is Pad | 
なし | 
オブジェクトが貫通穴パッドであるかチェックします。 | 
 | 
 |

| 
Is SMD | 
なし | 
オブジェクトが表面実装デバイス(SMD)のパッドであるかチェックします。 | 
 | 
 |

| 
Is Via | 
なし | 
オブジェクトがビアであるかチェックします。 | 
 | 
 |

| 
Is Pad or SMD | 
なし | 
オブジェクトが貫通穴パッドであるか SMD パッドであるかチェックします。 | 
 | 
 |

| 
Is MultiLayer Object | 
なし | 
オブジェクトが貫通穴パッドであるかビアであるかチェックします。 | 
 | 
 |

| 
Is Thru Via | 
なし | 
オブジェクトが貫通穴ビアであるかチェックします。 | 
 | 
 |

| 
Is Micro Via | 
なし | 
オブジェクトがマイクロ ビア(最大 2 層の信号レイヤーと 1 層の絶縁層で形成)であるかチェックします。 | 
 | 
 |

| 
Is Blind Via | 
なし | 
オブジェクトがブラインド ビアであるかチェックします。 | 
 | 
 |

| 
Is Buried Via | 
なし | 
オブジェクトが埋め込みビアであるかチェックします。 | 
 | 
 |

| 
Is Text | 
なし | 
オブジェクトが文字であるかチェックします。 | 
 | 
 |

| 
Is Name | 
なし | 
オブジェクトが暗黙的コンポーネント名属性であるかチェックします。 | 
 | 
 |

| 
Is Value | 
なし | 
オブジェクトが暗黙的コンポーネントの値属性であるかチェックします。 | 
 | 
 |

| 
Is Attribute | 
なし | 
オブジェクトがコンポーネント属性であるかチェックします。 | 
 | 
 |

| 
Is Signal | 
なし | 
オブジェクトまたはその親が有効な信号であるかチェックします。 | 
 | 
 |

| 
Is Polygon Pour | 
なし | 
オブジェクトが銅箔ポリゴンベタであるかチェックします。 | 
 | 
 |

| 
In Net Classes | 
Net Classes Names | 
オブジェクトの信号ネット クラス名がネット クラス名の名前の 1 つであるかチェックします。 | 
In Net Classes = default; In Net Classes = default,power | 
 |

| 
In Signal | 
Signal Name | 
オブジェクトの親またはオブジェクト自体が信号名 = Signal Name の信号であるかチェックします | 
In Signal = GND | 
 |

| 
In Component | 
Component Name | 
オブジェクトの親がコンポーネントで、コンポーネント名 = Component Name であるかチェックします | 
In Component = U1 | 
 |

| 
In Named Group | 
Persistent Group Name | 
オブジェクトの親が名前 = Persistent Group Name の永続グループであるかチェックします | 
In Named Group = My Group | 
 |

| 
On Layers | 
Layer Names | 
オブジェクトが Layer Names コレクション内のいずれかのレイヤー上にあるかチェックします | 
On Layers = Top,Bottom; On Layer = SilkscreenTop | 
 |

| 
On Signal Layers | 
Layer Names | 
オブジェクトが Layer Names コレクション内のいずれかの信号レイヤー上にあるかチェックします | 
On Signal Layer = Top; On Signal Layers = Top,Bottom | 
 |

| 
Object Type | 
Type Name | 
オブジェクトのタイプ名 = Type Name(Wire、Pad、Hole、Line、Polygon Shape など.)をチェックします | 
Object Type = Wire; Object Type = Hole | 
 |

| 
In Diff Pair | 
Diff Pair Name | 
オブジェクトの親が、名前 = Diff Pair Name である差動ペアのメンバーである信号かチェックします | 
In Diff Pair = USB_N, USB_P | 
 |

## 各ルール カテゴリで使用可能なルール スコープ

**バイナリ ルール** -

| 
**ルール カテゴリ** | 
**オブジェクト 1 のスコープ** | 
**オブジェクト 2 のスコープ** | 
**共通のスコープ** | 
 |

| 
銅箔クリアランス(異なる信号) | 
Is Copper、Is Copper (Wire、Polygon)、Is Pad、Is Smd、Is Via、Is Pad or Smd、Is MultiLayer Object、Is Thru Via、Is Micro Via、Is Blind Via、Is Buried Via、Is Text、Is Name、Is Value、Is Attribute、Is Signal、Is Pour Polygon、In Net Classes、In Signal、In Component、In Named Group、On Signal Layers、Object Type = attribute、circle、line、pad、solid polygon shape、rectangle、smd、text、via、wire.、In Diff Pair | 
Is Copper、Is Copper (Wire、Polygon)、Is Pad、Is Smd、Is Via、Is Pad、or Smd、Is MultiLayer Object、Is Thru Via、Is Micro Via、Is Blind Via、Is Buried Via、Is Text、Is Name、Is Value、Is Attribute、Is Signal、Is Pour Polygon、In Net Classes、In Signal、In Component、In Named Group、On Signal Layers、Object Type = attribute、circle、line、pad、solid polygon shape、rectangle、smd、text、via、wire.、In Diff Pair | 
なし | 
 |

| 
銅箔クリアランス(同じ信号) | 
Is Pad、Is Smd、Is Via、Is Pad or Smd、Is MultiLayer Object、Is Thru Via、Is Blind Via、Is Buried Via、Is Pour Polygon、In Component、On Signal Layers、Object Type = attribute、circle、line、pad、solid polygon shape、rectangle、smd、text、via、wire.、In Diff Pair | 
Is Pad、Is Smd、Is Via、Is Pad or Smd、Is MultiLayer Object、Is Thru Via、Is Blind Via、Is Buried Via、Is Pour Polygon、In Component、On Signal Layers、Object Type = attribute、circle、line、pad、solid polygon shape、rectangle、smd、text、via、wire.、In Diff Pair | 
In Net Classes、In Signal、In Named Group | 
 |

| 
コンポーネント除外クリアランス | 
In Component In Named Group On Layer (only ComponentExcludeTop and ComponentExcludeBottom) Object Type = line、circle、rectangle、polygon shape、spline | 
In Component In Named Group On Layer (only ComponentExcludeTop and ComponentExcludeBottom) Object Type = line、circle、rectangle、solid polygon shape、spline | 
なし | 
 |

| 
Soldermask - シルクスクリーン間クリアランス | 
Is Pad、Is Smd、Is Via、Is Pad or Smd、Is Thru Via、Is Micro Via、Is Blind Via、Is Buried Via、In Component、In Named Group、On Layer (only SolderMaskTop and SolderMaskBottom)、Object Type = line、circle、rectangle、polygon shape、spline | 
Is Text、Is Name、Is Value、In Component、In Named Group、On Layers (SilkscreenTop、SlikscreenBottom、NamesTop、NamesBottom、ValuesTop and ValuesBottom)、Object Type = text、line、circle、rectangle、spline、solid polygon shape | 
なし | 
 |

| 
基板のアウトライン クリアランス | 
Is Copper (Wire、Polygon)、Is Pad、Is Smd、Is Via、Is Pad or Smd、Is MultiLayer Object、Is Thru Via、Is Micro Via、Is Blind Via、Is Buried Via、Is、Poly Pour、In Net Classes、In Signal、In Component、In Named Group、On Signal Layers | 
In Named Group、Object Type = line、circle、rectangle、spline、solid polygon shape、hole | 
なし | 
 |

| 
ドリル クリアランス | 
Is Pad、Is Via、Is MultiLayer Object、Is Thru Via、Is Micro Via、Is Blind Via、Is Buried Via、In Net Classes、In Signal、In Component、In Named Group Object Type = pad、via、hole | 
Is Pad、Is Via、Is MultiLayer Object、Is Thru Via、Is Micro Via、Is Blind Via、Is Buried Via、In Net Classes、In Signal、In Component、In Named Group Object Type = pad、via、hole | 
なし | 
 |

| 
銅箔 - 制限領域間クリアランス | 
Is Copper (Wire、Polygon)、Is Pad、Is Smd、Is Via、Is Pad or Smd、Is MultiLayer Object、Is Thru Via、Is Micro Via、Is Blind Via、Is Buried Via、Is、Poly Pour、In Net Classes、In Signal、In Component、In Named Group、On Signal Layers | 
In Component、In Named Group、On Layer (RestrictTop、RestrictBot)、Object Type = line、circle、rectangle、solid polygon shape | 
なし | 
 |

| 
ビア - 制限領域間クリアランス | 
Is Thru Via、Is Micro Via、Is Blind Via、Is Buried Via、Is、Poly Pour、In Net Classes、In Signal、In Component、In Named Group | 
In Component、In Named Group、Object Type = line、circle、rectangle、solid polygon shape | 
なし | 
 |

**単項ルール** -

| 
**ルール カテゴリ** | 
**オブジェクト 1 のスコープ** | 
**オブジェクト 2 のスコープ** | 
**共通のスコープ** | 
 |

| 
ドリル サイズ | 
Is Pad、Is Via、Is Thru Via、Is Micro Via、Is Blind Via、Is Buried Via、In Net Classes、In Signal、In Component、In Named Group、In Diff Pair | 
なし | 
なし | 
 |

| 
銅箔幅 | 
Is Copper (Wire、Polygon)、Is Smd、Is Text、Is Name、Is Value、Is Attribute、In Net Classes、In Signal、In Component、In Named Group、On Signal Layers、In Diff Pair、Object Type = wire、smd、circle、rectangle、text、attribute、Object Type != air wire | 
なし | 
なし | 
 |

| 
鋭角 | 
In Net Class、In Signal、In Component、In Named Group、On Signal Layers | 
なし | 
なし | 
 |

| 
エア ワイヤ | 
In Net Classes、In Signal、In Named Group | 
なし | 
なし | 
 |

| 
ワイヤ スタブ | 
In Net Classes、In Signal、In Named Group、On Signal Layers | 
なし | 
なし | 
 |

| 
一致した信号の長さ | 
In Net Classes | 
なし | 
なし | 
 |

  
  
    
      
        **親ページ:** [デザイン ルール](ECD-DESIGN-RULES.htm)