# オートルータのステータス情報

# オートルータのステータス情報

## ステータス表示

[ルーティング バリアント]ダイアログに、計算されているバリアントとその進行状況が表示されます。

![オートルータ](../images/autorouter/autor-variants.png)

**ルート:** % 表示(従来は最大かつ最適なデータ)

**ビア:** レイアウト内のビアの数

## ログ ファイル

オートルータによって、配線パスごとに *name.pro* という名前のファイルが生成されます。これには、有益な情報が含まれています。例:

Electronics AutoRouter Statistics:
Job : d:/Electronics4/test-design/democpu.brd
Start at : 15.43.18 (24.07.2000)
End at : 16.17.08 (24.07.2000)
Elapsed time : 00.33.48
Signals : 84 RoutingGrid: 10 mil Layers: 4
Connections : 238 predefined: 0 ( 0 Vias )
Router memory : 1121760
Passname: Busses Route  Optimize1 Optimize2 Optimize3 Optimize4
Time per pass: 00.00.21 00.08.44 00.06.32 00.06.15 00.06.01 00.05.55
Numoer of Ripups:  0  32  0  0  0  0
max. Level:  0  1  0  0  0 0
max. Total:  0  31  0  0  0  0
Routed:    16  238  238  238  238  238
Vias:    0   338   178   140  134  128
Resolution: 6.7 %  100.0 %  100.0 %  100.0 %  100.0 %  100.0 %
Final: 100.0 % finished

  
  
    
      
        **親ページ:** [オートルータを使用する](ECD-AUTOROUTER-CPT.htm)