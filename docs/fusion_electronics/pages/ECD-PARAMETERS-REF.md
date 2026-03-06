# オートルータ コントロール ファイル(.ctl)のパラメータ

# オートルータ コントロール ファイル(.ctl)のパラメータ

| 
パラメータ | 
既定 | 
意味 | 
 |

| 
RoutingGrid | 
50 mil | 
オートルータがトラックとビア ホールのために使用するグリッド | 
 |

| 
コスト要因 | 
 | 
 | 
 |

| 
cfVia | 
8 | 
Vias | 
 |

| 
cfNonPref | 
5 | 
優先方向を使用しない | 
 |

| 
cfChangeDir | 
2 | 
方向を変える | 
 |

| 
cfOrthStep | 
2 | 
0 度または 90 度Step | 
 |

| 
cfDiagStep | 
3 | 
45 度または 135 度Step | 
 |

| 
cfExtdStep | 
30 | 
優先方向に対して偏差 45 度 | 
 |

| 
cfBonusStep | 
1 | 
ボーナス領域へのステップ イン | 
 |

| 
cfMalusStep | 
1 | 
ハンディキャップ領域へのステップ イン | 
 |

| 
cfPadImpact | 
4 | 
周囲の領域へのパッドの影響 | 
 |

| 
cfSmdImpact | 
4 | 
周囲の領域への SMD の影響 | 
 |

| 
cfBusImpact | 
4 | 
理想的なバス方向を離れる | 
 |

| 
cfHugging | 
3 | 
ワイヤに沿って進む | 
 |

| 
cfAvoid | 
4 | 
リップアップ中に以前使用していた領域 | 
 |

| 
cfPolygon | 
10 | 
ポリゴンを回避する | 
 |

| 
cfBase.1 | 
0 | 
指定した画層へのステップ インにかかる基本コスト | 
 |

| 
cfBase.2 | 
1 | 
 | 
 |

| 
cfBase.15 | 
1 | 
 | 
 |

| 
cfBase.16 | 
0 | 
 | 
 |

| 
最大数 | 
 | 
 | 
 |

| 
mnVias | 
20 | 
接続あたりのビア | 
 |

| 
mnSegments | 
9999 | 
接続あたりのワイヤ セグメント | 
 |

| 
mnExtdSteps | 
9999 | 
優先方向に対してピッチ 45度 | 
 |

| 
mnRipupLevel | 
100 | 
接続あたりのリップアップ | 
 |

| 
mnRipupSteps | 
300 | 
接続あたりのリップアップ シーケンス | 
 |

| 
mnRipupTotal | 
200 | 
同時にリップアップ | 
 |

| 
対象のトラック パラメータ | 
 | 
 | 
 |

| 
tpViaShape | 
円形 | 
ビア形状(円形または八角形) | 
 |

| 
PrefDir.1 | 
 | 
 | 
 |

| 
PrefDir.2 | 
0 | 
記号: 0 - / ` | 
 |

| 
 | 
 | 
0: 配線に使用されないレイヤー | 
 |

| 
PrefDir.15 | 
0 | 
*: 優先方向なし | 
 |

| 
PrefDir.16 | 
- | 
- : X が優先方向 | 
 |

| 
 | 
 | 
 | 
 |

| 
 | 
 | 
/ : 45 度が優先方向 | 
 |

| 
 | 
 | 
\ : 135 度が優先方向 | 
 |

  
  
    
      
        **親ページ:** [オートルータを使用する](ECD-AUTOROUTER-CPT.htm)