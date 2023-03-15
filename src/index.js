import "./styles.css";

(function () {
  //////即時関数、発動//////////////

  //------関数定義---------------//
  //---シャッフル用関数
  function shuffle(arr) {
    let n = arr.length;
    let temp, i;

    while (n) {
      i = Math.floor(Math.random() * n--);
      temp = arr[n];
      arr[n] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }
  //---ここまで、シャッフル用関数

  //---カード表示用関数

  function display() {
    bs.innerHTML = `${car_Dimension[compass.dice[0]].img}`;
    cs.innerHTML = `${car_Dimension[compass.dice[1]].img}`;
    ds.innerHTML = `${car_Dimension[compass.dice[2]].img}`;
    es.innerHTML = `${car_Dimension[compass.dice[3]].img}`;
    fs.innerHTML = `${car_Dimension[compass.dice[4]].img}`;
  }
  //---カード表示用、ここまで

  //------関数定義、ここまで-------//

  //------DOM取得関連------------//
  const titleName = document.getElementById("titleName");

  //--- start
  const as = document.getElementById("as");
  const bs = document.getElementById("bs");
  const cs = document.getElementById("cs");
  const ds = document.getElementById("ds");
  const es = document.getElementById("es");
  const fs = document.getElementById("fs");
  const gs = document.getElementById("gs");
  const hs = document.getElementById("hs");

  //--- 1
  const a1 = document.getElementById("a1");
  const b1 = document.getElementById("b1");
  const c1 = document.getElementById("c1");
  const d1 = document.getElementById("d1");
  const e1 = document.getElementById("e1");
  const f1 = document.getElementById("f1");
  const g1 = document.getElementById("g1");
  const h1 = document.getElementById("h1");

  //--- 2
  const a2 = document.getElementById("a2");
  const b2 = document.getElementById("b2");
  const c2 = document.getElementById("c2");
  const d2 = document.getElementById("d2");
  const e2 = document.getElementById("e2");
  const f2 = document.getElementById("f2");
  const g2 = document.getElementById("g2");
  const h2 = document.getElementById("h2");

  //--- 3
  const a3 = document.getElementById("a3");
  const b3 = document.getElementById("b3");
  const c3 = document.getElementById("c3");
  const d3 = document.getElementById("d3");
  const e3 = document.getElementById("e3");
  const f3 = document.getElementById("f3");
  const g3 = document.getElementById("g3");
  const h3 = document.getElementById("h3");

  //--- 4
  const a4 = document.getElementById("a4");
  const b4 = document.getElementById("b4");
  const c4 = document.getElementById("c4");
  const d4 = document.getElementById("d4");
  const e4 = document.getElementById("e4");
  const f4 = document.getElementById("f4");
  const g4 = document.getElementById("g4");
  const h4 = document.getElementById("h4");

  //--- 5
  const a5 = document.getElementById("a5");
  const b5 = document.getElementById("b5");
  const c5 = document.getElementById("c5");
  const d5 = document.getElementById("d5");
  const e5 = document.getElementById("e5");
  const f5 = document.getElementById("f5");
  const g5 = document.getElementById("g5");
  const h5 = document.getElementById("h5");

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
  //---ダイス
  const compass = {
    dice: [0, 1, 2, 3, 4],
    s: ["bs", "cs", "ds", "es", "fs"]
  };

  //------オブジェクト定義-----------------//
  //------オブジェクト定義、ここまで---------//

  //////初期配置///////////////////////////
  titleName.innerHTML = `<h3>shuffleコード テスト</h3>`;
  as.textContent = `S`;
  a1.textContent = `1`;
  a2.textContent = `2`;
  a3.textContent = `3`;
  a4.textContent = `4`;
  a5.textContent = `5`;

  //---
  display();

  //////初期配置、ここまで////////////////////

  //////即時関数、ここまで
})();
