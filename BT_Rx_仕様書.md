# BT Audio Rx — Bluetooth オーディオレシーバー PCB 仕様書 v5

## 概要

Bluetoothで音楽を受信し、3.5mmイヤホンジャックからステレオ出力するポータブルデバイス。LiPoバッテリー駆動、USB-C充電。BM83モジュールの内蔵PMU（充電器+レギュレータ）を最大限活用し、最小部品数で1枚のPCBに実装する。

---

## ブロック図

```
USB-C (5V) ─── R1,R2(CC) ──→ BM83:ADAP_IN (pin 22)
               D1(TVS)              │
                              BM83 内蔵充電器 (max 350mA)
                                    │
                              BM83:BAT_IN (pin 23) ←──→ LiPo Battery (JST PH, J3)
                                    │
                              BM83 内蔵PMU + BT5.0 SoC
                              ┌─────┼─────┐
                           AOHPL        AOHPR
                           (pin8)       (pin6)
                              │           │
                           R3(0Ω)     R4(0Ω)      ← 直列抵抗 (必要時フェライトビードに差替)
                              │           │
                           C6(100µF)   C7(100µF)   ← DCブロッキング (Single-endedモード)
                              │           │
                           J2:Tip(L)   J2:Ring(R)
                              │           │
                           D3(DNP)     D4(DNP)    ← ESD保護 (PESD5V0S1BA, Tip/Ring→GND)
                                    │
                              J2:Sleeve → GND

                              BM83:SYS_PWR (pin 24)
                              ├── LED1 (青) → LED1 pin (pin 32)
                              └── LED2 (赤) → LED2 pin (pin 34)

                              BM83:MFB (pin 26) ← SW1 (タクトスイッチ) → GND
```

---

## 設計根拠

### BM83内蔵PMU採用の理由
- BM83はBAT_IN (3.2V-4.2V) にLiPoを直結する設計（データシート Section 5.1, Figure 5-2）
- ADAP_INに5Vを入れると内蔵充電器が動作（max 350mA, Config Toolで設定可能）
- 内蔵バックレギュレータ (1.5V, 1.8V) + LDO (3.0V) で全内部電源を生成
- **外部充電IC (MCP73831)、外部LDO (AP2112K)、バッテリー保護IC (DW01A+FS8205A) は全て不要**

### Single-endedオーディオ出力の理由（v2からの変更）
- v2ではCaplessモード（Sleeve=AOHPM）を採用していたが、**外部機器（カーステレオ、PCのAUX IN等）接続時にSleeveがGNDと短絡し、BM83内部アンプが破損するリスクがある**
- **Single-endedモードに変更**: AOHPL/AOHPRにDCブロッキングコンデンサ (100µF) を直列に配置し、Sleeve=GNDとする
- これにより任意の外部機器に安全に接続可能（データシート Section 3.4, Figure 3-31）
- AOHPMは未接続（フローティング）

---

## 主要部品リスト (BOM)

### IC・モジュール

| Ref | 部品名 | パッケージ | 説明 | データシート参照 |
|-----|--------|-----------|------|----------------|
| U1 | **BM83SM1** | モジュール (32×15mm) | BT5.0 A2DP + 内蔵充電器 + PMU。技適取得済み | DS70005402B |

### コネクタ・スイッチ

| Ref | 部品名 | パッケージ | 説明 |
|-----|--------|-----------|------|
| J1 | **12401610E4#2A** (Amphenol USB-C) | SMD 24pin | 5V電源入力 (充電用)。データ線不使用。LCSC: C5119948 |
| J2 | **35RASMT4BHNTRX** | SMD | 3.5mm TRS ステレオジャック |
| J3 (JP1) | **S2B-PH-SM4-TB(LF)(SN)** | SMD | JST PH 2pin バッテリーコネクタ (2.0mmピッチ)。LCSC: C295747 |
| J4 (JP2) | **ピンヘッダ 1×6** | 2.54mm スルーホール | UART + デバッグ用 (TXD/RXD/GND/BAT_IN/P3_4/RST_N) |
| SW1 | **B3U-1100P-B** (Omron) | SMD | MFBボタン (電源ON/OFF + ペアリング)。LCSC: C4364316 |

