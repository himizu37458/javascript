
// window.alert("hello world");



// html状には影響しないconsole内にのみ表示、デバックや共有メッセージに使われる
// console.log("ここまで進みました");




// 変数の宣言(var)、代入
// var msg;  
// msg = "Hello World";
// var msg2 = "hello world2!";
// var x = 1, y = 2, z = 3;
// console.log(msg);
// console.log(msg2);
// console.log(x + y +z);




// 型
// 　基本型（数値、文字列、論理値[true/false]）
// 　オブジェクト型（配列、関数、特殊[null:値が存在しない、undefined:値が定義されていない]）




// 配列
// 　配列：値を順序づけてグループ化したもの
// 　要素：個々の値
// 　インデックス：各要素に割り当てられた番号
// var family = ["Taro", "Jiro", "Sabro"];
// console.log(family);

// インデックスの指定
// console.log(family[1]);

// 配列への値の代入
// family[2] = "Hanako";
// console.log(family);

// 配列のもつプロパティ
// 　長さを取得するプロパティ：length
// console.log(family.length);




// 文字列
// var s = "I'm happy";
// console.log(s);

// 特殊文字 エスケープシーケンス
// 　改行: \n
// 　タブ: \t
// 　シングルクオーテーション: \'
// console.log('I\'m happy\nYou are happy too');

// 文字列操作
// 　連結
// var v = "I'm" + " " + "happy";
// console.log(v);
// 文字数の取得
// console.log(v.length);




// 数値
// 　整数と浮動小数点（eー数値で何乗を指定できる）
// 3.02 * 10^5 -> 3.03e5

// 演算子
// 　算術演算子
// console.log(5 % 2);
// 単項算術演算子（++:インクリメント、--:デクリメント)
// var a = 5;
// console.log(++a);
// console.log(--a);
// 代入演算子（下の式はa = a + 5と同値）
// a += 5;
// console.log(a);




// if文
// var money = 1000;
// if (money >5000 ) {
//   console.log("お金持ち");
// } else if (money >3000) {
//   console.log("普通");
// } else {
//   console.log("貧乏");
// }
// 等値演算子、不等演算子
// === (厳密に等しい), ==(これでもいいが緩いため===を使用するようにする)
// !==, !=





// 3項演算子（if文を一つの式で表す方法）
// 条件式 ? 式1 : 式2;　が下のif文と同じ
// if (条件式) {
//   式1;
// } else {
//   式2;
// }
// var money = 10000;
// money > 5000 ? console.log("お金持ち") : console.log("貧乏");






// switch文
// 用途（なぜif文ではなくswitch文にする必要があるのか）
// 　ある式や値が、複数の値をとりうる
// 　それぞれの値に応じて処理を変えたい

// 構文
// switch (式) {
//   case 値1:
//     式の結果が値1 に等しい場合に実行する処理
//     break;
//   case 値2:
//     式の結果が値2 に等しい場合に実行する処理
//     break;
//   default:
//     式の結果がどれにも該当しない場合に実行する処理
//     break;
// }

// var member = "Hanako";
// switch (member) {
//   case "Taro":
//     console.log("Taro is my family");
//     break;
//   case "Jiro":
//     console.log("Jiro is my family");
//     break;
//   case "Hanako":
//     console.log("Hanako is my family");
//     break;
//   default:
//     console.log(member + " is not my family");
//     break;
// }

// 上のswitch文をif分にすると
// var member = "Hanako";
// if (member === "Taro") {
//   console.log("Taro is my family");
// } else if (member === "Jiro") {
//   console.log("Jiro is my family");
// } else if (member === "Hanako") {
//   console.log("Hanako is my family");
// } else {
//   console.log(member + " is not mt family");
// }







// 繰り返し処理
// while文とdowhile文（処理、評価をする順番が違う）
// （下のcountが10以上のとき、while文だと条件式の部分ではずれるため何も処理されない）
// 構文
// while (条件式) {
//   繰り返し処理
// }
// var count = 20;
// while (count < 10) {
//   console.log(count);
//   count++;
// }
// do {
//   繰り返し処理
// } while (条件式);
// do {
//   console.log(count);
//   count++;
// } while (count < 10);






// for文
// for (初期化; テスト; 更新) {
//   繰り返し処理
// }
// var list = ["Taro", "Jiro", "Hanako"];
// for (var i = 0; i < list.length; i++) {
//   console.log(list[i]);
// }





// ジャンプ文
// 　break:繰り返し処理を直ちに終了する
// for (var i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i * 10);
// }
// 　continue:実行中の繰り返し処理を中断し、次の繰り返し処理に進む
// for (var i = 0; i < 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i * 10);
// }






// 関数
// 複数の処理をまとめて定義し、再利用できるようにしたもの
// function 関数名(引数1, 引数2, )  {
//   処理
//   return 戻り値;
// }
// function judge(money) {
//   if (money > 5000) {
//     console.log("お金持ち");
//   } else if (money > 3000) {
//     console.log("普通");
//   } else {
//     console.log("貧乏");
//   }
// }
// var money = 10000;
// judge(money);
// money = 4000;
// judge(money);
// money = 1000;
// judge(money);

// consoleではなく文字列を返したい場合
// function judge(money) {
//   var result; //ローカル変数
//   if (money > 5000) {
//     result = "お金持ち";
//   } else if (money > 3000) {
//     result = "普通";
//   } else {
//     result = "貧乏";
//   }
//   return result;
// }
// var money = 10000;
// var res = judge(money);
// console.log(res);
// var money = 4000;
// var res = judge(money);
// console.log(res);
// var money = 1000;
// var res = judge(money);
// console.log(res);

