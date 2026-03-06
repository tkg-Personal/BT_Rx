# KiCad ファイル

# KiCad ファイル

**KiCad ファイル**を Fusion にインポートすると、回路図と PCB ファイルを一緒に管理することができます。

KiCad は回路図ファイルを個別に保存し、階層構造に従います。KiCad の回路図を Fusion にインポートすると、2 つの変換オプションを使用して単一の Fusion 回路図ファイルに結合されます。

- **シート変換**(推奨): KiCad の回路図ファイルは 1 つのファイルに結合され、2D PCB の元の参照指定子の名前を維持したまま、異なるシートに変換されます。

- **モジュール変換**: KiCad の回路図ファイルは 1 つのファイルに結合され、参照指定子の名前にパスを含む異なるモジュールに変換されます。

## サポートされている KiCad ファイルのインポート タイプ

| 
**KiCad ファイル タイプ** | 
**KiCad ファイル名拡張子** | 
**Fusion Electronics ファイル タイプ** | 
**Fusion Electronics ファイル名拡張子** | 
 |

| 
プロジェクト | 
KICAD_PRO | 
電子デザイン | 
FPRJ | 
 |

| 
回路図 | 
KICAD_SCH | 
回路図 | 
FSCH | 
 |

| 
2D PCB | 
KICAD_PCB | 
2D PCB | 
FBRD | 
 |

| 
ライブラリ フットプリント | 
KICAD_MOD | 
ライブラリ | 
FLBR | 
 |

| 
ライブラリ シンボル | 
KICAD_SYM | 
 | 
 | 
 |

> **Note:** 注: Fusion は KiCad v7 以上のファイルのインポートのみをサポートしています。

## 制限事項

Fusion は KiCad ファイルからグリッド設定の基本設定をインポートしません。

  
      
        **このセクションのページ**
        

          - [KiCAD ファイルをインポートする](ECD-KICAD-IMPORTER-DO.htm)
          

        

      
  
    
      
        **親ページ:** [サード パーティの電子デザイン ファイル](ECAD-EAGLE-KICAD-FILES-CPT.htm)