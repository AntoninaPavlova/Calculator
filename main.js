"use strict";

// Задача: необходимо реализовать калькулятор с возможностью сложения, вычитания, умножения и деления чисел.
// Реализация: При помощи методов JavaScript и манипуляций с DOM деревом.
// Совет: необходимо использовать document.querySelector или document.getElementById.
// Дизайн: На свой вкус :)

// CONST
const displayInput = document.querySelector(".calculator__display-input");
const displayResult = document.querySelector(".calculator__display-result");

const buttonDivide = document.querySelector(".button-divide"); // кнопка деления
const buttonMultiply = document.querySelector(".button-multiply"); // кнопка умножения
const buttonSubtract = document.querySelector(".button-subtract"); // кнопка вычетания
const buttonAdd = document.querySelector(".button-add"); // кнопка сложения

const buttonZero = document.querySelector(".button-zero");
const buttonOne = document.querySelector(".button-one");
const buttonTwo = document.querySelector(".button-two");
const buttonThree = document.querySelector(".button-three");
const buttonFour = document.querySelector(".button-four");
const buttonFive = document.querySelector(".button-five");
const buttonSix = document.querySelector(".button-six");
const buttonSeven = document.querySelector(".button-seven");
const buttonEight = document.querySelector(".button-eight");
const buttonNine = document.querySelector(".button-nine");
const buttonPoint = document.querySelector(".button-point");

const buttonEquals = document.querySelector(".button-equals"); // кнопка равно
const buttonClear = document.querySelector(".button-clear"); // кнопка очистить

// VARIABLES
let isNumberEntered = false;
let isOperatorEntered = false;

// FUNCTIONS
// Функция для добавления числа или точки
const addNumber = (number) => {
  displayResult.value === "0" && number !== "." ? (displayResult.value = number) : (displayResult.value += number);

  isNumberEntered = true;
  isOperatorEntered = false;
};

// Функция для добавления операции
const addOperation = (operation) => {
  isNumberEntered && !isOperatorEntered
    ? ((displayResult.value += operation), (isOperatorEntered = true))
    : (displayResult.value = displayResult.value.slice(0, -1) + operation);
};

// Функция для вычисления результата
const calculateResult = () => {
  displayInput.value = displayResult.value;
  displayResult.value = eval(displayResult.value);
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
