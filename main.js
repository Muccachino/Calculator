"use strict";

const display = document.querySelector("#display");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const point = document.querySelector("#point");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const allClear = document.querySelector("#allClear");
const result = document.querySelector("#result");
const allButtons = document.querySelectorAll(".grid");
const calculator = document.querySelector("#calculator");

const listenToKeys = () => {
  calculator.addEventListener("click", (e) => {
    if (e.target.matches(".grid")) {
      let key = e.target;
      let action = key.dataset.action;

      if (!action) {
        console.log("Ziffer geklickt");
        console.log(key.dataset.value);
        if (operator === "") {
          display.innerHTML = showNumber1(key.dataset.value);
        } else {
          display.innerHTML = showNumber2(key.dataset.value);
        }
      }

      if (
        action === "+" ||
        action === "-" ||
        action === "x" ||
        action === "/"
      ) {
        console.log("Operator geklickt");
        console.log(key.dataset.action);
        operator = key.dataset.action;
      }

      if (action === ".") {
        console.log("Dezimalpunkt geklickt");
        display.innerHTML = showNumber(key.dataset.action);
      }

      if (action === "allClear") {
        console.log("AC-Taste gedrückt");
      }

      if (action === "=") {
        calculation(showNumber1(), showNumber2());
      }
    }
  });
};

listenToKeys();

const numberArray1 = [];
const numberArray2 = [];
let operator = "";

const showNumber1 = (key) => {
  numberArray1.push(key);
  let numberOnDisplay1 = parseFloat(numberArray1.join(""));
  return numberOnDisplay1;
};
const showNumber2 = (key) => {
  numberArray2.push(key);
  let numberOnDisplay2 = parseFloat(numberArray2.join(""));
  return numberOnDisplay2;
};

const calculation = (num1, num2) => {
  if (operator === "+") {
    display.innerHTML = num1 + num2;
  } else if (operator === "-") {
    display.innerHTML = num1 - num2;
  } else if (operator === "x") {
    display.innerHTML = num1 * num2;
  } else if (operator === "/") {
    display.innerHTML = num1 / num2;
  }
};
