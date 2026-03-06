# テキスト メニューの設定

# テキスト メニューの設定

スクリプト ファイル(menu.scr など)を使用して、独自のテキスト メニューを設定することができます。

# Command Menu Setup
#
# This is an example that shows how to set up a complex
# command menu, including submenus and command aliases.
MENU '[designlink22.png] Search and order {\
    General : Run designlink-order.ulp -general; |\
    Schematic : Run designlink-order.ulp; \
   }' \
  'Grid { \
                        Metric { \
                                        Fine : Grid mm 0.1; | \
                                        Coarse : Grid mm 1; \
                                                } | \
                        Imperial { \
                                    Fine : Grid inch 0.001; | \
                                    Coarse : Grid inch 0.1; \
                                                } | \
                        On : Grid On; | \
                        Off : Grid Off; \
                    }' \
                'Display { \
                    Top : Display None Top Pads Vias Dim; | \
                    Bottom : Display None Bot Pads Vias Dim; | \
                    Placeplan { \
                            Top : Display None SilkscreenTop Dim; | \
                            Bottom : Display None SilkscreenBottom Dim; \
                                            } \
                            }' \
'---' \
'Fit : Window Fit;' \
Add Delete Move ';' Edit Quit \
;行の末尾にバックスラッシュ \ が付いていると、コマンドは次の行に続きます。ここでは、MENU コマンドがコメントの後の最初の行から最後の行まで実行されます。

中括弧 { } 内のコマンドに別のコマンドを続ける場合は、パイプ記号 | を使用する必要があります。

MENU コマンドは、designlink22.png を使用した上の例に示すように、小さいイメージを処理することができます。既定では、イメージは eagle/bin フォルダに保存されています。イメージ名を使用したパスを使用することもできます。

  
  
    
      
        **親ページ:** [サード パーティの電子デザイン ファイル](ECAD-EAGLE-KICAD-FILES-CPT.htm)