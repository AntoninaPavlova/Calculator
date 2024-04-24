"use strict";

// Задача: необходимо реализовать калькулятор с возможностью сложения, вычитания, умножения и деления чисел.
// Реализация: При помощи методов JavaScript и манипуляций с DOM деревом.
// Совет: необходимо использовать document.querySelector или document.getElementById.
// Дизайн: На свой вкус :)

// CONST
const displayInput = document.getElementById("display-input");
const displayResult = document.getElementById("display-result");

const buttonDivide = document.getElementById("button-divide"); 
const buttonMultiply = document.getElementById("button-multiply"); 
const buttonSubtract = document.getElementById("button-subtract"); 
const buttonAdd = document.getElementById("button-add"); 

const buttonZero = document.getElementById("button-zero");
const buttonOne = document.getElementById("button-one");
const buttonTwo = document.getElementById("button-two");
const buttonThree = document.getElementById("button-three");
const buttonFour = document.getElementById("button-four");
const buttonFive = document.getElementById("button-five");
const buttonSix = document.getElementById("button-six");
const buttonSeven = document.getElementById("button-seven");
const buttonEight = document.getElementById("button-eight");
const buttonNine = document.getElementById("button-nine");
const buttonPoint = document.getElementById("button-point");

const buttonEquals = document.getElementById("button-equals"); 
const buttonClear = document.getElementById("button-clear"); 

// VARIABLES
let isNumberEntered = false;
let isOperatorEntered = false;

// FUNCTIONS
// Функция для добавления числа или точки
const addNumber = (number) => {
  const isZeroAndNoPoint = displayResult.value === "0" && number !== ".";

  if (isZeroAndNoPoint) {
    displayResult.value = number;
  } else {
    displayResult.value += number;
  }

  isNumberEntered = true;
  isOperatorEntered = false;
};

// Функция для добавления операции
const addOperation = (operation) => {
  const isNumberAndNotOperator = isNumberEntered && !isOperatorEntered;
  const updatedDisplayValue = displayResult.value.slice(0, -1) + operation;

  if (isNumberAndNotOperator) {
    displayResult.value += operation;
    isOperatorEntered = true;
  } else {
    displayResult.value = updatedDisplayValue;
  }
};

// Функция для вычисления результата
const calculateResult = () => {
  // Лучше .value добавить при объявлении переменной
  displayInput.value = displayResult.value;
  displayResult.value = parseFloat((Math.round(eval(displayResult.value) * 10000) / 10000).toFixed(4));
};

// Функция для очистки результатов и текущего ввода
const clearResult = () => {
  displayInput.value = "";
  displayResult.value = "0";

  isNumberEntered = false;
  isOperatorEntered = false;
};

// LISTENERS
buttonDivide.addEventListener("click", () => addOperation("/"));
buttonMultiply.addEventListener("click", () => addOperation("*"));
buttonSubtract.addEventListener("click", () => addOperation("-"));
buttonAdd.addEventListener("click", () => addOperation("+"));

buttonZero.addEventListener("click", () => addNumber(0));
buttonOne.addEventListener("click", () => addNumber(1));
buttonTwo.addEventListener("click", () => addNumber(2));
buttonThree.addEventListener("click", () => addNumber(3));
buttonFour.addEventListener("click", () => addNumber(4));
buttonFive.addEventListener("click", () => addNumber(5));
buttonSix.addEventListener("click", () => addNumber(6));
buttonSeven.addEventListener("click", () => addNumber(7));
buttonEight.addEventListener("click", () => addNumber(8));
buttonNine.addEventListener("click", () => addNumber(9));
buttonPoint.addEventListener("click", () => addNumber("."));

buttonEquals.addEventListener("click", calculateResult);
buttonClear.addEventListener("click", clearResult);
