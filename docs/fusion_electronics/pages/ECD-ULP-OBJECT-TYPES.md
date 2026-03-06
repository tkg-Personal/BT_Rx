# オブジェクト タイプ

# オブジェクト タイプ

EAGLE データ構造は XML ファイルに保存されます。

- ライブラリ(*.lbr)

- 回路図(*.sch)

- 基板(*.brd)

これらのデータ ファイルには、オブジェクトの階層が含まれています。ユーザ言語プログラムでは、それぞれの組み込みアクセス文を使用してこれらの階層にアクセスできます。

library(L) { ... }
schematic(S) { ... }
board(B) { ... }これらのアクセス文は、ライブラリ、回路図、または基板に含まれるすべてのオブジェクトにアクセスできるコンテキストを設定します。

これらのオブジェクトのプロパティには、メンバを使用してアクセスできます。メンバには次の 2 種類があります。

- データ メンバー

- ループ メンバ

データ メンバは、オブジェクトから要求されたデータを即座に返します。例:

board(B) {
  printf("%s\n", B.name);
  }board オブジェクト B のメンバ name は、基板の名前を返します。データ メンバは、次のように、他のオブジェクトを返すこともできます。

board(B) {
  printf("%f\n", B.grid.size);
  }ここで、board の grid データ メンバーは grid オブジェクトを返し、grid オブジェクトの size データ メンバーはグリッドのサイズを返します。

**ループ メンバー**は、上位オブジェクトに含まれている同じ種類の複数のオブジェクトにアクセスするために使用されます。

board(B) {
  B.elements(E) {
    printf("%-8s %-8s\n", E.name, E.value);
    }
  }この例では、board の *elements()* ループ メンバー関数を使用して、board のすべての要素のループを設定します。B.elements(E) 文に続くブロックは要素ごとに順番に実行され、現在の要素はブロック内で名前 E を使用して参照できます。

ループ メンバは、英数字順にオブジェクトを処理します(名前を持っている場合)。

ループ メンバ関数は、要求されたオブジェクトを保持するために必要なタイプの変数を作成します。このような変数には任意の有効な名前を使用できます。したがって、上記の例は次のようにも記述できます。

board(MyBoard) {
  MyBoard.elements(TheCurrentElement) {
    printf("%-8s %-8s\n", TheCurrentElement.name, TheCurrentElement.value);
    }
  }これは、正確に同じことを実行します。ループ メンバ関数によって作成される変数のスコープは、ループ関数呼び出しの直後の文(またはブロック)に制限されます。

## ライブラリのオブジェクト階層

LIBRARY
  GRID
  LAYER
  DEVICESET
    DEVICE
    GATE
  FOOTPRINT
    CONTACT
      PAD
      SMD
    CIRCLE
    HOLE
    RECTANGLE
    FRAME
    DIMENSION
    TEXT
    WIRE
    POLYSHAPE
      WIRE
    POLYCUTOUT
      WIRE
  PACKAGE3D
  SYMBOL
    PIN
    CIRCLE
    RECTANGLE
    FRAME
    DIMENSION
    TEXT
    WIRE
    POLYSHAPE
      WIRE## 回路図のオブジェクト階層

SCHEMATIC
  GRID
  LAYER
  LIBRARY
  ATTRIBUTE
  VARIANTDEF
  COMPONENT
    ATTRIBUTE
    VARIANT
  SHEET
    CIRCLE
    RECTANGLE
    FRAME
    DIMENSION
    TEXT
    WIRE
    POLYSHAPE
      WIRE
    INSTANCE
      ATTRIBUTE
    MODULEINST
    BUS
      SEGMENT
        LABEL
          TEXT
          WIRE
        WIRE
    NET
      SEGMENT
        JUNCTION
        PINREF
        PORTREF
        TEXT
        WIRE
  MODULE
    PORT
    COMPONENT
    SHEET
      (same as above)## 基板のオブジェクト階層

