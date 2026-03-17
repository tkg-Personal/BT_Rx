# BT Audio Rx

Bluetoothで音楽を受信し、3.5mmステレオジャックから出力するポータブルオーディオレシーバー。

## 特徴

- **BM83SM1モジュール** — Bluetooth 5.0 A2DP対応、技適取得済み
- **内蔵PMU** — 外部充電IC/LDO不要、BM83の内蔵充電器+レギュレータで完結
- **USB-C充電** — 5V入力、最大350mA充電
- **LiPoバッテリー駆動** — 3.7V、JST PHコネクタ
- **最小部品数** — 24点（DNP含む）
- **基板サイズ** — 50mm × 30mm、2層

## スペック

| 項目 | 値 |
|------|-----|
| Bluetooth | 5.0 (A2DP Sink) |
| オーディオ出力 | 3.5mm TRS ステレオ (Single-ended) |
| 電源入力 | USB-C 5V |
| バッテリー | LiPo 3.7V (保護回路内蔵品) |
| 充電電流 | 最大350mA (Config Toolで設定) |
| 基板サイズ | 50 × 30 mm |
| 層数 | 2層 (1.6mm, 1oz) |

## ディレクトリ構成

```
BT_Rx/
├── README.md                          ← 本ファイル
├── BT_Rx_仕様書.md                    ← 回路仕様・BOM・PCB設計方針 (v5)
├── 実装方法.md                        ← 実装〜テスト手順 (PCBA対応)
├── 日記.md                            ← 設計日記・作業ログ
├── BT_Rx_BOM.csv                      ← JLCPCB PCBA用 BOM (LCSC品番付き)
├── BT_Rx_CPL.csv                      ← JLCPCB PCBA用 部品配置リスト
├── 20260306_v38_2026-03-17.zip        ← ガーバーファイル
├── external/                          ← カスタムライブラリ (.lbr)
│   ├── BM83SM1-00AA.lbr
│   ├── EEUFC1V101.lbr
│   └── PESD5V0S1BA.lbr
├── docs/
│   ├── datasheets/                    ← 部品データシート (PDF)
│   │   ├── BM83_datasheet.pdf
│   │   ├── BM83_EVB_user_guide.pdf
│   │   ├── BM83_reference_circuit.pdf
│   │   ├── PESD5V0S1BA_datasheet.pdf
│   │   ├── B3U_tactile_switch_datasheet.pdf
│   │   └── JST_PH_series_datasheet.pdf
│   └── fusion_electronics/            ← Fusion Electronics オフラインヘルプ
│       ├── INDEX.md
│       └── pages/
└── pics/                              ← 画像
```

## 必要な環境

- **Autodesk Fusion 360** (Electronics ワークスペース) — 回路図・PCBレイアウト
- **Microchip BM83 Config Tool** — Bluetooth設定・ファームウェア管理
- **USB-UART変換アダプタ (3.3Vレベル)** — Config Tool接続用

## クイックスタート

1. `BT_Rx_仕様書.md` で回路構成・BOMを確認
2. `実装方法.md` の手順に従ってFusion ElectronicsでPCB設計
3. JLCPCBでPCB発注（PCBA実装サービスも利用可）
4. 部品実装 → UART経由でConfig Tool設定 → テスト

## ドキュメント

| ファイル | 内容 |
|---------|------|
| [BT_Rx_仕様書.md](BT_Rx_仕様書.md) | 回路仕様、BOM、PCB設計方針、設計根拠 |
| [実装方法.md](実装方法.md) | 部品調達、PCB設計手順、JLCPCB発注、はんだ付け、テスト |
| [docs/datasheets/](docs/datasheets/) | 全部品のデータシート |
| [docs/fusion_electronics/INDEX.md](docs/fusion_electronics/INDEX.md) | Fusion Electronics ヘルプドキュメント目次 |

## ライセンス

個人プロジェクト。
