"use strict";

const display = document.querySelector("#display");
const calculator = document.querySelector("#calculator");
let firstNumber = 0;
let secondNumber = 0;
let resultNumber = 0;
let numberArray1 = [];
let numberArray2 = [];
let operator = "";

const listenToKeys = () => {
  calculator.addEventListener("click", (e) => {
    if (e.target.matches(".grid")) {
      let key = e.target;
      let action = key.dataset.action;

      if (!action) {
        console.log("Ziffer geklickt");
        console.log(key.dataset.value);
        if (operator === "") {
          firstNumber = showNumber1(key.dataset.value);
          display.innerHTML = firstNumber;
        } else {
          secondNumber = showNumber2(key.dataset.value);
          display.innerHTML = secondNumber;
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
        if (operator === "") {
          operator = key.dataset.action;
        } else {
          calculation(firstNumber, secondNumber);
          operator = key.dataset.action;
          numberArray1 = [];
          numberArray2 = [];
          firstNumber = resultNumber;
          secondNumber = 0;
        }
      }

      if (action === ".") {
        console.log("Dezimalpunkt geklickt");
        if (numberArray2.length == 0) {
          display.innerHTML = showNumber1(key.dataset.action);
        } else {
          display.innerHTML = showNumber2(key.dataset.action);
        }
      }

      if (action === "allClear") {
        console.log("AC-Taste gedrückt");
        reset();
      }

      if (action === "=") {
        calculation(firstNumber, secondNumber);
      }
    }
  });
};

const showNumber1 = (key) => {
  numberArray1.push(key);
  let numberOnDisplay1 = numberArray1.join("");
  return parseFloat(numberOnDisplay1);
};
const showNumber2 = (key) => {
  numberArray2.push(key);
  let numberOnDisplay2 = numberArray2.join("");
  return parseFloat(numberOnDisplay2);
};

const calculation = (num1, num2) => {
  if (operator === "+") {
    resultNumber = num1 + num2;
    display.innerHTML = resultNumber;
  } else if (operator === "-") {
    resultNumber = num1 - num2;
    display.innerHTML = resultNumber;
  } else if (operator === "x") {
    resultNumber = num1 * num2;
    display.innerHTML = resultNumber;
  } else if (operator === "/") {
    resultNumber = num1 / num2;
    display.innerHTML = resultNumber;
  }
};

const reset = () => {
  numberArray1 = [];
  numberArray2 = [];
  operator = "";
  display.innerHTML = 0;
};

listenToKeys();