### LED

| Ref | 部品名 | パッケージ | 説明 |
|-----|--------|-----------|------|
| LED1 | **KT-0603B** LED 青 | 0603 | BT接続ステータス (BM83内蔵LEDドライバで駆動)。LCSC: C2288 |
| LED2 | LED 赤 | 0603 | 充電ステータス (BM83内蔵LEDドライバで駆動)。LCSC: C2286 |

### 保護素子

| Ref | 部品名 | パッケージ | 用途 |
|-----|--------|-----------|------|
| D1 | **PESD5V0S1BA** | SOD-323 | USB-C VBUS ESD/サージ保護。LCSC: C19224 |
| D2 | **PESD5V0S1BA** | SOD-323 | MFBボタン ESD保護。LCSC: C19224 |
| D3 | **PESD5V0S1BA** | SOD-323 | オーディオ Lch (Tip) ESD保護 **（DNP）**。LCSC: C19224 |
| D4 | **PESD5V0S1BA** | SOD-323 | オーディオ Rch (Ring) ESD保護 **（DNP）**。LCSC: C19224 |

### 受動部品

| Ref | 値 | パッケージ | 用途 |
|-----|-----|-----------|------|
| R1 | 5.1kΩ | 0603 | USB-C CC1プルダウン (UFP認識)。LCSC: C23186 |
| R2 | 5.1kΩ | 0603 | USB-C CC2プルダウン (UFP認識)。LCSC: C23186 |
| C1 | 0.1µF 16V | 0402 | BM83 デカップリング (BAT_IN近傍)。LCSC: C1525 |
| C2 | 0.1µF 16V | 0402 | BM83 デカップリング (ADAP_IN近傍)。LCSC: C1525 |
| C3 | 15pF 50V | 0402 | MFBデバウンスコンデンサ (リファレンス回路準拠)。LCSC: C1548 |
| C4 | 10µF 25V | 0805 | ADAP_IN 入力バルクデカップリング。LCSC: C15850 |
| C5 | 10µF 25V | 0805 | BAT_IN バルクデカップリング。LCSC: C15850 |
| C6 | 100µF 10V | 電解 φ4×5.4mm | オーディオ Lch DCブロッキングコンデンサ（手はんだ） |
| C7 | 100µF 10V | 電解 φ4×5.4mm | オーディオ Rch DCブロッキングコンデンサ（手はんだ） |
| R3 | 0Ω | 0402 | オーディオ Lch 直列抵抗（必要時フェライトビード等に差し替え可）。LCSC: C17168 |
| R4 | 0Ω | 0402 | オーディオ Rch 直列抵抗（必要時フェライトビード等に差し替え可）。LCSC: C17168 |
| C8 | 0.1µF 16V | 0402 | RST_N ノイズフィルタ。LCSC: C1525 |

**総部品数: 24点**（うちDNP 2点: D3, D4）

---

## 回路接続詳細

### 1. USB-C 電源入力 (J1)

```
J1:VBUS ──┬──→ U1:ADAP_IN (pin 22)
           │
          D1 (PESD5V0S1BA) ──→ GND   ※ESD/サージ保護
J1:GND  ──→ GND
J1:CC1  ──→ R1 (5.1kΩ) ──→ GND   ※UFPとして認識
J1:CC2  ──→ R2 (5.1kΩ) ──→ GND
J1:D+   ──→ 未接続
J1:D-   ──→ 未接続
J1:SHIELD → GND
```

デカップリング: C4 (10µF) を ADAP_IN-GND間に配置（J1近傍）

### 2. バッテリー接続 (J3)

