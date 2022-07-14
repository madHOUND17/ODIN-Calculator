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
let isNegative = false;
let deleteNum = false;

calculation.textContent = "";
number.textContent = "";

function checkDot() {
    for (let i = 0; i < number.textContent.length; i++) {
        if (number.textContent[i] == ".")
            return true;
    }
    return false;
}


numbers.forEach(num => {
    num.addEventListener("click", () => {
        if (deleteNum) {
            number.textContent = "";
            deleteNum = false;
        }

        if (isOperatorPressed) {
            if (operationNum === 1) {
                calculation.textContent = numberOne + " + ";
            }
            else if (operationNum === 2) {
                calculation.textContent = numberOne + " - ";
            }
            else if (operationNum === 3) {
                calculation.textContent = numberOne + " × ";
            }   
            else if (operationNum === 4) {
                calculation.textContent = numberOne + " ÷ ";
            }
        }

        if (num.classList.contains("one")) {
            number.textContent += "1";
        }
        else if (num.classList.contains("two")) {
            number.textContent += "2";
        }
        else if (num.classList.contains("three")) {
            number.textContent += "3";
        }
        else if (num.classList.contains("four")) {
            number.textContent += "4";
        }
        else if (num.classList.contains("five")) {
            number.textContent += "5";
        }
        else if (num.classList.contains("six")) {
            number.textContent += "6";
        }
        else if (num.classList.contains("seven")) {
            number.textContent += "7";
        }
        else if (num.classList.contains("eight")) {
            number.textContent += "8";
        }
        else if (num.classList.contains("nine")) {
            number.textContent += "9";
        }
        else if (num.classList.contains("zero")) {
            number.textContent += "0";
        }
    });
});

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        if (operator.classList.contains("plus")) {
            operationNum = 1;
            isOperatorPressed = true;
        }
        else if (operator.classList.contains("minus")) {
            operationNum = 2;
            isOperatorPressed = true;
        }
        else if (operator.classList.contains("multiply")) {
            operationNum = 3;
            isOperatorPressed = true;
        }
        else if (operator.classList.contains("divide")) {
            operationNum = 4;
            isOperatorPressed = true;
        }
        numberOne = parseFloat(number.textContent);
        deleteNum = true;
    });
});

dot.addEventListener("click", () => {
    if (!checkDot()) {
        number.textContent += ".";
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
        number.textContent = number.textContent.slice(0, number.textContent.length - 1);
    }
});

clearAll.addEventListener("click", () => {
    numberOne = 0;
    numberTwo = 0;
    operationNum = 0;
    isOperatorPressed = false;
    isNegative = false;

    calculation.textContent = "";
    number.textContent = "";
});

equal.addEventListener("click", () => {
    if (isOperatorPressed) {
        numberTwo = parseFloat(number.textContent);
        calculation.textContent += numberTwo;

        if (operationNum === 4 && numberTwo === 0) {
            number.textContent = "ERROR";
        }
        else if (operationNum === 1) {
            number.textContent = (numberOne + numberTwo);
        }
        else if (operationNum === 2) {
            number.textContent = (numberOne - numberTwo);
        }
        else if (operationNum === 3) {
            number.textContent = (numberOne * numberTwo);
        }
        else if (operationNum === 4) {
            number.textContent = (numberOne / numberTwo);
        }

        numberOne = parseFloat(number.textContent);
        numberTwo = 0;
        isOperatorPressed = false;
    }
});