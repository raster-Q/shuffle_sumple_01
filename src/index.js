import "./styles.css";

(function () {
  //////即時関数、発動//////////////

  //------関数定義---------------//
  //---シャッフル用関数

  function shuffle(arr) {
    let n = arr.length;
    let temp, i;

    function display2(funcArray, interval) {
      funcArray.forEach((func, i) => {
        setTimeout(func, i * interval);
      });
    }

    while (n) {
      i = Math.floor(Math.random() * n--);

      //---
      temp = arr[n];
      arr_n[Math.floor(nn / 4)] = document.getElementById(compass.arr_i_n[n]);
      tempImg[Math.floor(nn / 4)] = car_Dimension[temp].img;
      nn++;
      funcArray.push(() => {
        arr_n[Math.floor(nnn / 4)].innerHTML = ``;
        temp1.innerHTML = `${tempImg[Math.floor(nnn / 4)]}`;

        console.log("tempe" + tempImg);
        console.log("nn" + nn + "nnn" + Math.floor(nnn / 4));
        console.log("arr_n" + arr_n);
        nnn++;
      });

      //---
      arr[n] = arr[i];
      arr_i[Math.floor(nn / 4)] = document.getElementById(compass.arr_i_n[i]);
      arr_n[Math.floor(nn / 4)] = document.getElementById(compass.arr_i_n[n]);
      iImg[Math.floor(nn / 4)] = car_Dimension[i].img;
      nn++;
      funcArray.push(() => {
        arr_i[Math.floor(nnn / 4)].innerHTML = ``;
        arr_n[Math.floor(nnn / 4)].innerHTML = `${iImg[Math.floor(nnn / 4)]}`;

        console.log("arr_i_n" + iImg);
        console.log("nn" + nn + "nnn" + Math.floor(nnn / 4));
        nnn++;
      });

      //---
      arr[i] = temp;
      arr_i[Math.floor(nn / 4)] = document.getElementById(compass.arr_i_n[i]);
      tempImg[Math.floor(nn / 4)] = car_Dimension[temp].img;
      nn++;
      funcArray.push(() => {
        temp1.innerHTML = ``;
        arr_i[Math.floor(nnn / 4)].innerHTML = `${
          tempImg[Math.floor(nnn / 4)]
        }`;

        console.log("comp" + tempImg);
        console.log("nn" + nn + "nnn" + Math.floor(nnn / 4));
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

        console.log("result" + nImg);
        console.log("nn" + nn + "nnn" + Math.floor(nnn / 4));
        nnn++;
      });
    }

    display2(funcArray, 1200);

    return arr;
  }

  //---ここまで、シャッフル用関数

  //---

  //---

  //---カード表示用関数

  //---カード表示用、ここまで

  //------関数定義、ここまで-------//
  //------変数定義---------------//
  let nn = 0;
  let nnn = 0;
  let results = [null, null, null, null, null];
  let arr_i = [null, null, null, null, null];
  let arr_n = [null, null, null, null, null];
  let tempImg = [null, null, null, null, null];
  let iImg = [null, null, null, null, null];
  let nImg = [null, null, null, null, null];
  let funcArray = [null];

  //------変数定義、ここまで-------//
  //------DOM取得関連------------//
  const titleName = document.getElementById("titleName");

  //--- start
  const status = document.getElementById("status");
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
  const temp1 = document.getElementById("temp1");
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
  const result = document.getElementById("result");
  const a5 = document.getElementById("a5");
  const b5 = document.getElementById("b5");
  const c5 = document.getElementById("c5");
  const d5 = document.getElementById("d5");
  const e5 = document.getElementById("e5");
  //const g5 = document.getElementById("");
  //const temp5 = document.getElementById("temp5");

  //--- ボタン
  const shuffleButton = document.getElementById("shuffleButton");
  const resetButton = document.getElementById("resetButton");

  //--- MP3
  const slowSound = document.getElementById("slowSound");

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
    arr_i_n: ["a1", "b1", "c1", "d1", "e1"],
    results: ["a5", "b5", "c5", "d5", "e5"],
    temp: ["temps", "temp2", "temp3", "temp4", "temp5"]
  };

  //------オブジェクト定義-----------------//
  //------オブジェクト定義、ここまで---------//

  //////初期配置///////////////////////////
  titleName.innerHTML = `<h3>shuffleコード テスト</h3>`;
  status.textContent = "S";
  number1.textContent = "1";
  //  number2.textContent = `2`;
  //  number3.textContent = `3`;
  //  number4.textContent = `4`;
  result.textContent = "r";
  temps.textContent = "temp";
  function reset() {
    //---
    compass.dice[0] = 0;
    compass.dice[1] = 1;
    compass.dice[2] = 2;
    compass.dice[3] = 3;
    compass.dice[4] = 4;

    //---
    a1.innerHTML = `${car_Dimension[compass.dice[0]].img}`;
    b1.innerHTML = `${car_Dimension[compass.dice[1]].img}`;
    c1.innerHTML = `${car_Dimension[compass.dice[2]].img}`;
    d1.innerHTML = `${car_Dimension[compass.dice[3]].img}`;
    e1.innerHTML = `${car_Dimension[compass.dice[4]].img}`;

    //---
    a5.innerHTML = ``;
    b5.innerHTML = ``;
    c5.innerHTML = ``;
    d5.innerHTML = ``;
    e5.innerHTML = ``;
    temp1.innerHTML = ``;

    //---
    shuffleButton.disabled = false;
    resetButton.disabled = true;

    //---
    nn = 0;
    nnn = 0;
    results = [null, null, null, null, null];
    arr_i = [null, null, null, null, null];
    arr_n = [null, null, null, null, null];
    tempImg = [null, null, null, null, null];
    iImg = [null, null, null, null, null];
    nImg = [null, null, null, null, null];
    funcArray = [null];
  }

  reset();
  //////初期配置、ここまで////////////////////

  //------スクリプト----------------//
  //---シャッフルボタン、イベント
  shuffleButton.addEventListener("click", () => {
    shuffle(compass.dice);
    shuffleButton.disabled = true;
    resetButton.disabled = false;
  });

  resetButton.addEventListener("click", reset, false);

  //////即時関数、ここまで
})();
