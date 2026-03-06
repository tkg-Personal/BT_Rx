# アクティビティ 2: 2D プリント基板を作成する

# アクティビティ 2: 2D プリント基板を作成する

このアクティビティでは、回路基板の回路図と、アクティビティ 1 で作成した 3D PCB を基にして 2D PCB を作成します。完了すると、2D PCB で定義されたコンポーネントとワイヤを使用して 3D PCB が更新されます。

![完成した 2D PCB および 3D PCB ](../images/tutorial/mech-to-ecad-workflow/finished-2d-3d-pcb.png)

*作成された 2D PCB および 3D PCB。*

## 前提条件

- アクティビティ 1 を完了していること。

## 手順

- **LED Blinker** という名前の電子デザインを作成し、 **[サンプル] > [基本トレーニング] > [13 - PCB]** から **[LED Blinker]** という参照回路図をインポートします。このチュートリアル用に作成したフォルダまたはプロジェクトに両方を保存します。

Fusion で、 **[ファイル]** ![ファイルのアイコン](../images/icon/common/file.png) > **[新規電子デザイン]** をクリックして空の電子ドキュメントを開始します。

- **[保存]** ![保存のアイコン](../images/icon/common/save.png) をクリックし、電子デザインを **LED Blinker Design** という名前で **[Mech to Ecad Tutorial]** プロジェクトまたは作成したフォルダに保存します。

- **[データ パネル]** ![データ パネルのアイコン](../images/icon/common/data-panel.png) で、 **[ホーム]** タブにナビゲートしてプロジェクトのリストを表示します。

- **[サンプル] > [基本トレーニング] > [13 - PCB] > [LED Blinker]** をクリックし、PCB 回路図を開きます。

- **[ファイル]** ![アイコン ファイル](../images/icon/common/file.png) > **[名前を付けて保存]** をクリックし、回路図デザインを **LED Blinker** という名前で **[Mech to Ecad Tutorial]** プロジェクトまたは作成したフォルダに保存します。

- **[LED Blinker Design]** タブをクリックし、手順 1a で作成した空の電子デザインに切り替えます。

- **[共通] > [作成] > [回路図ドキュメントへの参照]** ![参照回路図のアイコン](../images/icon/ecd/reference-schematic.png) をクリックし、 **[Mech to Ecad Tutorial]** プロジェクトまたは作成したフォルダ内の **LED Blinker** 回路図を選択します。

> **Note:** 注: 電子デザインには、回路図、2D PC 基板レイアウト、3D 基板の 3 つのパーツがあります。アクティビティ 1 で 3D 基板を作成しました。電子デザインを開始し、既存の回路図にリンクしました。ここで、既存の回路図と 3D PCB をリンクする 2D PCB を作成する必要があります。

- **3D PCB** を **2D PCB** ドキュメントにリンクします。

**[LED Blinker 3D PCB]** デザイン タブをクリックします。

- **[3D PCB]** 作業スペースで、**[3D PCB] > [修正] > [2D PCB にプッシュ]** ![2D PCB にプッシュのアイコン](../images/icon/ecd/push-2d-pcb.png) をクリックします。

- リンクされた PCB 2D ドキュメントがないことを確認するメッセージが表示される場合があります。続行するには、**[はい]**をクリックします。これにより、**[電子デザイン]**作業スペースに 2D PCB が作成されます。

- **[保存]** をクリックして、ドキュメントを **LED Blinker 2D PCB** として保存します。

- 2D PCB と回路図ドキュメントをリンクします。

**[LED Blinker Design]** 電子デザインをクリックします。この時点で、回路図のみがドキュメントに関連付けられています。

- **[共通] > [作成] > [PCB ドキュメントを参照]** ![PCB ドキュメントへの参照](../images/icon/ecd/reference-pcb.png) をクリックします。

- **[参照先]** ダイアログで **LED Blinker 2D PCB** を選択し、 **[選択]** をクリックします。2D PCB デザインが開きます。基板サイズは作成された 3D PCB によって決まり、回路図で定義されたコンポーネントは基板の端に移動します。

![リンクされた回路図と 2D PCB](../images/tutorial/mech-to-ecad-workflow/linked-schematic-2d-pcb.png)

- **[LED Blinker 2D PCB]** デザインを保存します。

- 2D PCB にコンポーネントを追加し、コンポーネント間にルートを作成します。

PCB レイアウトのチュートリアル(「[アクティビティ 2: コンポーネントを配置する](2-place-components.htm)」および「[アクティビティ 3: ワイヤを配線する](3-routing-wires.htm)」)と同じ手順を使用して、コンポーネントを手動で追加します。

電源と LED を基板の上面に配置します。

- タイマー、抵抗器、およびコンデンサを基板の裏面に配置します。

- 各コンポーネントの正確な相対位置は重要ではありません。

- **[デザイン] > [クイック配線] > [オートルータ]** をクリックして、ワイヤを配線します。

![リンクされた回路図と 2D PCB](../images/tutorial/mech-to-ecad-workflow/finished-2d-pcb.png)

- 2D PCB の変更を 3D PCB にプッシュします。

**LED Blinker 2D PCB** デザインの上面で、2D ドキュメントと 3D PCB ドキュメントが同期していないことを示すメッセージが表示されます。

- **[デザイン] > [切り替え] > [3D PCB にプッシュ]** をクリックします。

- **[3D PCBにプッシュ]** ダイアログで、 **[プッシュ]** をクリックします。

- **[LED Blinker 3D PCB]** デザインが開き、3D コンポーネントが表示され始めます。

- **[保存]** ![アイコン保存](../images/icon/common/save.png) をクリックします。

 ![完成した 2D PCB および 3D PCB ](../images/tutorial/mech-to-ecad-workflow/finished-2d-3d-pcb.png)

## アクティビティ 2 のサマリー

このアクティビティでは、[デザイン]作業スペースで作成した 3D PCB を基にして 2D PCB を作成しました。既存の回路図を使用して、2D PCB を形成しました。コンポーネントとワイヤを 2D PCB に手動で配置し、変更を 3D PCB にプッシュしました。その結果、2D PCB に追加されたコンポーネントとワイヤを反映するように、3D PCB が更新されました。

  
  
    
      
        **親ページ:** [チュートリアル: 機械から電子部品へのワークフロー](ECD-TUT-MECH-TO-ECAD-WORKFLOW-TOP-LEVEL.htm)
      
  
      
        **前のページ:** [アクティビティ 1: 3D プリント基板を作成する](Fusion_ECAD_ecad_tutorials_mech_to_ecad_1_create_3d_pcb_html.htm)
      
      
        **次のページ:** [アクティビティ 3: 3D PCB を使用してデザインを作成する](Fusion_ECAD_ecad_tutorials_mech_to_ecad_3_create_design_html.htm)