// jQuery(document).ready(function () {
//   ここにjQueryの処理を書く
// });
// $(document).ready(function() {
//   ここにjQueryの処理を書く
// });
// jQuery(function() {
//   ここにjQueryの処理を書く
// });
// 上は全部同じ意味
// $(function() {
// });　は省略形で、これだけでOK

$(function() {
  // セレクタ：処理対象となるDOM要素を指定する記法＝p
  // メソッド：処理=css以降の部分
  // メソッドチェーン：処理をつなげて記述すること=hide

  // $('p').css('color', 'red').hide('slow');


  // セレクタに記述する際は、cssと記述は同じ
  // html要素：p h1 ulなどそのまま
  // id:#main
  // class: .item

  // $('#sub').css('color', 'red');
  // $('.item').css('color', 'blue');


  // セレクタの指定方法
  // >　直下の子要素
  // 　（空白）　それ以下の要素
  // ,　複数の要素
  // +　隣接する要素

  // $('#main > .item').css('color', 'red');
  // $('#main .item').css('color', 'red');
  // $('p, .item').css('color', 'red');
  // $('.item + .item').css('color', 'red');


  // フィルタ
  // :eq()　イコール：添字は０から始まる
  // :gt(), :lt()　グレーターザン、レスザン：添字より大きい、小さい
  // :even(), :odd()　偶数、奇数
  // :contains()　記述されている字を含むものを指定
  // :first(), :last()　一番始め、終わり

  // $('#sub > li:eq(2)').css('color', 'red');
  // $('#sub > li:gt(1)').css('color', 'red');
  // $('#sub > li:lt(4)').css('color', 'red');
  // $('#sub > li:even').css('color', 'red');
  // $('#sub > li:odd').css('color', 'blue');
  // $('#sub > li:contains(4)').css('color', 'blue');
  // $('#sub > li:first').css('color', 'red');
  // $('#sub > li:last').css('color', 'blue');


  // メソッドを使ったDOM要素の指定
  // parent(),children()　親要素、子要素の指定
  // next(),prev()
  // siblings()　兄弟要素　指定された数字自体は適用されない

  // $('#sub').parent().css('color', 'red');
  // $('#sub').children().css('color', 'red');
  // $('#sub > li:eq(2)').next().css('color', 'red');
  // $('#sub > li:eq(2)').prev().css('color', 'red');
  // $('#sub > li:eq(2)').siblings().css('color', 'red');


  // 属性セレクタ []で指定する
  // =　イコール：全く同じものを指定
  // !=　同じもの以外を指定
  // *=　その部分を含むものを指定
  // ^=　記述で始まるものを指定
  // $=　記述で終わっているものを指定

  // $('a[href="http://google.com"]').css('background', 'red');
  // $('a[href!="http://google.com"]').css('background', 'red');
  // $('a[href*="dotinstall"]').css('background', 'red');
  // $('a[href^="http"]').css('background', 'red');
  // $('a[href$="com"]').css('background', 'red');


  // メソッド指定　cssの取得　追加
  // addClass　cssを呼び込んで適用させる　class属性をつけて追加で作る
  // removeClass  cssを外す

  // $('p').css('color', 'red').css('background', 'blue');
  // console.log($('p').css('color'));
  // $('p').addClass('mystyle');
  // $('p').removeClass('mystyle');


  // 属性の値を取得　指定
  // attrメソッド　アトリビュート
  // dataメソッド　カスタム属性

  // console.log($('a').attr('href'));
  // $('a').attr('href', 'http://google.co.jp');
  // console.log($('a').data('sitename'));


  // タグの中身を指定していく
  // text　内容だけ変更する
  // html　タグを含めて内容を変更する
  // val　バリュー、formタグに使用　valueの内容を取得、指定
  // remove　指定したタグ自体をなくす
  // empty　指定したタグの中身を削除するタグ自体は存在する

  // $('p').text('just changed');
  // $('p').html('<a href="">click me!</a>');
  // console.log($('input').val(''));
  // $('input').val('hello, again!');
  // $('p').empty('');
  // $('p').remove('');


  // 新しく要素を追加する
  // var li =などでタグを追加できる varの後に入れたいタグを指定 variable（変数）
  // before(), after()　指定した場所の前、後ろに追加する
  // insertBefore(), insertAfte()r　記述の順序が違うが結果は同じ
  // prepend(), append()　ある要素の子要素の先頭、末尾に追加
  // prependTo(),appendTo()　同じく記述の順番が違う

  // var li = $('<li>').text('just added');
  // $('ul > li:eq(1)').before(li);
  // $('ul > li:eq(1)').after(li);
  // li.insertBefore($('ul > li:eq(1)'));　書き順が変わるだけ
  // $('ul').prepend(li);
  // $('ul').append(li);
  // li.prependTo($('ul'));


  // エフェクトメソッド
  // hide, show　消す、表示　数値はmsミリビョウだから100で0.1秒　''はいらない
  // fadeOUt fadeIn　フワッと消す、表示
  // toggle　表示されている場合は非表示、非表示の場合は表示する（出たり消えたり）
  // alert()　アラートが表示される
  // コールバック関数：第二引数（ひきすう）にfunctionを指定して、効果が終わったあとにそれを実行する

  // $('#box').hide();
  // $('#box').hide('slow');
  // $('#box').hide(1000);
  // $('#box').fadeOut(1000);
  // $('#box').toggle(800);
  // $('#box').toggle(800);
  // $('#box').toggle(800);これで繰り返し出たり消えたりする
  // コールバック関数
  // $('#box').fadeOut(1000, function() {
  //   alert("gone!");
  // });


  // イベントメソッド　引数にfunctionつける
  // click　クリック時に起きる
  // mouseover　マウスがかかった時 mouseout　マウスが離れた時 mousemove　指定内でマウスが動いてる時
  // this　イベントの対象が同じ時に使える(例　box)　''いらない

  // $('#box').click(function() {
  //   alert("hi!");
  // });
  // $('#box')
  // .mouseover(function() {
  //   $(this).css('background', 'green');
  // })
  // .mouseout(function() {
  //   $(this).css('background', 'red');
  // })

  // イベントオブジェクト
  // functionの引数にeを指定　''いらない
  // $('#box')
  // .mousemove(function(e) {
  //   $(this).text(e.pageX);
  // });


  // フォームに関するイベント
  // focus　フォームにフォーカスされた時に起きる
  // blur　フォーカスが外れた時に起きる
  // change　セレクトボックスのイベントで多い　値が変更された時に起きる

  // $('#name')
  // .focus(function() {
  //   $(this).css('background', 'red');
  // })
  // .blur(function() {
  //   $(this).css('background', 'white');
  // });
  // $('#members').change(function() {
  //   alert("changed!");
  // });


  // 動的に作られた要素に対してイベントを割り当てる on
  // $('親要素').on('イベントの種類', 'クリック対象', '関数') {}

  // $('button').click(function() {
  //   var p = $('<p>').text('vanish!').addClass('vanish');
  //   $(this).before(p);
  // });

  // $('body').on('click', '.vanish', function() {
  //   $(this).remove();
  // });


  // 以下ローカル環境でなければ動作確認不可


  // Ajax　エイジャックス
  // Asynchronous Javascript + XML
  //　サーバーと通信　＋　ページの書き換え
  //　非同期：処理が終わる前に次の処理に移る


  // サーバー側の情報を読み込む load()メソッド
  // $('button').click(function() {
  //   $('#result').load('more.html');
  // });


  //　動作したもののスタイルを変更したいときはコールバック関数で記述する
  // $('button').click(function() {
  //   $('#result').load('more.html', function() {
  //     $('#message').css('color', 'red');
  //   });
  // });


  $.post
  $.get
  $.get('サーバー側のファイル', {パラメータ}, function() {})

  $('#greet').click(function() {
    $.get('greet.php', {
      name: $('#name').val()
    }, function(data) {
      $('#result').html(data + '(' + data.length + ')');
    });
  });
});
