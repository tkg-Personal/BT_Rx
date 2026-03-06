# 2D PCB を機械アセンブリと同期する

# 2D PCB を機械アセンブリと同期する

リンクされたドキュメントに変更を反映するには、**3D PCB** および**アセンブリ** デザインにリンクされている 2D PCB を同期する必要があります。

> **Note:** 
注:

 2D PCB ドキュメントと 3D PCB ドキュメントの同期には、以前は 'プッシュ' メカニズムが利用されていましたが、Fusion のその他の更新動作とより一貫性のある 'プル' メカニズムに更新されました。

## 3D PCB に同期する

**2D PCB** に変更を加えた場合、**3D PCB** の**アプリケーション** バーに **[未更新]** ![未更新のアイコン](../images/icon/common/component-parent-out-of-date.png) アイコンが表示されます。 

- **アプリケーション** バーで、 **[未更新]** ![未更新のアイコン](../images/icon/common/component-parent-out-of-date.png) アイコンをクリックします。

- **2D PCB** に基づいて新しく生成された **3D PCB** を確認します。

> **Note:** 
注:

 3D PCB ドキュメントを保存すると、参照されている**アセンブリ** デザインの**アプリケーション** バーに **[未更新]** ![未更新のアイコン](../images/icon/common/component-parent-out-of-date.png) アイコンが表示されます。

## 2D PCB に同期する

3D PCB によって参照される **3D PCB** または**アセンブリ**に変更を加えた場合、2D PCB の**アプリケーション** バーに **[未更新]** ![未更新のアイコン](../images/icon/common/component-parent-out-of-date.png) アイコンが表示されます。

- **アプリケーション** バーで、 **[未更新]** ![未更新のアイコン](../images/icon/common/component-parent-out-of-date.png) アイコンをクリックします。

- 3D ボード上で移動したコンポーネントの新しい位置と、ボードのアウトラインに加えられた変更を確認します。

## アセンブリ デザインに同期する

**アセンブリ**によって参照される **3D PCB** に変更を加え、*電子デザインを保存*した場合、**アセンブリ** デザインの**アプリケーション** バーに **[未更新]** ![未更新のアイコン](../images/icon/common/component-parent-out-of-date.png) アイコンが表示されます。

- **アセンブリ** デザインを開きます。

- **アプリケーション** バーで、 **[未更新]** ![未更新のアイコン](../images/icon/common/component-parent-out-of-date.png) アイコンをクリックします。

- **アセンブリ** デザイン内の **2D PCB** に基づいて新しく生成された **3D PCB** を確認します。

## 3D PCB 設定を変更する

3D PCB は、 **[3D PCB 設定]** に従って生成されます。これらの設定を変更するには、次のようにします。

- 3D PCB ドキュメントの **[3D PCB]** ツールバーで、 **[PCB] > [3D PCB 設定]** をクリックして、 **[3D PCB 設定]** ダイアログを開きます。

- **[3D PCB 設定]** ダイアログで、必要に応じて設定を変更します。

**プリセット**: ビュー設定を選択します。

**推奨**: パフォーマンスと詳細度のバランスが取れています。

- **最も高速**: ボードとコンポーネントを除くすべてのオブジェクトを、2D イメージを使用して表します。

- **最も詳細**: 完全な 3D ジオメトリを表示します。

- **ユーザ定義**: プリセットを手動で調整する場合に有効にします。

- **含める 3D ジオメトリ**: 3D ビューに含めるオブジェクト(はんだマスク、銅箔トレース、ビア、ポリゴンなど)を選択します。

- **コンポーネント**: コンポーネントのリストを表示し、3D モデルが関連付けられていないものを特定します。3D ビューに含めるコンポーネントを選択します。

- **オプション**

**シルクスクリーン品質**: [低] ![低品質のアイコン](../images/icon/ecd-3d-config-slkscr-low.png)、[中] ![中品質のアイコン](../images/icon/ecd-3d-config-slkscr-med.png)、または[高] ![高品質のアイコン](../images/icon/ecd-3d-config-slkscr-high.png) から選択します。

- **ボード アウトラインを置き換える**: ボードのアウトラインが 2D PCB で編集され、元のスケッチと異なる場合に有効になります。

- **[更新]** をクリックして変更を適用し、ダイアログを閉じます。

  
  
    
      
        **親ページ:** [機械アセンブリに PCB を統合する](ECD-3D-BOARD-CPT.htm)
      
  
    
  
      
        #### 関連ページ

        

          - [アセンブリ内のコンポーネントを更新する](https://beehive.autodesk.com/community/service/rest/cloudhelp/resource/cloudhelpchannel/guidcrossbook/?p=NINVFUS&l=JPN&accessmode=live&guid=ASM-UPDATE-ASSEMBLY)

          - [機械設計から PCB を作成する](https://beehive.autodesk.com/community/service/rest/cloudhelp/resource/cloudhelpchannel/guidcrossbook/?p=NINVFUS&l=JPN&accessmode=live&guid=ECD-PCB-MECH-DESIGN-CPT)

          - [3D PCB ドキュメント](https://beehive.autodesk.com/community/service/rest/cloudhelp/resource/cloudhelpchannel/guidcrossbook/?p=NINVFUS&l=JPN&accessmode=live&guid=ECD-EDIT-3D-CPT)