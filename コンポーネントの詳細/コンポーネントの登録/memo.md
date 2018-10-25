# コンポーネントの登録

## コンポーネント名
* コンポーネント登録時は、必ず名前を与える
    * `Vue.component`の第一引数
* 命名は**コンポーネントをどこで使うか**に左右される
    * DOM上で普通に使う場合はW3Cに従ったケバブケースで行きましょう
    * すべて小文字でハイフンが含まれていることが「カスタムタグ命名の」条件

### 命名のケース
* ケバブケースで定義した場合はケバブケースで呼び出さなくてはいけない
* パスカルケースで定義した場合は、両方どちらでも読み出せる

## グローバル登録
* ベタにVueコンポーネントを定義すると、すべてのVueインスタンス内で使用できる
* 当然、すべてのサブコンポーネント内でも使用可能

## ローカル登録
* グローバル登録はあまり理想的ではない
    * ビルドした場合に余分なコードが含まれてしまう
* ローカル登録が可能
    * componentメソッドを使った場合の第二引数をJSオブジェクトとして定義
    * コンポーネントを使いたいインスタンスのcomponentオプションに登録
        * このとき名付けを行える
* ローカル登録したコンポーネントは、他のサブコンポーネント内では使用できない
* コンポーネントオプション内に直接変数を配置することもできる
    * これはES6の機能
    * つまり、`components: { ComponentA }` ＝ `components: { 'ComponentA': ComponentA }`

## モジュールシステム
* `import/require`を用いたモジュールシステムを使う

### モジュールシステム内のローカル登録
* それぞれのコンポーネントをファイルとして登録するcomponentsディレクトリを作ろう
* importを個別ファイルに作ると、別のコンポーネントをそのファイルで定義しているコンポーネントで使うことができる

### 基底コンポーネントの自動グローバル登録
* コンポーネントの多くは、inputやbuttonをラップした部品
    * コンポーネントツリーの枝
    * こういうコンポーネントを基底コンポーネントと呼ぶ
* テンプレートではこれらの基底コンポーネントのマークアップをサポートする
* Webpackを使用した場合、汎用コンポーネントは`require.context`に登録できる
* グローバル登録はルートVueインスタンスより前に行うこと
* 以下、すべて基底コンポーネントをグローバルにインポートするコード

```JavaScript
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
    // コンポーネントフォルダの相対パス
    './components',
    // サブフォルダ内を調べるかどうか
    false, 
    // 基底コンポーネントのファイル名に一致させる正規表現
    /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
    // コンポーネント設定を取得
    const componentConfig = requireComponent(fileName)

    // コンポーネントをパスカルケースで登録
    const componentName = upperFirst(
        camelCase(
            // 先頭の./と拡張子をファイル名から除去
            fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
        )
    )

    // コンポーネントをグローバル登録
    Vue.component(
        componentName, 
        // `export default`を使ってコンポーネントがエクスポートされた場合に存在するメソッド
        // `.default`でコンポーネントオプションを探す
        // 存在しない場合はモジュールのルートにフォールバック
        componentConfig.default || componentConfig
    )
})


```




