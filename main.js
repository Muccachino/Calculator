"use strict";

const display = document.querySelector("#display");
const minidisplay = document.querySelector("#minidisplay");
const calculator = document.querySelector("#calculator");
let firstNumber = 0;
let secondNumber = 0;
let resultNumber = 0;
let numberArray1 = [];
let numberArray2 = [];
let miniNumberArray = [];
let operator = "";

const listenToMouseClick = () => {
  calculator.addEventListener("click", (e) => {
    if (e.target.matches(".grid")) {
      let key = e.target;
      let action = key.dataset.action;

      if (!action) {
        if (operator === "") {
          firstNumber = showNumber1(key.dataset.value);
          display.innerHTML = firstNumber;
          minidisplay.innerHTML = showCalculation(key.dataset.value);
          secondNumber = 0;
        } else {
          secondNumber = showNumber2(key.dataset.value);
          display.innerHTML = secondNumber;
          minidisplay.innerHTML = showCalculation(key.dataset.value);
        }
      }

      if (
        action === "+" ||
        action === "-" ||
        action === "*" ||
        action === "/"
      ) {
        if (operator === "") {
          if (secondNumber === 0) {
            operator = key.dataset.action;
            minidisplay.innerHTML = showCalculation(operator);
          } else {
            operator = key.dataset.action;
            minidisplay.innerHTML = showCalculation(firstNumber);
            minidisplay.innerHTML = showCalculation(operator);
          }
        } else {
          calculation(firstNumber, secondNumber);
          operator = key.dataset.action;
          miniNumberArray = [resultNumber];
          minidisplay.innerHTML = showCalculation(operator);
          numberArray1 = [];
          numberArray2 = [];
          firstNumber = resultNumber;
          secondNumber = 0;
        }
      }

      if (action === ".") {
        if (numberArray2.length == 0) {
          display.innerHTML = showNumber1(key.dataset.action);
          minidisplay.innerHTML = showCalculation(key.dataset.action);
        } else {
          display.innerHTML = showNumber2(key.dataset.action);
          minidisplay.innerHTML = showCalculation(key.dataset.action);
        }
      }

      if (action === "allClear") {
        reset();
      }

      if (action === "=") {
        calculation(firstNumber, secondNumber);
        firstNumber = resultNumber;
        miniNumberArray = [];
        numberArray1 = [];
        numberArray2 = [];
        operator = "";
      }
    }
  });
};

document.addEventListener("keydown", (event) => {
  let keyboard = event.key;

  if (
    keyboard === "1" ||
    keyboard === "2" ||
    keyboard === "3" ||
    keyboard === "4" ||
    keyboard === "5" ||
    keyboard === "6" ||
    keyboard === "7" ||
    keyboard === "8" ||
    keyboard === "9" ||
    keyboard === "0"
  ) {
    if (operator === "") {
      firstNumber = showNumber1(keyboard);
      display.innerHTML = firstNumber;
      minidisplay.innerHTML = showCalculation(keyboard);
      secondNumber = 0;
    } else {
      secondNumber = showNumber2(keyboard);
      display.innerHTML = secondNumber;
      minidisplay.innerHTML = showCalculation(keyboard);
    }
  }

  if (
    keyboard === "+" ||
    keyboard === "-" ||
    keyboard === "*" ||
    keyboard === "/"
  ) {
    if (operator === "") {
      if (secondNumber === 0) {
        operator = keyboard;
        minidisplay.innerHTML = showCalculation(operator);
      } else {
        operator = keyboard;
        minidisplay.innerHTML = showCalculation(firstNumber);
        minidisplay.innerHTML = showCalculation(operator);
      }
    } else {
      calculation(firstNumber, secondNumber);
      operator = keyboard;
      miniNumberArray = [resultNumber];
      minidisplay.innerHTML = showCalculation(operator);
      numberArray1 = [];
      numberArray2 = [];
      firstNumber = resultNumber;
      secondNumber = 0;
    }
  }

  if (keyboard === ",") {
    if (numberArray2.length == 0) {
      display.innerHTML = showNumber1(".");
      minidisplay.innerHTML = showCalculation(".");
    } else {
      display.innerHTML = showNumber2(".");
      minidisplay.innerHTML = showCalculation(".");
    }
  }

  if (keyboard === "Delete") {
    reset();
  }

  if (keyboard === "Enter") {
    calculation(firstNumber, secondNumber);
    firstNumber = resultNumber;
    miniNumberArray = [];
    numberArray1 = [];
    numberArray2 = [];
    operator = "";
  }
});

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
    resultNumber = Math.round((num1 + num2 + Number.EPSILON) * 100) / 100;
    display.innerHTML = resultNumber;
  } else if (operator === "-") {
    resultNumber = Math.round((num1 - num2 + Number.EPSILON) * 100) / 100;
    display.innerHTML = resultNumber;
  } else if (operator === "*") {
    resultNumber = Math.round((num1 * num2 + Number.EPSILON) * 100) / 100;
    display.innerHTML = resultNumber;
  } else if (operator === "/") {
    resultNumber = Math.round((num1 / num2 + Number.EPSILON) * 100) / 100;
    display.innerHTML = resultNumber;
  }
};

const showCalculation = (number) => {
  miniNumberArray.push(number);
  let miniNumberOnDisplay = miniNumberArray.join("");
  return miniNumberOnDisplay;
};

const reset = () => {
  numberArray1 = [];
  numberArray2 = [];
  miniNumberArray = [];
  firstNumber = 0;
  secondNumber = 0;
  resultNumber = 0;
  operator = "";
  display.innerHTML = 0;
  minidisplay.innerHTML = "";
};

listenToMouseClick();

document.addEventListener("keydown", (event) => {
  let keyName = event.key;
  let keyCode = event.code;
  console.log("Key name is " + keyName + " and key code is " + keyCode);
  console.log(typeof keyName + " and " + typeof keyCode);
});
