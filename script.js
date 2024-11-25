//Variables
let mode = document.getElementById("screenMode");
let unit = document.getElementById("unitType");

let html = document.getElementById("html");
let body = document.getElementById("body");
let h1 = document.getElementById("header");
let h2 = document.getElementById("header2");
let h3 = document.getElementById("header3");

mode.addEventListener("change", changeMode);

//Functions
function changeMode() {
  var modeVal = document.getElementById("screenMode").value;

  if (modeVal == "dark") {
    html.style.background = "#102379";
    body.style.background = "#1d1a1a";
    body.style.color = "#f5f5f5";
    body.style.border = "solid 17px #3b4a9c";
    body.style.boxShadow = "0px 0px 30px #93c6f0c0";
    h1.style.boxShadow = "0px 0px 10px rgba(180, 190, 255, 0.133)";
    h1.style.color = "#7d8ac7";
    h2.style.color = "#d48181";
    h3.style.color = "#d48181";
    unit.style.background = "#212536";
    mode.style.background = "#212536";
    unit.style.color = "#d7d9e0";
    mode.style.color = "#d7d9e0";
    document.querySelectorAll(".in").forEach((input) => {
      input.style.background = "#2b2c33";
      input.style.color = "#f0f1f7";
    });
    document.querySelectorAll(".n").forEach((input) => {
      input.style.background = "#6b6d75";
      input.style.color = "#f0f1f7";
    });
    document.querySelectorAll(".btn").forEach((button) => {
      button.style.background = "#2b2c33";
      button.style.color = "#f0f1f7";
    });
  } else {
    html.style.background = "#5367c4";
    body.style.background = "#f5f5f5";
    body.style.color = "#000000";
    body.style.border = "solid 17px #a5c5f2";
    body.style.boxShadow = "0px 0px 30px #49adffc0";
    h1.style.boxShadow = "0px 0px 10px #0022ff22";
    h1.style.color = "#021a89";
    h2.style.color = "#792b2b";
    h3.style.color = "#792b2b";
    unit.style.background = "#ffffff";
    mode.style.background = "#ffffff";
    unit.style.color = "#000000";
    mode.style.color = "#000000";
    document.querySelectorAll(".in").forEach((input) => {
      input.style.background = "#f5f5f5";
      input.style.color = "#aaadc5";
    });
    document.querySelectorAll(".n").forEach((input) => {
      input.style.background = "#ffffff";
      input.style.color = "#aaadc5";
    });
    document.querySelectorAll(".btn").forEach((button) => {
      button.style.background = "#efefef";
      button.style.color = "#000000";
    });
  }
}

//CONVERTIONS
function c1convert() {
  let num1 = +document.getElementById("c1").value;
  let output = num1 * 12;

  document.getElementById("c1op").value = output + " in";

  document.getElementById("c1").value = " ";
}
function c2convert() {
  let num1 = +document.getElementById("c2").value;
  let output1 = num1 * 3;
  let output2 = num1 * 36;

  document.getElementById("c2op1").value = output1 + " ft";
  document.getElementById("c2op2").value = output2 + " in";

  document.getElementById("c2").value = " ";
}
function c3convert() {
  let num1 = +document.getElementById("c3").value;
  let output1 = num1 * 1760;
  let output2 = num1 * 5280;

  document.getElementById("c3op1").value = output1 + " yd";
  document.getElementById("c3op2").value = output2 + " ft";

  document.getElementById("c3").value = " ";
}
function c4convert() {
  let num1 = +document.getElementById("c4").value;
  let output = num1 * 2.54;

  document.getElementById("c4op").value = output + " cm";

  document.getElementById("c4").value = " ";
}
function c5convert() {
  let num1 = +document.getElementById("c5").value;
  let output = num1 * 0.3048;

  document.getElementById("c5op").value = output + " m";

  document.getElementById("c5").value = " ";
}
function c6convert() {
  let num1 = +document.getElementById("c6").value;
  let output = num1 * 0.9144;

  document.getElementById("c6op").value = output + " m";

  document.getElementById("c6").value = " ";
}
function c7convert() {
  let num1 = +document.getElementById("c7").value;
  let output = num1 * 1.609;

  document.getElementById("c7op").value = output + " km";

  document.getElementById("c7").value = " ";
}
function c8convert() {
  let num1 = +document.getElementById("c8").value;
  let output = num1 * 0.3937;

  document.getElementById("c8op").value = output + " in";

  document.getElementById("c8").value = " ";
}
function c9convert() {
  let num1 = +document.getElementById("c9").value;
  let output = num1 * 3.2808;

  document.getElementById("c9op").value = output + " ft";

  document.getElementById("c9").value = " ";
}
function c10convert() {
  let num1 = +document.getElementById("c10").value;
  let output = num1 * 1.0936;

  document.getElementById("c10op").value = output + " yd";

  document.getElementById("c10").value = " ";
}
function c11convert() {
  let num1 = +document.getElementById("c11").value;
  let output = num1 * 0.6214;

  document.getElementById("c11op").value = output + " mi";

  document.getElementById("c11").value = " ";
}

