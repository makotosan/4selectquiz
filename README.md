# 4selectquiz
四択クイズWebアプリを作ってみました

https://makotosan.github.io/4selectquiz

## なんで？
現在、キャリコンサルタント国家資格取得のために勉強しています

教科書を読んで学習するのが苦手なので、とにかく、問題をたくさん答えて、わからないものを教科書で調べるというやり方にしたいと思いました

そこで、とにかくたくさん、網羅的にクイズをやりたいのですが、巷のサービスではやりづらいので、「自分で作ってみるか」と、お盆休みなので取り組んでみました

ノーコード、ローコードなども考えましたが、「すぐ動かせられる」ことを優先にしました

それと、立ち上がりではWebサーバーも不要で、ローカルに置いたHTMLとJSファイルだけで動作するようにしました

Javascriptも基本的にはbodyタグ内に直書きですので、JSファイルはクイズデータをJSON形式で保存、読みこみするためのものです

OSのセキュリティの兼ね合いで、Webサーバーがないと.jsonは読み込めないようです

なので、.jsにしておけばローカルでも読みこめるようです

## どうやって作るのか？
コーディングは基本的にChatGPTだのみです

できるだけ、プロンプト一発で生成したいのですが、なかなか初手からバグのないコードは生成してくれません

ですが、せっかくなのでプロンプトも晒していきたいと思います

### 最初のプロンプト
最初はMicrosoft Copilotで下記のプロンプトを投げました
```
JSONとJavascriptだけで4択クイズWebアプリのコードを生成してください
JSON(quiz.js)にはつぎのクイズ項目を保存しています
ID：ユニークID
question：質問の文字列
multiselect：回答が複数選択(true)/単一選択(false)
option1text：選択肢1の文字列
option1answer：選択肢1の回答で、はい(true)/いいえ(false)
option2text：選択肢2の文字列
option2answer：選択肢2の回答で、はい(true)/いいえ(false)
option3text：選択肢3の文字列
option3answer：選択肢3の回答で、はい(true)/いいえ(false)
option4text：選択肢4の文字列
option4answer：選択肢4の回答で、はい(true)/いいえ(false)

Javascriptは次の挙動を行います
1.HTML（ibdex.html）が読み込まれたら、quiz.jsを読み込む
2.正解数(読み込み時は0を表示)/出題数(読み込み時は1を表示)を表示
3.quiz.jsのレコード1のquestionをHTMLのH1で表示
4.option1textからoption4textをmultiselectがtrueならチェックボックスで、falseならラジオボタンで表示する
5.回答ボタンを設置し、ボタンが押されたらoption1textからoption4textの選択状態と、option1answerからoption4answerの値を比較し、下記の条件で正解/不正解を判定する
　正解：すべて一致
　不正解：いずれかが不一致
6．ダイアログ(OKボタン付き)で「正解」か「不正解」を表示し、option1textからoption4textの不一致のものを赤文字に変更する
7.正解の場合は、正解数の値をプラス1する
8.Okボタンが押されたら、レコード2に対して工程3.から7.まで繰り返す
9.レコードのすべてが完了したら、ダイアログ(OKボタン付き)で、「お疲れ様です。正答率は[(正解数)/(出題数)*100、整数]％でした。」と表示する
10．Okボタンが押されたら、工程2.から繰り返す
```
#### 仕様
今更の仕様ですが、選択肢は単一選択式と複数選択式を利用できるようにしました（multiselect）

multiselectがtrueの場合はチェックボックスで表示、falseならラジオボタンにします

問題1個につき、1レコードとしました

選択肢もレコードにしようかとも考えましたが、複雑になってしまうので、「4択」という縛りとし、選択肢ごとにtextとanswerを記入するようにしました

いったん、起動したら質問が始まり、回答するとダイアログが表示され、「正解」か「不正解」かを教えてくれます

すべての問題の回答が終わるとダイアログが表示され、正答率が表示されます

### データを生成するプロンプト


```
下記の条件でクイズ15問をJSONで生成してください
クイズは、キャリアコンサルタント国家試験の学科で、カウンセリング理論に関するものです

単一選択式（"multiselect": false）と、複数選択式（"multiselect": true）の問題を混在させること
単一選択式の問題の末尾は「正しいものを一つ選択すること」、複数選択式の問題の末尾は「正しいものを一つ以上選択すること」としてください

JSONは下記の形式です
const quizData = [
  {
    "id": 1,
    "question": "ここに質問を入力",
    "multiselect": false,
    "options": [
      { "text": "選択肢1", "answer": true },
      { "text": "選択肢2", "answer": false },
      { "text": "選択肢3", "answer": false },
      { "text": "選択肢4", "answer": false }
    ]
  },
  // 他のクイズ項目...
];

```

### 今のプロンプト


```
JSONとJavascriptだけで4択クイズWebアプリのコードを生成してください
JSON(quiz.js)にはつぎのクイズ項目を保存しています
const quizData = [
  {
    "id": 1,
    "question": "ここに質問を入力",
    "multiselect": false,
    "options": [
      { "text": "選択肢1", "answer": true },
      { "text": "選択肢2", "answer": false },
      { "text": "選択肢3", "answer": false },
      { "text": "選択肢4", "answer": false }
    ]
  },
  // 他のクイズ項目...
];

Javascriptは次の挙動を行います
1.HTML（ibdex.html）が読み込まれたら、quiz.jsを読み込む
2.正解数(読み込み時は0を表示)/出題数(読み込み時は1を表示)をHTMLのH1で表示
3.quiz.jsのレコード1のquestionをHTMLのH2で表示
4.option1textからoption4textをmultiselectがfalseの場合はラジオボタンで、multiselectがtrueの場合はチェックボックスで表示する
5.
6.回答ボタンを設置し、ボタンが押されたらoption1textからoption4textの選択状態と、option1answerからoption4answerの値を比較し、下記の条件で正解/不正解を判定する。不正解の場合、比較して不一致の項目については、option?answerがtrueの項目を緑文字に、option?answerがfalseの項目を赤文字にする
　正解：すべて一致
　不正解：いずれかが不一致
7.正解の場合は、正解数の値をプラス1して、回答ボタンを「正解：次へ」ボタンに置き換える
8.不正解の場合は、回答ボタンを「不正解：次へ」に置き換える
9.「正解：次へ」ボタンもしくは、「不正解：次へ」ボタンが押されたら、レコード2に対して工程3.から繰り返す
10.レコードのすべてが完了したら、ダイアログ(OKボタン付き)で、「お疲れ様です。正答率は[(正解数)/(出題数)*100、整数]％でした。」と表示する
11．Okボタンが押されたら、工程2.から繰り返す

quiz.jsのみ別ファイルとし、ＨＴＭＬとＪａｖａｓｃｒｉｐｔは統合してください
```

#### 今の仕様

回答するたびにダイアログが表示されると面倒なので.「正解：次へ」ボタンもしくは、「不正解：次へ」ボタンを表示するようにしました

不正解のときに、何が正解だったのかがわからないので、本来の正解を緑文字に、間違って選択した項目を赤文字にしました

## 今後やりたいこと

今後、実装したい機能は下記のとおりです

- 当面のバージョン
  - 質問の順番をシャッフルさせる
  - 選択肢の順番をシャッフルさせる
  - 終了後に回答リストを表示する
- もう少し先のバージョン
  - 読み込むファイルを選択できるようにする
  - テキストフィールドを設けて、JSONを貼り付けられるようにする
- さらに先のバージョン
  - ChatGPTとAPI接続し、質問のJSONを生成できるようにする
  