```
J3:pin1 (+) ──→ U1:BAT_IN (pin 23)
J3:pin2 (-) ──→ GND
```

デカップリング: C5 (10µF) を BAT_IN-GND間に配置（J3近傍）

**注意:** BM83はBAT_IN範囲 3.2V〜4.2V。LiPo (3.7V nom) を直接接続する。外部保護回路は不要（BM83内蔵PMUが電圧監視）。ただし、LiPoセル自体に保護回路内蔵のものを選定すること。

### 3. BM83 電源ピン

```
U1:BAT_IN  (pin 23) ← LiPo+ / C1, C5
U1:ADAP_IN (pin 22) ← USB VBUS / C2, C4
U1:SYS_PWR (pin 24) → LED1, LED2 のアノード側のみ接続。他は接続禁止
U1:VDD_IO  (pin 25) → 接続禁止 (内部使用)
U1:GND     (pin 16, 50) → GND
```

### 4. オーディオ出力 — Single-endedモード

```
U1:AOHPL (pin 8)  ──→ R3 (0Ω) ──→ C6 (100µF) ──→ J2:Tip    (Left)
U1:AOHPR (pin 6)  ──→ R4 (0Ω) ──→ C7 (100µF) ──→ J2:Ring   (Right)
U1:AOHPM (pin 7)  ──→ フローティング (未接続)
J2:Sleeve ──→ GND

D3 (PESD5V0S1BA, DNP): J2:Tip  ──→ GND   ※オーディオ Lch ESD保護
D4 (PESD5V0S1BA, DNP): J2:Ring ──→ GND   ※オーディオ Rch ESD保護
```

- **DCブロッキングコンデンサ (C6, C7) が必須** — Single-endedモードではAOHPL/AOHPRにDCバイアスが乗るため
- C6, C7は100µF以上推奨。低周波カットオフ: fc = 1/(2π×100µF×32Ω) ≈ 50Hz (32Ωヘッドホン時)
- R3, R4 (0Ω) はデフォルトでジャンパ。ノイズ問題発生時にフェライトビード (例: BLM15AG102SN1D) に差し替え可能
- 配線は短く、L/R対称に。オーディオトレースは他の信号と離す
- Config ToolでオーディオモードをSingle-endedに設定すること

### 5. MFBボタン (SW1)

```
U1:PWR/MFB (pin 26) ──┬──→ SW1 ──→ GND
                       │
                  C3 (15pF) → GND
                       │
                  D2 (PESD5V0S1BA) → GND   ※ESD保護
```

- MFB長押し: 電源ON/OFF
- MFB短押し: ペアリング開始 (Config Toolで動作変更可能)

### 6. LED (BM83内蔵ドライバ)

```
U1:SYS_PWR (pin 24) ──→ LED1:A (青) ──→ LED1:K ──→ U1:LED1 (pin 32)
U1:SYS_PWR (pin 24) ──→ LED2:A (赤) ──→ LED2:K ──→ U1:LED2 (pin 34)
```

- BM83内蔵LEDドライバはシンク型 (0〜5.25mA, 16段階, Table 9-6)
- LEDドライバ最大電圧: 3.6V (SYS_PWRから供給)
- 外部電流制限抵抗不要
- 点滅パターンはConfig Toolで設定

### 7. UART テストヘッダ (J4)

```
J4:pin1 ──→ U1:UART_TXD / P8_5 (pin 30)
J4:pin2 ──→ U1:UART_RXD / P8_6 (pin 29)
J4:pin3 ──→ GND
J4:pin4 ──→ BAT_IN (電源供給用)
J4:pin5 ──→ U1:P3_4 (pin 31)   ※通常時フローティング、Test Mode時のみGNDにジャンパ
J4:pin6 ──→ U1:RST_N (pin 43)  ※外部リセット用
```

