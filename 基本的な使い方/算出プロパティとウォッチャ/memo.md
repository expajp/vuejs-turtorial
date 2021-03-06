# 算出プロパティとウォッチャ

## 算出プロパティ
* 要は、**関数の戻り値として定義できるプロパティ**のこと
* メソッドとは区別される
    * 詳しくは後述

### 基本的な例
* とりあえず動かしてみるとわかる
* reversedMessageはmessageの定義に常に依存していることがわかる
    * vm.messageが変わるとreversedMessageに更新がかかる
* 依存関係は宣言的に作成されている
    * つまり、型推論が容易

### 算出プロパティ vs. メソッド
* メソッドでも同じじゃん
    * 確かに結果は同じ
* しかし、**算出プロパティはキャッシュされるので処理が軽い**という違いがある
    * もちろん、依存先が変更されたらフックされて更新処理が走る
* Date.now()を返す算出プロパティとメソッドを定義するとわかりやすい
    * 算出プロパティはデータに依存しないので、二度と更新されない
    * メソッドは常に実行されるので、呼び出すたびに値が違う

### 算出プロパティ vs. 監視プロパティ
* Vueインスタンス上のデータの更新に反応するといえば、Vueは**監視プロパティ**も提供している
* 他のデータにもとづいて変更するデータはwatchも使えるが、多くは算出プロパティのほうがよい
* 例のとおりに書いてみると、確かに動くがやっぱり冗長
    * 依存関係のある値が1つしかない場合は使えるが、それでも静的プロパティとして定義しなくてはならない点が冗長

### 算出Setter関数
* 算出プロパティは通常getterとして使うが、setterとしても使うことができる
    * どういうことかというと、**算出プロパティを呼ぶことで静的プロパティを更新できる**

## ウォッチャ
* 上で触れたようにあるプロパティの変更をトリガーに変わる値を扱う場合については**算出プロパティを使うべき**
* ウォッチャは**プロパティの変更をトリガーに行う処理**に対して使う
* 例では、watchオプションを利用することで、算出プロパティではできない以下を行っている
    * 非同期処理の実行
    * 処理終了まで中間の状態にしておく
* vm.$watch APIを使うこともできる