// ローカル変数
// 　関数内で定義されている変数　（上で言うvar resultの変数のこと）
// 　関数内でのみ有効
// 　関数の外からアクセスできない





// 無名関数
// function (引数) {
//   処理
// }

// メリット
// // 1.　変数に関数定義を格納できる（その場合引数をそのまま割り当てられる）
// var sum = function (a, b) {
//   var result = a + b;
//   return result;
// }
// var res = sum(1, 2);
// console.log(res);

// 2.　即時実行できる（一箇所しか使わないような関数の場合、便利）
// var res = (function (a, b) {
//   var result = a + b;
//   return result;
// })(3, 4); 関数自体を()でくくり、その後引数を渡してすぐに実行
// console.log(res);






// タイマー処理　ミリ秒ごと
// setInterval(func, delay[, param1, ])　一定時間ごとに処理を繰り返す
// 違いは処理の開始から一定時間!（処理と一定時間によっては予期しない動きになってしまう。。）
// var count = 0;
// var countup = function() {
//   console.log(count++);
// }

// var id = setInterval(function() {
//   countup();
//   if (count > 5) {
//     clearInterval(id);
//   }
// }, 1000);

// 処理を止める際は、clearInterval(該当する関数、変数を指定)を使用
// setTimeout(func, delay[, param1, ])　一定時間後に処理を行う=処理は一回しか実行されない
// 違いは処理をしてから一定時間！（処理してから一定時間のため確実にできる！setTimeoutの方がいい）
// var count = 0;
// var countup = function() {
//   console.log(count++);
//   var id = setTimeout(countup, 1000);
//   if (count > 5) {
//     clearInterval(id);
//   }
// }
// countup();






// オブジェクト{}でくくる：プロパティの集合
// プロパティ：名前:値, の組み合わせ　オブジェクトの{}の中身
// オブジェクト名.(ドット)プロパティ名で呼び出しができる
// var traffic_light = {
//   blue: "go",
//   yelow: "slow down",
//   red: "stop"
// }
// console.log(traffic_light.blue);

// プロパティの書き換え
// traffic_light.blue = "go fast";
// console.log(traffic_light.blue);
// var today = new Date();
// console.log(today.getFullYear() + "/" + today.getMonth() + "/" + today.getDate());







// 組み込みオブジェクト：javascriptがあらかじめ用意しているオブジェクト
// 例）
// String:文字列、Number:数値、Boolean:論理値、Array:配列、Date:日付、Math:数値計算
// var s = new String("hello world");
// 文字数
// console.log(s.length);
// 左から何文字目の値
// console.log(s.charAt(4)); 
// 該当文字の置換
// console.log(s.replace("world", "Taro"));

// var today = new Date();
// console.log(today.getFullYear() + "/" + today.getMonth() + "/" + today.getDate());

// Mathオブジェクトはnewで生成しなくても呼び出すことができる
// πの値を呼び出すPI
// console.log(Math.PI);
// ルートの計算をするsqrt
// console.log(Math.sqrt(64));








// メソッド：オブジェクトのプロパティに代入された関数のこと（そのままプロパティに関数がはいってるだけ）
// this:そのメソッドが属している親のオブジェクトを指定できる
// var traffic_light = {
//   blue: "go",
//   yellow: "slow down",
//   red: "stop",
//   current: "",
//   change_light: function () {
//     switch (this.current) {
//       case this.blue:
//         this.current = this.yellow;
//         break;
//       case this.yellow:
//         this.current = this.red;
//         break;
//       case this.red:
//         this.current = this.blue;
//         break;
//       default:
//         this.current = this.blue;
//         break;
//     }
//   }
// }
// traffic_light.change_light();
// console.log(traffic_light.current);
// traffic_light.change_light();
// console.log(traffic_light.current);
// traffic_light.change_light();
// console.log(traffic_light.current);
// traffic_light.change_light();
// console.log(traffic_light.current);

// この関数がプロパティに入ってるだけ
// function change_light() {
//   switch (traffic_light.current) {
//     case traffic_light.blue:
//       traffic_light.current = traffic_light.yellow;
//       break;
//     case traffic_light.yellow:
//       traffic_light.current = traffic_light.red;
//       break;
//     case traffic_light.red:
//       traffic_light.current = traffic_light.blue;
//       break;
//     default:
//       traffic_light.current = traffic_light.blue;
//       break;
//   }
// }






// ダイアログボックス widdowオブジェクトのメソッドとして用意されている

// alert:okのみ
// window.alert("hello world!");

// confirm/ok+キャンセル　okだとtrueがキャンセルだとfalseが返り血に入っている
// 例）
// if (window.confirm("ダウンロードしますか？")) {
//   ダウンロード処理
//   console.log("Downloading...");
// }

// prompt/テキスト+ok+キャンセル　キャンセルだとnullが返る
// var result = window.prompt("名前を入力してください");
// console.log(result);







// Windowオブジェクト：ブラウザそのもの
// 　　　documentプロパティ
// 　　　Documentオブジェクト:htmlで表現されているコンテンツを全て保持している=サイトの内容
// console.log(window);






// DOM：Document object model
// Documentオブジェクトを通して、個々の要素を取得・操作できる

// DOMの操作
// 取得：getElementById(id)
// 作成：createElement(tag_type);   createTextNode(text);
// 追加：appendChild();

// documentオブジェクトのgetelementbyidメソッド
// var h1 = document.getElementById("title");
// console.log(h1);

// h1オブジェクトのtextcontentメソッド
// var title = h1.textContent;
// console.log(title);

// 要素内の変更
// h1.textContent = "タイトル変更";

// 要素の作成・追加
var p = document.createElement("p");
var text = document.createTextNode("要素3");
document.body.appendChild(p).appendChild(text);