- ファームウェア書き込み (Test Mode) と Config Tool 設定に使用
- Test Mode進入: J4:pin5 (P3_4) をGNDにジャンパ接続し、J4:pin6 (RST_N) をGNDに一瞬触れてリセット
- **UARTロジックレベル: VDD_IO = 3.0〜3.6V (Table 9-3)**。外部USB-UART変換器は**必ず3.3Vレベル品**を使用すること。5Vレベルの変換器はBM83のI/Oピンを破損する

### 8. リセット (RST_N)

```
U1:RST_N (pin 43) ──┬──→ J4:pin6 (外部リセットアクセス用)
                     │
                C8 (0.1µF) → GND   ※ノイズフィルタ
```

- 内部プルアップあり。通常時はHIGH
- C8でノイズ耐性を向上（ポータブル機器のため外部ノイズ対策）
- RST_N閾値: High→Low 1.25V, Low→High 1.87V (Table 9-3)
- J4:pin6経由で外部からリセット可能（GNDに一瞬接触）

### 9. 未使用ピンの処理

| ピン | 名前 | 処理 | 理由 |
|------|------|------|------|
| 1-5 | I2S (DR1,RFS1,SCLK1,DT1,MCLK1) | フローティング | 外部コーデック不使用 |
| 7 | AOHPM | フローティング | Single-endedモード使用のため |
| 9-10 | MICN2, MICP2 | フローティング | マイク不使用 |
| 11-12 | AIR, AIL | フローティング | AUX入力不使用 |
| 13-14 | MICN1, MICP1 | フローティング | マイク不使用 |
| 15 | MICBIAS | フローティング | マイク不使用 |
| 17-19 | DMIC_CLK, DMIC1_R, DMIC1_L | フローティング | デジタルマイク不使用 |
| 20 | P3_2 (AUX_IN_DET) | フローティング | AUX不使用 |
| 21 | P2_6 | フローティング | |
| 27 | SK1_AMB_DET | フローティング | サーミスタ不使用 |
| 28 | SK2_KEY_AD | フローティング | |
| 31 | P3_4 / UART_RTS | **J4:pin5に引き出し** | **通常時フローティング。LOW禁止 (Test Mode進入)。J4経由でTest Mode制御** |
| 33 | P0_2 | フローティング | ボタン不使用 |
| 35 | P0_6 | フローティング | |
| 36-37 | DM, DP | フローティング | USB不使用 |
| 38 | P0_3 | フローティング | |
| 39 | P2_7 | フローティング | |
| 40 | P0_5 | フローティング | |
| 41 | P1_6/PWM1 | フローティング | |
| 42 | P2_3 | フローティング | |
| 44 | P0_1 | フローティング | |
| 45 | P0_7 | フローティング | |
| 46 | P1_2/SCL | フローティング | I2C不使用 |
| 47 | P1_3/SDA | フローティング | I2C不使用 |
| 48 | P3_7/UART_CTS | フローティング | |
| 49 | P0_0 | フローティング | |

---

## PCB設計方針

### 基板仕様
- **サイズ目標:** 50mm × 30mm（BM83モジュール32×15mm + コネクタ + アンテナ15mmクリアランス余裕）
- **層数:** 2層 (F.Cu + B.Cu)
- **銅箔厚:** 1oz (35µm)
- **板厚:** 1.6mm
- **表面処理:** HASL or ENIG

### 部品配置ガイドライン
- **U1 (BM83):** 基板中央〜右寄り。**アンテナ部分（PCBアンテナ端）を基板右端に配置**
- **J1 (USB-C):** 基板上端
- **J2 (3.5mmジャック):** 基板下端
- **J3 (バッテリーコネクタ):** 基板左端
- **SW1 (MFBボタン):** ユーザーがアクセスしやすい位置（基板端）
- **J4 (UARTヘッダ):** 基板端（テスト時のみ使用）
- **C6, C7 (DCブロッキング):** J2とU1の間、オーディオ出力経路上に配置
- **D1 (USB ESD):** J1直近に配置
- **デカップリングコンデンサ:** 対応ピンの直近に配置