BOARD
  GRID
  LAYER
  LIBRARY
  ATTRIBUTE
  VARIANTDEF
  CIRCLE
  HOLE
  RECTANGLE
  FRAME
  DIMENSION
  TEXT
  WIRE
  POLYSHAPE
    WIRE
  POLYCUTOUT
    WIRE
  ELEMENT
    ATTRIBUTE
    VARIANT
  SIGNAL
    CONTACTREF
    POLYPOUR
      WIRE
    VIA
    WIRE
  
      
        **このセクションのページ**
        

          - [UL_ARC](ECD-ULP-ARC.htm)
          

          - [UL_AREA](ECD-ULP-AREA.htm)
          

          - [UL_ATTRIBUTE](ECD-ULP-ATTRIBUTE.htm)
          

          - [UL_BOARD](ECD-ULP-BOARD.htm)
          

          - [UL_BUS](ECD-ULP-BUS.htm)
          

          - [UL_CIRCLE](ECD-ULP-CIRCLE.htm)
          

          - [UL_CLASS](ECD-ULP-CLASS.htm)
          

          - [UL_CONTACT](ECD-ULP-CONTACT.htm)
          

          - [UL_CONTACTREF](ECD-ULP-CONTACTREF.htm)
          

          - [UL_DEVICE](ECD-ULP-DEVICE.htm)
          

          - [UL_DEVICESET](ECD-ULP-DEVICESET.htm)
          

          - [UL_DIMENSION](ECD-ULP-DIMENSION.htm)
          

          - [UL_ELEMENT](ECD-ULP-ELEMENT.htm)
          

          - [UL_ERROR](ECD-ULP-ERROR.htm)
          

          - [UL_FOOTPRINT](ECD-ULP-FOOTPRINT.htm)
          

          - [UL_FRAME](ECD-ULP-FRAME.htm)
          

          - [UL_GATE](ECD-ULP-GATE.htm)
          

          - [UL_GRID](ECD-ULP-GRID.htm)
          

          - [UL_HOLE](ECD-ULP-HOLE.htm)
          

          - [UL_INSTANCE](ECD-ULP-INSTANCE.htm)
          

          - [UL_JUNCTION](ECD-ULP-JUNCTION.htm)
          

          - [UL_LABEL](ECD-ULP-LABEL.htm)
          

          - [UL_LAYER](ECD-ULP-LAYER.htm)
          

          - [UL_LIBRARY](ECD-ULP-LIBRARY.htm)
          

          - [UL_MODULE](ECD-ULP-MODULE.htm)
          

          - [UL_MODULEINST](ECD-ULP-MODULEINST.htm)
          

          - [UL_NET](ECD-ULP-NET.htm)
          

          - [UL_PACKAGE3D](ECD-ULP-PACKAGE3D.htm)
          

          - [UL_PAD](ECD-ULP-PAD.htm)
          

          - [UL_PART](ECD-ULP-PART.htm)
          

          - [UL_PIN](ECD-ULP-PIN.htm)
          

          - [UL_PINREF](ECD-ULP-PINREF.htm)
          

          - [UL_POLYCUTOUT](ECD-ULP-POLYCUTOUT.htm)
          

          - [UL_POLYPOUR](ECD-ULP-POLYPOUR.htm)
          

          - [UL_POLYSHAPE](ECD-ULP-POLYSHAPE.htm)
          

          - [UL_PORT](ECD-ULP-PORT.htm)
          

          - [UL_PORTREF](ECD-ULP-PORTREF.htm)
          

          - [UL_RECTANGLE](ECD-ULP-RECTANGLE.htm)
          

          - [UL_SCHEMATIC](ECD-ULP-SCHEMATIC.htm)
          

          - [UL_SEGMENT](ECD-ULP-SEGMENT.htm)
          

          - [UL_SHEET](ECD-ULP-SHEET.htm)
          

          - [UL_SIGNAL](ECD-ULP-SIGNAL.htm)
          

          - [UL_SMD](ECD-ULP-SMD.htm)
          

          - [UL_SYMBOL](ECD-ULP-SYMBOL.htm)
          

          - [UL_TEXT](ECD-ULP-TEXT.htm)
          

          - [UL_VARIANT](ECD-ULP-VARIANT.htm)
          

          - [UL_VARIANTDEF](ECD-ULP-VARIANTDEF.htm)
          

          - [UL_VIA](ECD-ULP-VIA.htm)
          

          - [UL_WIRE](ECD-ULP-WIRE.htm)
          

        

      
  
    
      
        **親ページ:** [ユーザ言語プログラミング](ECD-USER-LANG-REF.htm)