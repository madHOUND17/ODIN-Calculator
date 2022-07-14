const calculation = document.querySelector(".calculation");
const number = document.querySelector(".number");

const numbers = document.querySelectorAll(".btn-num");
const operators = document.querySelectorAll(".btn-operator");
const dot = document.querySelector(".dot");
const plusMinus = document.querySelector(".plus-minus");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const clearAll = document.querySelector(".clear-all");

let numberOne = 0, numberTwo = 0;
let operationNum = 0;
let isOperatorPressed = false;
let hasDot = false;
let isNegative = false;

calculation.textContent = "";
number.textContent = "";

numbers.forEach(num => {
    num.addEventListener("click", () => {
        if (isOperatorPressed)
            number.textContent = "";

        if (num.classList.contains("one"))
            number.textContent += "1";
        else if (num.classList.contains("two"))
            number.textContent += "2";
        else if (num.classList.contains("three"))
            number.textContent += "3";
        else if (num.classList.contains("four"))
            number.textContent += "4";
        else if (num.classList.contains("five"))
            number.textContent += "5";
        else if (num.classList.contains("six"))
            number.textContent += "6";
        else if (num.classList.contains("seven"))
            number.textContent += "7";
        else if (num.classList.contains("eight"))
            number.textContent += "8";
        else if (num.classList.contains("nine"))
            number.textContent += "9";
        else if (num.classList.contains("zero"))
            number.textContent += "0";
    });
});

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        if (operator.classList.contains("plus")) {
            operationNum = 1;
        }
        else if (operator.classList.contains("minus")) {
            operationNum = 2;
        }
        else if (operator.classList.contains("multiply")) {
            operationNum = 3;
        }
        else if (operator.classList.contains("divide")) {
            operationNum = 4;
        }
    });
});

dot.addEventListener("click", () => {
    if (!hasDot) {
        hasDot = true;
        number.textContent = ".";
    }
});

plusMinus.addEventListener("click", () => {
    if (!isNegative) {
        isNegative = true;
        number.textContent = "-" + number.textContent;
    }
    else {
        isNegative = false;
        number.textContent = number.textContent.slice(1);
    }
});

clear.addEventListener("click", () => {
    if (number.textContent.length != 0) {
        if (number.textContent[number.textContent.length - 1] == ".") {
            hasDot = false;
        }
        else if (number.textContent[number.textContent.length - 1] == "-") {
            isNegative = false;
        }
        
        number.textContent = number.textContent.slice(1, number.textContent.length - 1);
    }
});

clearAll.addEventListener("click", () => {
    numberOne = 0;
    numberTwo = 0;
    operationNum = 0;
    isOperatorPressed = false;
    hasDot = false;
    isNegative = false;

    calculation.textContent = "";
    number.textContent = "";
});