### 配線ルール
- **電源トレース幅:** 0.3mm以上 (VBUS, BAT_IN)
- **信号トレース幅:** 0.15mm以上
- **クリアランス:** 0.15mm以上
- **オーディオ配線 (AOHPL/AOHPR):** 短く、L/R対称配置、他の信号から離す
- **GNDベタ:** B.Cu全面をGNDベタで埋める。F.Cuもできる限りGNDベタ
- **ビア:** GND接続は複数ビアでインピーダンス低減

### アンテナクリアランス（データシート Section 7.2, Figure 7-4〜7-6 準拠）
- BM83のPCBアンテナ端から **最低15mm** は外部金属・銅箔・部品を配置しない
- アンテナ直下（表面・内層・裏面すべて）に銅箔を配置しない
- モジュール直下（アンテナ以外の部分）には連続GNDプレーンを配置（最低16mm×19mm）
- GNDプレーンにはビアスティッチングを分散配置
- モジュール直下のトップ層にはトレース配線を避ける
- 技適認証を維持するため、アンテナパターンは一切変更しない

---

## 発注情報

### PCB製造 + PCBA
- **業者:** JLCPCB (PCBA実装サービス利用)
- **枚数:** 5枚 (最小ロット)
- **製造ファイル:**
  - ガーバー: `20260306_v38_2026-03-17.zip`
  - BOM: `BT_Rx_BOM.csv` (LCSC品番付き)
  - CPL: `BT_Rx_CPL.csv` (部品座標・回転・レイヤー)

### PCBA実装部品 (20点)
SMD部品はJLCPCB PCBAサービスで実装。全部品LCSC在庫品。

### 手はんだ部品 (4点)
| Ref | 部品 | 理由 |
|-----|------|------|
| J2 | 35RASMT4BHNTRX (3.5mmジャック) | PCBAで非対応 |
| JP2 | ピンヘッダ 1×6 | スルーホール |
| C6 | 100µF電解コンデンサ | スルーホール |
| C7 | 100µF電解コンデンサ | スルーホール |

### 部品調達先
- **PCBA部品:** LCSC (JLCPCB連携、BOM CSVのLCSC品番で自動調達)
- **手はんだ部品:** 秋月電子 / AliExpress
- **LiPoバッテリー:** 保護回路内蔵品を選定すること

---

## 設計ツール

- **Autodesk Fusion Electronics** (回路図 + PCBレイアウト)

---

## 注意事項

1. **LiPoバッテリーは保護回路内蔵品を使用すること** — BM83は過放電保護のみ（電圧監視）で、過電流/短絡保護は限定的。セル内蔵保護回路で対応
2. **P3_4 (pin 31) を通常時LOWにしないこと** — Test Modeに入ってしまう。J4:pin5に引き出し済みだが、通常運用時はフローティング必須
3. **SYS_PWR (pin 24) にLED以外を接続しないこと** — 内部電源、外部負荷接続禁止
4. **VDD_IO (pin 25) は接続禁止** — 内部LDO出力
5. **Config Toolでの設定が必要** — LEDパターン、充電電流、オーディオモード (Single-ended)、オーディオゲイン等はUART経由で設定
6. **アンテナパターンを変更しないこと** — 技適認証維持のため
7. **UART接続時は3.3Vレベル変換器を使用** — BM83のI/OはVDD_IO (3.0-3.6V) レベル。5Vレベルは破損の原因
8. **オーディオモードをConfig ToolでSingle-endedに設定すること** — デフォルトがCaplessの場合、変更が必要

---

## 変更履歴

