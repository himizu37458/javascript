// 青文字：プロパティ、黄色文字：メソッド
// オブジェクトを親のプロパティとして設定している
// []は配列データを表す

// let youtuber = {
//   list: {
//     business: {
//       youtuber: [
//         { name: "しまぶー", age: 20, teachPrograming() {} },
//         { name: "あっちゃん", age: 37, teachHistory() {} }
//       ],
//       teach() {}
//     },
//     entertainment: {
//       youtuber: [{ name: "ヒカキン" }, { name: "はじめしゃちょー" }],
//       makeSmile() {}
//     }
//   },
//   plan() {},
//   uplpdVideo() {}
// };

// youtuber.list.business.youtuber[0].teachPrograming();

// Web APIとは？
// 実際に叩いてみよう＝＞　https://jsonplaceholder.typicode.com/ のusers

// こういったAPIをつくるのがバックエンドの仕事。
// 主にフロントエンドはバックエンドが作ったAPIを使ってUIを構築する。
// APIをプログラム側(js)から叩いてデータのやりとりを行う

// asyncを使うと非同期関数となる、awaitが使える
// async function callApi() {
//   const res = await window.fetch("https://jsonplaceholder.typicode.com/users"); //async,awaitを使うとresponseオブジェクトが返ってくる
//   const users = await res.json(); //responseオブジェクトのjsonメソッドをひらく
//   console.log(users); //APIの中身が入る
// }
// callApi();






// 実際につくってみよう
// const button = document.getElementById("addBtn");
// const lists = document.getElementById("lists");

// button.addEventListener("click", async function () { //もっとを押した時に追加される
  // データのやりとり
  // const res = await window.fetch("https://jsonplaceholder.typicode.com/users");
  // const users = await res.json();

  // DOM操作
  // for文を使った記述方法
  // for (let index = 0; index < users.length; index++) {
  //   const user = users[index];
  //   const list = document.createElement("li");
  //   list.innerText = user.name;
  //   lists.appendChild(list);
  // }
  // foreachを使った記述方法
//   users.forEach(function (user) {
//     const list = document.createElement("li");
//     list.innerText = user.name;
//     lists.appendChild(list);
//   });
// });

// window.addEventListener("load", async function listUsers() {
//   const res = await window.fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();

//   users.forEach(function (user) {
//     const list = document.createElement("li");
//     list.innerText = user.name;
//     lists.appendChild(list);
//   });
// });





// リファクタリング：コードをきれいにする（上のコードをきれいにした結果）
//同じものをまとめる/長い記述を分解する/順序の整理/コメント追加

//DOM
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

// 関数
function addList (user) {
  const list = document.createElement("li");
  list.innerText = user.name;
  lists.appendChild(list);
}

async function getUsers() {
  const res = await window.fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
}
async function listUsers() {
  const users = await getUsers();
  users.forEach(addList);
}

// イベント
window.addEventListener("load", listUsers); //ページを再読み込みした際に10件表示
button.addEventListener("click", listUsers); //もっとを押した際に10件表示
