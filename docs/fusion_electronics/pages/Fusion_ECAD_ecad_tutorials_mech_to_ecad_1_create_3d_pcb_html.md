# アクティビティ 1: 3D プリント基板を作成する

# アクティビティ 1: 3D プリント基板を作成する

このアクティビティでは、筐体の下半分を開き、プリント基板と取り付け穴のアウトラインをスケッチします。次に、このスケッチを使用して 3D PCB を作成します。

![筐体から 3D PCB を作成](../images/tutorial/mech-to-ecad-workflow/enclosure-to-3d-pcb.png)

*筐体から作成された 3D PCB*

## 前提条件

- 新しいプロジェクト、または既存のプロジェクト内に新しいフォルダを作成し、**Mech to Ecad Tutorial** という名前を付けていること。

## 手順

- **[基本トレーニング] > [13 - PCB]** フォルダから **[Enclosure Bottom]** デザインを開き、作成したフォルダまたはプロジェクトに保存します。

必要に応じて、 **[データ パネルを表示]** ![データ パネルのアイコン](../images/icon/common/data-panel.png) をクリックします。

- **[ホーム]** ビューにナビゲートしてプロジェクトのリストを表示します。

- プロジェクト リストの **[サンプル]** セクションで、 **[基本トレーニング] > [13 - PCB]** をクリックします。 

- **[Enclosure Bottom]** デザインをクリックして開きます。

- ![ファイル アイコン](../images/icon/common/file.png) **[ファイル] > [名前を付けて保存]** をクリックし、デザインを **Enclosure Bottom** という名前で **[Mech to Ecad Tutorial]** プロジェクトまたは作成したフォルダに保存します。

- 4 つの PCB 取り付けボスのいずれかの上部にスケッチを作成します。

筐体の内側が見えるようにモデルを回転させます。

- **[ソリッド] > [作成] > [スケッチを作成]** ![スケッチを作成のアイコン](../images/icon/skt/create.png) をクリックします。

- いずれかの PCB 取り付けボスの上部をクリックします。

![スケッチを作成する](../images/tutorial/mech-to-ecad-workflow/create-sketch-boss-top.png)

- PCB 位置決めリブの下部を投影して、基板のサイズを定義します。

**[スケッチ] > [作成] > [投影/取り込み] > [投影]** ![投影のアイコン](../images/icon/skt/project.png) をクリックします。

- 長い側の 1 つのリブおよび短い側の 1 つのリブの底面をクリックします。

![リブの底面を投影](../images/tutorial/mech-to-ecad-workflow/project-rib-base.png)

- **[投影]** ダイアログで、**[ジオメトリ]** ボックスに **[2 個選択されています]** と表示されていることを確認します。

- **[OK]** をクリックします。

- 投影されたリブのエッジより **0.5 mm** 小さい中心の長方形を作成します。

**[スケッチ] > [作成] > [長方形] > [中心の長方形]** ![長方形を作成のアイコン](../images/icon/skt/rectangle-center.png) をクリックします。

- パーツの中心をクリックして、長方形の中心を定義します。

![長方形の中心を定義](../images/tutorial/mech-to-ecad-workflow/define-rect-center.png)

- クリックして、投影されたリブの底面よりも小さい長方形のコーナーを定義します。コーナーがどのジオメトリにもスナップしていないことを確認します。

![長方形のコーナーを定義](../images/tutorial/mech-to-ecad-workflow/define-rect-corner.png)

- **[スケッチ] > [作成] > [スケッチ寸法]** ![スケッチ寸法のアイコン](../images/icon/skt/dimension.png) をクリックします。

- 投影されたリブの底面と長方形のエッジの間に寸法を作成し、値を **0.5 mm** に設定します。

- 他の投影されたリブに対して、寸法の設定を繰り返します。

![長方形の寸法](../images/tutorial/mech-to-ecad-workflow/rect-dimension.png)

- ねじ穴を投影します。

**[スケッチ] > [作成] > [投影/取り込み] > [投影]** ![投影のアイコン](../images/icon/skt/project.png) をクリックします。

- 4 つのねじ穴をクリックして、現在のスケッチに投影します。

![穴を投影](../images/tutorial/mech-to-ecad-workflow/project-hole.png)

- [投影]ダイアログの **[ジオメトリ]** ボックスで 4 つ選択されていることを確認します。

- **[OK]** をクリックします。

- **[スケッチを終了]** をクリックします。

- 4 つの取り付け穴がある 3D PCB を作成します。

**[ソリッド]** タブで、**[作成] > [3D PCB を作成] > [独立した PCB を作成]** ![3D PCB を作成のアイコン](../images/icon/pcb/create.png) をクリックします。

- 長方形のスケッチをクリックして、3D PCB のプレビューを表示します。

- スケッチ平面の作成に使用する取り付けボスを見つけます。ボスの上部は、プレビューに含まれていません。

![3D PCB プレビュー](../images/tutorial/mech-to-ecad-workflow/boss-not-selected.png)

- スケッチ平面の作成に使用する取り付けボスの上部をクリックして、選択を完了します。

![3D PCB プレビュー](../images/tutorial/mech-to-ecad-workflow/boss-selected.png)

- **[独立した PCB を作成]** * ダイアログで、[プロファイル]ボックスに **[2 個選択されています]** と表示されていることを確認します。

![3D PCB プレビュー](../images/tutorial/mech-to-ecad-workflow/3d-pcb-preview.png)

- **[OK]** をクリックします。3D PCB の新しいデザインが作成されます。

![作成された 3D PCB](../images/tutorial/mech-to-ecad-workflow/created-3d-pcb.png)

- このチュートリアルで使用しているフォルダまたはプロジェクトに、**LED Blinker 3D PCB** という名前でデザインを保存します。

## アクティビティ 1 のサマリー

このアクティビティでは、まず点滅 LED パーツの筐体の下半分のデザインを開きました。このデザインを使用して、3D PCB のサイズを定義するために、筐体ジオメトリを基準にしてスケッチを作成しました。最後、新しいデザイン ファイルとして 3D PCB を作成しました。

![筐体上に作成された 3D](../images/tutorial/mech-to-ecad-workflow/3d-pcb-over-enclosure.png)

*筐体から作成された 3D PCB*

  
  
    
      
        **親ページ:** [チュートリアル: 機械から電子部品へのワークフロー](ECD-TUT-MECH-TO-ECAD-WORKFLOW-TOP-LEVEL.htm)
      
  
      
        **次のページ:** [アクティビティ 2: 2D プリント基板を作成する](Fusion_ECAD_ecad_tutorials_mech_to_ecad_2_create_2d_pcb_html.htm)