### v2 → v3
| 項目 | v2 | v3 | 理由 |
|------|-----|-----|------|
| オーディオモード | Capless (Sleeve=AOHPM) | Single-ended (Sleeve=GND) | 外部機器接続時のGND短絡によるBM83破損リスク回避 |
| DCブロッキングコンデンサ | なし | C6, C7 (100µF) 追加 | Single-endedモードで必須 |
| ESD保護 | なし (MFBのみオプション) | D1 (USB), D2 (MFB) 追加 | 人手が触れるコネクタの保護 |
| RST_Nコンデンサ | なし | C8 (0.1µF) 追加 | ポータブル機器のノイズ耐性向上 |
| UART電圧の注記 | なし | 3.3Vレベル必須を明記 | VDD_IO=3.0-3.6Vに合わせる必要 |
| アンテナクリアランス | 最低5mm | **最低15mm** | データシート Section 7.2 準拠 |
| 基板サイズ | 40×25mm | 50×30mm | アンテナクリアランス15mm確保 + 余裕 |
| C6/C7パッケージ | φ5×5.4mm | φ4×5.4mm | 省スペース |

### v3 → v4
| 項目 | v3 | v4 | 理由 |
|------|-----|-----|------|
| J4 (UARTヘッダ) | 1×4 (TXD/RXD/GND/BAT_IN) | **1×6** (+P3_4, +RST_N) | BM83実装後のTest Mode進入・リセットを容易にするため |
| D1 (USB VBUS ESD) | PESD5V0S1BA (DNP) | **PESD5V0S1BA (実装)** | 安価・小型で保護効果大。デフォルト実装に変更 |
| D3, D4 (オーディオESD) | なし | **PESD5V0S1BA ×2 (DNP)** | Tip/Ring-GND間にフットプリント確保。イヤホン抜き差し時のESD保護 |
| 総部品数 | 22点 | **24点** (うちDNP 2点) | D3, D4追加 |

### v4 → v5
| 項目 | v4 | v5 | 理由 |
|------|-----|-----|------|
| J1 (USB-C) | TYPE-C-31-M-12 (16pin) | **12401610E4#2A** (Amphenol, 24pin) | PCBフットプリント(24pin)に合致する在庫品に変更 |
| SW1 (ボタン) | B3U-1100P | **B3U-1100P-B** | 在庫切れ対応。同じOmron B3Uシリーズ |
| LED1 (青LED) | 汎用 | **KT-0603B** | 在庫切れ対応。0603青色LED |
| 全部品にLCSC品番追加 | なし | 全PCBA部品にLCSC品番記載 | JLCPCB PCBA発注用 |
| 発注情報 | PCBのみ | **PCBA実装サービス利用** | BOM/CPL/ガーバー出力済み |

---

## 参考資料

- `docs/datasheets/BM83_datasheet.pdf` — BM83 データシート (DS70005402B)
- `docs/datasheets/BM83_reference_circuit.pdf` — BM83 Embedded Mode リファレンス回路
- `docs/datasheets/BM83_EVB_user_guide.pdf` — BM83 EVB ユーザーガイド
- `docs/datasheets/PESD5V0S1BA_datasheet.pdf` — ESD保護ダイオード データシート
- `docs/datasheets/12401610E4_USB-C_datasheet.pdf` — Amphenol USB-C コネクタ データシート
- `docs/datasheets/35RASMT4BHNTRX_datasheet.pdf` — Switchcraft 3.5mmオーディオジャック データシート
- `docs/datasheets/B3U_tactile_switch_datasheet.pdf` — Omron B3U タクトスイッチ データシート
- `docs/datasheets/JST_PH_series_datasheet.pdf` — JST PH コネクタ データシート
- `docs/fusion_electronics/` — Fusion Electronics オフラインドキュメント (582ページ)

### 製造ファイル
- `BT_Rx_BOM.csv` — JLCPCB PCBA用 BOM (LCSC品番付き)
- `BT_Rx_CPL.csv` — JLCPCB PCBA用 部品配置リスト
- `20260306_v38_2026-03-17.zip` — ガーバーファイル
