import "./styles.css";

(function () {
  //////即時関数、発動//////////////

  //------関数定義---------------//
  //---シャッフル用関数
  function shuffle(arr) {
    let n = arr.length;
    let temp, i;
    let nn = 0;

    function temper() {
      var temper = document.getElementById(compass.temp[0]);
      temper.innerHTML = `${car_Dimension[temp].img}`;
    }

    while (n) {
      i = Math.floor(Math.random() * n--);
      temp = arr[n];
      temper();
      arr[n] = arr[i];
      arr[i] = temp;

      nn++;
    }
    return arr;
  }
  //---ここまで、シャッフル用関数

  //---

  //---

  //---カード表示用関数

  function display() {}
  //---カード表示用、ここまで

  //------関数定義、ここまで-------//
  //------変数定義---------------//

  //------変数定義、ここまで-------//
  //------DOM取得関連------------//
  const titleName = document.getElementById("titleName");

  //--- start
  const numbers = document.getElementById("numbers");
  const as = document.getElementById("as");
  const bs = document.getElementById("bs");
  const cs = document.getElementById("cs");
  const ds = document.getElementById("ds");
  const es = document.getElementById("es");
  //const gs = document.getElementById("");
  const temps = document.getElementById("temps");

  //--- 1
  const number1 = document.getElementById("number1");
  const a1 = document.getElementById("a1");
  const b1 = document.getElementById("b1");
  const c1 = document.getElementById("c1");
  const d1 = document.getElementById("d1");
  const e1 = document.getElementById("e1");
  //const g1 = document.getElementById("");
  //const temp1 = document.getElementById("temp1");
  /*
  //--- 2
  const number2 = document.getElementById("number2");
  const a2 = document.getElementById("a2");
  const b2 = document.getElementById("b2");
  const c2 = document.getElementById("c2");
  const d2 = document.getElementById("d2");
  const e2 = document.getElementById("e2");
  //const g2 = document.getElementById("");
  //const temp2 = document.getElementById("temp2");

  //--- 3
  const number3 = document.getElementById("number3");
  const a3 = document.getElementById("a3");
  const b3 = document.getElementById("b3");
  const c3 = document.getElementById("c3");
  const d3 = document.getElementById("d3");
  const e3 = document.getElementById("e3");
  //const g3 = document.getElementById("");
  //const temp3 = document.getElementById("temp3");

  //--- 4
  const number4 = document.getElementById("number4");
  const a4 = document.getElementById("a4");
  const b4 = document.getElementById("b4");
  const c4 = document.getElementById("c4");
  const d4 = document.getElementById("d4");
  const e4 = document.getElementById("e4");
  //const g4 = document.getElementById("");
  //const temp4 = document.getElementById("temp4");
*/
  //--- 5
  const number5 = document.getElementById("number5");
  const a5 = document.getElementById("a5");
  const b5 = document.getElementById("b5");
  const c5 = document.getElementById("c5");
  const d5 = document.getElementById("d5");
  const e5 = document.getElementById("e5");
  //const g5 = document.getElementById("");
  //const temp5 = document.getElementById("temp5");

  //--- ボタン
  const shuffleButton = document.getElementById("shuffleButton");

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
  //---座標
  const compass = {
    dice: [0, 1, 2, 3, 4],
    a: ["a1", "a2", "a3", "a4", "a5"],
    b: ["b1", "b2", "b3", "b4", "b5"],
    c: ["c1", "c2", "c3", "c4", "c5"],
    d: ["d1", "d2", "d3", "d4", "d5"],
    e: ["e1", "e2", "e3", "e4", "e5"],
    arrn: ["a5", "b4", "c3", "d2", "e1"],
    temp: ["temps", "temp2", "temp3", "temp4", "temp5"]
  };

  //------オブジェクト定義-----------------//
  //------オブジェクト定義、ここまで---------//

  //////初期配置///////////////////////////
  titleName.innerHTML = `<h3>shuffleコード テスト</h3>`;
  numbers.textContent = `S`;
  //  number1.textContent = `1`;
  //  number2.textContent = `2`;
  //  number3.textContent = `3`;
  //  number4.textContent = `4`;
  number5.textContent = `5`;

  //---
  as.innerHTML = `${car_Dimension[compass.dice[0]].img}`;
  bs.innerHTML = `${car_Dimension[compass.dice[1]].img}`;
  cs.innerHTML = `${car_Dimension[compass.dice[2]].img}`;
  ds.innerHTML = `${car_Dimension[compass.dice[3]].img}`;
  es.innerHTML = `${car_Dimension[compass.dice[4]].img}`;

  //////初期配置、ここまで////////////////////

  //------スクリプト----------------//
  //---シャッフルボタン、イベント
  shuffleButton.addEventListener("click", () => {
    shuffle(compass.dice);
  });

  //////即時関数、ここまで
})();
