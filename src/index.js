import "./styles.css";

(function () {
  //////即時関数、発動//////////////

  //------関数定義---------------//
  //---シャッフル用関数
  function shuffle(arr) {
    let n = arr.length;
    let temp = null;
    let i = null;

    let nn = 0; //手数カウンター
    let nnn = 0; //スロー関数手数カウンター
    let results = [null, null, null, null, null]; //id用
    let arr_i = [null, null, null, null, null]; //id用
    let arr_n = [null, null, null, null, null]; //id用
    let tempImg = [null, null, null, null, null]; //img用
    let iImg = [null, null, null, null, null]; //img用
    let nImg = [null, null, null, null, null]; //img用
    let funcArray = [null]; //スロー関数用

    //---スロー関数
    function display2(funcArray, interval) {
      funcArray.forEach((func, ii) => {
        setTimeout(func, ii * interval);
      });
    }

    //---
    while (n) {
      i = Math.floor(Math.random() * n--);

      //---
      temp = arr[n];
      arr_n[Math.floor(nn / 4)] = document.getElementById(compass.arr_i_n[n]);
      arr_i[Math.floor(nn / 4)] = document.getElementById(compass.arr_i_n[i]);
      tempImg[Math.floor(nn / 4)] = car_Dimension[temp].img;
      nn++;

      funcArray.push(() => {
        arr_n[Math.floor(nnn / 4)].innerHTML = ``;
        arr_n[Math.floor(nnn / 4)].style.backgroundColor = "white";
        temp1.innerHTML = `${tempImg[Math.floor(nnn / 4)]}`;
        as.innerHTML = arr_i[Math.floor(nnn / 4)] === a1 ? `★` : ``;
        bs.innerHTML = arr_i[Math.floor(nnn / 4)] === b1 ? `★` : ``;
        cs.innerHTML = arr_i[Math.floor(nnn / 4)] === c1 ? `★` : ``;
        ds.innerHTML = arr_i[Math.floor(nnn / 4)] === d1 ? `★` : ``;
        es.innerHTML = arr_i[Math.floor(nnn / 4)] === e1 ? `★` : ``;
        p1.textContent = `① 最終項(ｎ)を、tempへ逃がす`;
        nnn++;
      });

      //---
      arr[n] = arr[i];
      arr_n[Math.floor(nn / 4)] = document.getElementById(compass.arr_i_n[n]);
      iImg[Math.floor(nn / 4)] = car_Dimension[i].img;
      nn++;

      funcArray.push(() => {
        arr_i[Math.floor(nnn / 4)].innerHTML = ``;
        arr_n[Math.floor(nnn / 4)].innerHTML = `${nImg[Math.floor(nnn / 4)]}`;
        arr_n[Math.floor(nnn / 4)].style.opacity =
          tempImg[Math.floor(nnn / 4)] === nImg[Math.floor(nnn / 4)]
            ? 0.4
            : `1.0`;
        p1.textContent = `② ランダム抽出「★(i)」を、最終項(ｎ)へ移動`;
        nnn++;
      });

      //---
      arr[i] = temp;
      arr_i[Math.floor(nn / 4)] = document.getElementById(compass.arr_i_n[i]);
      tempImg[Math.floor(nn / 4)] = car_Dimension[temp].img;
      nn++;

      funcArray.push(() => {
        arr_n[Math.floor(nnn / 4)].style.opacity = 1.0;
        temp1.innerHTML = ``;
        arr_i[Math.floor(nnn / 4)].innerHTML = `${
          tempImg[Math.floor(nnn / 4)]
        }`;
        p1.textContent = `③ tempを、ランダム抽出枠「★(i)」へ移動`;
        nnn++;
      });

      //---
      results[Math.floor(nn / 4)] = document.getElementById(compass.results[n]);
      arr_n[Math.floor(nn / 4)] = document.getElementById(compass.arr_i_n[n]);
      nImg[Math.floor(nn / 4)] = car_Dimension[compass.dice[n]].img;
      nn++;

      funcArray.push(() => {
        arr_n[Math.floor(nnn / 4)].innerHTML = ``;
        results[Math.floor(nnn / 4)].innerHTML = `${nImg[Math.floor(nnn / 4)]}`;
        statusClean();
        p1.textContent = `④ 最終項(ｎ)は決定、↓result枠へ移動`;
        nnn++;
      });
    }

    //---リセットボタン、押せるように
    funcArray.push(() => {
      resetButton.disabled = false;
    });

    //---配列[0]のnullを外す
    if (funcArray[0] === null) {
      funcArray.shift();
    }

    //---カードナンバー（「ｎ」枠）表示用関数
    display();
    //---スロー関数、発動
    display2(funcArray, 1800);

    return arr;
  }
  //---ここまで、シャッフル用関数

  //---カードナンバー（「ｎ」枠）表示用関数
  function display() {
    an.innerHTML = `${compass.dice[0] + 1}`;
    bn.innerHTML = `${compass.dice[1] + 1}`;
    cn.innerHTML = `${compass.dice[2] + 1}`;
    dn.innerHTML = `${compass.dice[3] + 1}`;
    en.innerHTML = `${compass.dice[4] + 1}`;
  }

  //---カード表示用、ここまで

  //---ステータス表示リセット用
  function statusClean() {
    as.innerHTML = ``;
    bs.innerHTML = ``;
    cs.innerHTML = ``;
    ds.innerHTML = ``;
    es.innerHTML = ``;
  }
  //---ステータス表示リセット、ここまで
  //------関数定義、ここまで-------//

  //------DOM取得関連------------//
  const titleName = document.getElementById("titleName");

  //--- start
  const status = document.getElementById("status");
  const as = document.getElementById("as");
  const bs = document.getElementById("bs");
  const cs = document.getElementById("cs");
  const ds = document.getElementById("ds");
  const es = document.getElementById("es");
  const temps = document.getElementById("temps");

  //--- 1
  const number1 = document.getElementById("number1");
  const a1 = document.getElementById("a1");
  const b1 = document.getElementById("b1");
  const c1 = document.getElementById("c1");
  const d1 = document.getElementById("d1");
  const e1 = document.getElementById("e1");
  const temp1 = document.getElementById("temp1");

  //--- 5
  const result = document.getElementById("result");
  const a5 = document.getElementById("a5");
  const b5 = document.getElementById("b5");
  const c5 = document.getElementById("c5");
  const d5 = document.getElementById("d5");
  const e5 = document.getElementById("e5");

  //--- index
  const number = document.getElementById("number");
  const an = document.getElementById("an");
  const bn = document.getElementById("bn");
  const cn = document.getElementById("cn");
  const dn = document.getElementById("dn");
  const en = document.getElementById("en");

  //--- process
  const process = document.getElementById("process");
  const p1 = document.getElementById("p1");

  //--- ボタン
  const shuffleButton = document.getElementById("shuffleButton");
  const resetButton = document.getElementById("resetButton");

  //--- 注意書き
  const notice01 = document.getElementById("notice01");
  const notice02 = document.getElementById("notice02");
  const notice03 = document.getElementById("notice03");
  //------DOM取得関連、ここまで------------//

  //------配列定義-----------------------//
  //---カードデータ、2次元配列
  // car = car (d)
  const car_Dimension = [
    {
      name: "ペンタクルA",
      img:
        '<img class="card" src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Pents01.jpg" />'
    },
    {
      name: "ペンタクル2",
      img:
        '<img class="card" src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Pents02.jpg" />'
    },
    {
      name: "ペンタクル3",
      img:
        '<img class="card" src="https://upload.wikimedia.org/wikipedia/commons/4/42/Pents03.jpg" />'
    },
    {
      name: "ペンタクル4",
      img:
        '<img class="card" src="https://upload.wikimedia.org/wikipedia/commons/3/35/Pents04.jpg" />'
    },
    {
      name: "ペンタクル5",
      img:
        '<img class="card" src="https://upload.wikimedia.org/wikipedia/commons/9/96/Pents05.jpg" />'
    }
  ];
  //------配列定義、ここまで---------------//

  //------オブジェクト定義-----------------//
  //---座標
  const compass = {
    dice: [0, 1, 2, 3, 4],
    arr_i_n: ["a1", "b1", "c1", "d1", "e1"],
    results: ["a5", "b5", "c5", "d5", "e5"]
    //---座標、ここまで
  };
  //------オブジェクト定義、ここまで---------//

  //////初期配置///////////////////////////
  titleName.innerHTML = `<h3>shuffleコード テスト ver0.1</h3>`;
  status.textContent = "S";
  number1.textContent = "1";
  result.textContent = "r";
  number.innerHTML = `<i>d</i>`;
  process.textContent = "P";
  temps.textContent = "temp";
  notice01.innerHTML = `※1、タロットカード画像 出典:<br>
  　『フリー百科事典ウィキペディア (Wikipedia)』`;
  notice02.textContent = "※2、temp ＝ 最終項カード、一時的退避場所";
  notice03.textContent = "※3、★ ＝ ランダム抽出、tempと交換";

  function reset() {
    //---
    compass.dice[0] = 0;
    compass.dice[1] = 1;
    compass.dice[2] = 2;
    compass.dice[3] = 3;
    compass.dice[4] = 4;

    //---「Ｓ」枠、表示クリーンに
    statusClean();

    //---「1」枠、カード初期配置
    a1.innerHTML = `${car_Dimension[compass.dice[0]].img}`;
    a1.style.backgroundColor = "olivedrab";
    b1.innerHTML = `${car_Dimension[compass.dice[1]].img}`;
    b1.style.backgroundColor = "olivedrab";
    c1.innerHTML = `${car_Dimension[compass.dice[2]].img}`;
    c1.style.backgroundColor = "olivedrab";
    d1.innerHTML = `${car_Dimension[compass.dice[3]].img}`;
    d1.style.backgroundColor = "olivedrab";
    e1.innerHTML = `${car_Dimension[compass.dice[4]].img}`;
    e1.style.backgroundColor = "olivedrab";

    //---「ｒ」枠、表示クリーンに
    a5.innerHTML = ``;
    b5.innerHTML = ``;
    c5.innerHTML = ``;
    d5.innerHTML = ``;
    e5.innerHTML = ``;
    temp1.innerHTML = ``;

    //---「d」枠、カードナンバー及びダイス表示
    display();

    //--- 「Ｐ」枠、作業工程、クリーンに
    p1.textContent = ``;

    //---ボタン関連
    shuffleButton.disabled = false;
    resetButton.disabled = true;
  }

  reset();
  //////初期配置、ここまで////////////////////

  //------イベント関連----------------//
  //---シャッフルボタン、イベント
  shuffleButton.addEventListener("click", () => {
    shuffle(compass.dice);
    shuffleButton.disabled = true;
  });

  //---リセットボタン、イベント
  resetButton.addEventListener("click", reset, false);

  //------イベント関連、ここまで-------//
  //////即時関数、ここまで//////////////
})();