//CALCULATIONS

//PERIMETER
function f1calculate() {
  let num1 = +document.getElementById("f1").value;
  let output = num1 * 4;
  let Unit = unit.value;

  document.getElementById("f1op").value = output + " " + Unit;

  document.getElementById("f1").value = " ";
}
function f2calculate() {
  let num1 = +document.getElementById("f2-1").value;
  let num2 = +document.getElementById("f2-2").value;
  let Unit = unit.value;

  let output = 2 * num1 + 2 * num2;

  document.getElementById("f2op").value = output + " " + Unit;

  document.getElementById("f2-1").value = " ";
  document.getElementById("f2-2").value = " ";
}
function f3calculate() {
  let num1 = +document.getElementById("f3-1").value;
  let num2 = +document.getElementById("f3-2").value;
  let num3 = +document.getElementById("f3-3").value;
  let Unit = unit.value;

  let output = num1 + num2 + num3;

  document.getElementById("f3op").value = output + " " + Unit;

  document.getElementById("f3-1").value = " ";
  document.getElementById("f3-2").value = " ";
  document.getElementById("f3-3").value = " ";
}
function f4calculate() {
  let num1 = +document.getElementById("f4").value;
  let output = 2 * Math.PI * num1;
  let Unit = unit.value;

  document.getElementById("f4op").value = output + " " + Unit;

  document.getElementById("f4").value = " ";
}
function f5calculate() {
  let num1 = +document.getElementById("f5").value;
  let output = num1 * Math.PI;
  let Unit = unit.value;

  document.getElementById("f5op").value = output + " " + Unit;

  document.getElementById("f5").value = " ";
}

//AREA
function f6calculate() {
  let num1 = +document.getElementById("f6").value;
  let output = num1 ** 2;
  let Unit = unit.value;

  document.getElementById("f6op").value = output + " " + Unit;

  document.getElementById("f6").value = " ";
}
function f7calculate() {
  let num1 = +document.getElementById("f7-1").value;
  let num2 = +document.getElementById("f7-2").value;
  let Unit = unit.value;

  let output = num1 * num2;

  document.getElementById("f7op").value = output + " " + Unit;

  document.getElementById("f7-1").value = " ";
  document.getElementById("f7-2").value = " ";
}
function f8calculate() {
  let num1 = +document.getElementById("f8-1").value;
  let num2 = +document.getElementById("f8-2").value;
  let Unit = unit.value;

  let output = (num1 * num2) / 2;

  document.getElementById("f8op").value = output + " " + Unit;

  document.getElementById("f8-1").value = " ";
  document.getElementById("f8-2").value = " ";
}
function f9calculate() {
  let num1 = +document.getElementById("f9").value;
  let output = Math.PI * num1 ** 2;
  let Unit = unit.value;

  document.getElementById("f9op").value = output + " " + Unit;

  document.getElementById("f9").value = " ";
}

//SURFACE AREA ROW 1
function f10calculate() {
  let num1 = +document.getElementById("f10").value;
  let output = 6 * num1 ** 2;
  let Unit = unit.value;

  document.getElementById("f10op").value = output + " " + Unit;

  document.getElementById("f10").value = " ";
}
function f11calculate() {
  let num1 = +document.getElementById("f11-1").value;
  let num2 = +document.getElementById("f11-2").value;
  let num3 = +document.getElementById("f11-3").value;
  let Unit = unit.value;

  let output = 2 * num1 * num2 + 2 * num2 * num3 + 2 * num3 * num1;

  document.getElementById("f11op").value = output + " " + Unit;

  document.getElementById("f11-1").value = " ";
  document.getElementById("f11-2").value = " ";
  document.getElementById("f11-3").value = " ";
}
function f12calculate() {
  let num1 = +document.getElementById("f12-1").value;
  let num2 = +document.getElementById("f12-2").value;
  let num3 = +document.getElementById("f12-3").value;
  let num4 = +document.getElementById("f12-3").value;
  let Unit = unit.value;

  let output = num1 * num2 + num1 * num3 + num2 * num4;

  document.getElementById("f12op").value = output + " " + Unit;

  document.getElementById("f12-1").value = " ";
  document.getElementById("f12-2").value = " ";
  document.getElementById("f12-3").value = " ";
  document.getElementById("f12-4").value = " ";
}
function f13calculate() {
  let num1 = +document.getElementById("f13-1").value;
  let num2 = +document.getElementById("f13-2").value;
  let Unit = unit.value;

  let output = num1 ** 2 + 2 * num1 * num2;

  document.getElementById("f13op").value = output + " " + Unit;

  document.getElementById("f13-1").value = " ";
  document.getElementById("f13-2").value = " ";
}

