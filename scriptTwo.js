// Selectors
const calculator = document.querySelector(".calculator");
const digits = document.querySelectorAll(".operand");
const operators = document.querySelectorAll(".main-operator");
const clear = document.querySelector(".clear");
const result = document.querySelector(".result");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const assigner = document.querySelector(".assignment");
const divideByHundred = document.querySelector(".percent");
const plusMinus = document.querySelector(".plus-minus");
const dot = document.querySelector(".dot");

// State variables
let newNumber = true;
let operation = null;
let stopFunction = false;
let num1 = 0;
let num2 = 0;

// Utility functions
const performOperation = () => {
    if (!operation || stopFunction) return;

    switch (operation) {
        case "add":
            num1 += num2;
            break;
        case "subtract":
            num1 -= num2;
            break;
        case "multiply":
            num1 *= num2;
            break;
        case "divide":
            num1 = num2 === 0 ? "LOL" : num1 / num2;
            break;
    }

    updateResult(num1);
    resetForNextOperation();
};

const resetForNextOperation = () => {
    operation = null;
    newNumber = true;
    num2 = 0;
};

const updateResult = (value) => {
    if (value === "LOL") {
        result.textContent = "LOL";
        stopFunction = true;
        return;
    }

    const stringValue = value.toString();
    result.textContent = stringValue.length > 10 ? stringValue.slice(0, 10) : stringValue;
};

const clearCalculator = () => {
    num1 = 0;
    num2 = 0;
    operation = null;
    stopFunction = false;
    newNumber = true;
    updateResult("");
};

// Event handlers
const handleDigitClick = (digit) => {
    if (stopFunction) return;

    const target = digit.textContent;
    if (newNumber) {
        result.textContent = target;
        newNumber = false;
    } else if (result.textContent.length < 10) {
        result.textContent += target;
    }

    if (!operation) {
        num1 = parseFloat(result.textContent);
    } else {
        num2 = parseFloat(result.textContent);
    }
};

const handleOperatorClick = (operator) => {
    if (stopFunction) return;

    if (operation) performOperation();

    operation = operator;
    newNumber = true;
};

const handleAssign = () => {
    performOperation();
};

const handleClear = () => {
    clearCalculator();
};

const handlePercentage = () => {
    if (stopFunction) return;
    num1 /= 100;
    updateResult(num1);
};

const handlePlusMinus = () => {
    if (stopFunction) return;
    num1 *= -1;
    updateResult(num1);
};

const handleDecimal = () => {
    if (!result.textContent.includes(".")) {
        result.textContent += ".";
        if (!operation) {
            num1 = parseFloat(result.textContent);
        } else {
            num2 = parseFloat(result.textContent);
        }
    }
};

// Attach event listeners
digits.forEach((digit) => digit.addEventListener("click", () => handleDigitClick(digit)));
add.addEventListener("click", () => handleOperatorClick("add"));
subtract.addEventListener("click", () => handleOperatorClick("subtract"));
multiply.addEventListener("click", () => handleOperatorClick("multiply"));
divide.addEventListener("click", () => handleOperatorClick("divide"));
assigner.addEventListener("click", handleAssign);
clear.addEventListener("click", handleClear);
divideByHundred.addEventListener("click", handlePercentage);
plusMinus.addEventListener("click", handlePlusMinus);
dot.addEventListener("click", handleDecimal);

// Add keyboard support
document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (!isNaN(key)) {
        handleDigitClick({ textContent: key });
    } else if (key === "Enter") {
        handleAssign();
    } else if (key === "+") {
        handleOperatorClick("add");
    } else if (key === "-") {
        handleOperatorClick("subtract");
    } else if (key === "*") {
        handleOperatorClick("multiply");
    } else if (key === "/") {
        handleOperatorClick("divide");
    } else if (key === "Backspace") {
        handleClear();
    } else if (key === "%") {
        handlePercentage();
    } else if (key === ".") {
        handleDecimal();
    }
});
