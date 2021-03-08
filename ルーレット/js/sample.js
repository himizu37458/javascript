
  var num;
  var excludes = [];
  // ルーレット中、オレンジパネルを白に戻すためのフラッグ
  var number_flag = false;
  // 再スタートする時、選ばれた数字をグレーに変えるためのフラッグ
  var stop_flag = false;
  // ルーレットに使うタイマーを格納するID
  var interval_id;

  // 1~16の数字をランダムに生成する関数（一度出た数字は除外）
  function random16() {
    var arr = [];
    for (var i = 1; i <= 16; ++i) {
      if (excludes.indexOf(i) === -1) {
        arr.push(i); //空の配列arrの中に1~16が入っていく
      }
    }
    num = arr[Math.floor(Math.random()*arr.length)];
  }

  // テーブルの挿入
  for (var i = 1; i <= 4; i++) {
    $('#roulette').append('<tr class="' + i + '"></tr>'); //tr class1~4が生成
  }
  for (var j = 1; j <= 16; j++) {
    $('.' + Math.ceil(j / 4)).append('<td id="' + j + '"></td>'); //各class1~4にid1~16が生成
    $('#' + j).append('<p>' + j + '</p>'); //tableの中に数字記入
  }

  // 初期設定,ストップボタン無効化(無意味にstop_flagが立つのを防ぐ)
  $('#stop_button').prop('disabled', true); //propメソッドで属性を取得変更

  // スタート
  $('#start_button').on('click', function roulette_start() { //クリックした時の実行

    if (excludes.length !== 15) { //15回以内の処理
      if (stop_flag === true) { //ストップボタンが押されたら
        $('#' + num).css("background-color", "gray"); //ランダムに選定されたidの要素を背景変更
        stop_flag = false;
      }
      number_flag = true;
      interval_id = setInterval(roulette, 10); //roulette関数を10ミリ秒ごとに実行
      $('#start_button').prop('disabled', true); //スタートボタンが押せなくなる
      $('#stop_button').prop('disabled', false); //ストップボタンが押せるようになる

    } else if (excludes.length === 15) { //全部押し切ったら
      $('#' + num).css("background-color", "gray");
      stop_flag = false;
      random16();
      $('#' + num).css("background-color", "orange");
      $('#start_button').prop('disabled', true);
      $('#stop_button').prop('disabled', true);
    }

  });

  // ルーレット 1~16の数字を生成して背景色をつける
  function roulette() {
    if (number_flag === true) { //フラッグが立っていれば
      number_flag = false;
    } else if (number_flag === false) { //フラッグが立っていないところは
      $('#' + num).css("background-color", "white");
    }
    random16();
    $('#' + num).css("background-color", "orange");
  }

  // ストップ
  $('#stop_button').on('click', function roulette_stop() {
    clearInterval(interval_id);
    excludes.push(num);
    stop_flag = true;
    $('#start_button').prop('disabled', false);
    $('#stop_button').prop('disabled', true);
  });

  //リセット
  $('#reset_button').on('click', function roulette_reset() {
    clearInterval(interval_id);
    excludes = [];
    for (i = 1; i <= 16; i++) {
      $('#' + i).css('background-color', 'white');
      num = 0;
      stop_flag = false;
      $('#start_button').prop('disabled', false);
    $('#stop_button').prop('disabled', true);
    }
  });