//VOLUME ROW 2
function f14calculate() {
  let num1 = +document.getElementById("f14").value;
  let output = num1 ** 3;
  let Unit = unit.value;

  document.getElementById("f14op").value = output + " " + Unit;

  document.getElementById("f14").value = " ";
}
function f15calculate() {
  let num1 = +document.getElementById("f15-1").value;
  let num2 = +document.getElementById("f15-2").value;
  let num3 = +document.getElementById("f15-3").value;
  let Unit = unit.value;

  let output = num1 * num2 * num3;

  document.getElementById("f15op").value = output + " " + Unit;

  document.getElementById("f15-1").value = " ";
  document.getElementById("f15-2").value = " ";
  document.getElementById("f15-3").value = " ";
}
function f16calculate() {
  let num1 = +document.getElementById("f16-1").value;
  let num2 = +document.getElementById("f16-2").value;
  let num3 = +document.getElementById("f16-3").value;
  let Unit = unit.value;

  let output = (1 / 3) * num1 * num2 * num3;

  document.getElementById("f16op").value = output + " " + Unit;

  document.getElementById("f16-1").value = " ";
  document.getElementById("f16-2").value = " ";
  document.getElementById("f16-3").value = " ";
}
function f17calculate() {
  let num1 = +document.getElementById("f17-1").value;
  let num2 = +document.getElementById("f17-2").value;
  let Unit = unit.value;

  let output = (1 / 3) * num1 ** 2 * num2;

  document.getElementById("f17op").value = output + " " + Unit;

  document.getElementById("f17-1").value = " ";
  document.getElementById("f17-2").value = " ";
}

//SURFACE AREA ROW 2
function f18calculate() {
  let num1 = +document.getElementById("f18-1").value;
  let num2 = +document.getElementById("f18-2").value;
  let Unit = unit.value;

  let output = 2 * Math.PI * num1 ** 2 + 2 * Math.PI * num1 * num2;

  document.getElementById("f18op").value = output + " " + Unit;

  document.getElementById("f18-1").value = " ";
  document.getElementById("f18-2").value = " ";
}
function f19calculate() {
  let num1 = +document.getElementById("f19-1").value;
  let num2 = +document.getElementById("f19-2").value;
  let Unit = unit.value;

  let output = Math.PI * num1 ** 2 + Math.PI * num1 * num2;

  document.getElementById("f19op").value = output + " " + Unit;

  document.getElementById("f19-1").value = " ";
  document.getElementById("f19-2").value = " ";
}
function f20calculate() {
  let num1 = +document.getElementById("f20").value;
  let output = 4 * Math.PI * num1 ** 2;
  let Unit = unit.value;

  document.getElementById("f20op").value = output + " " + Unit;

  document.getElementById("f20").value = " ";
}
function f21calculate() {
  let num1 = +document.getElementById("f21").value;
  let output = 3 * Math.PI * num1 ** 2;
  let Unit = unit.value;

  document.getElementById("f21op").value = output + " " + Unit;

  document.getElementById("f21").value = " ";
}

//VOLUME ROW 2
function f22calculate() {
  let num1 = +document.getElementById("f22-1").value;
  let num2 = +document.getElementById("f22-2").value;
  let Unit = unit.value;

  let output = Math.PI * num1 ** 2 * num2;

  document.getElementById("f22op").value = output + " " + Unit;

  document.getElementById("f22-1").value = " ";
  document.getElementById("f22-2").value = " ";
}
function f23calculate() {
  let num1 = +document.getElementById("f23-1").value;
  let num2 = +document.getElementById("f23-2").value;
  let Unit = unit.value;

  let output = (1 / 3) * Math.PI * num1 ** 2 * num2;

  document.getElementById("f23op").value = output + " " + Unit;

  document.getElementById("f23-1").value = " ";
  document.getElementById("f23-2").value = " ";
}
function f24calculate() {
  let num1 = +document.getElementById("f24").value;
  let output = (4 / 3) * Math.PI * num1 ** 3;
  let Unit = unit.value;

  document.getElementById("f24op").value = output + " " + Unit;

  document.getElementById("f24").value = " ";
}
function f25calculate() {
  let num1 = +document.getElementById("f25").value;
  let output = (2 / 3) * Math.PI * num1 ** 3;
  let Unit = unit.value;

  document.getElementById("f25op").value = output + " " + Unit;

  document.getElementById("f25").value = " ";
}
