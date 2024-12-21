const calculator = document.querySelector(".calculator")
const digits = document.querySelectorAll(".operand")
const operators = document.querySelectorAll(".main-operator")
const clear = document.querySelector(".clear")
const result = document.querySelector(".result")
const add = document.querySelector(".add")
const subtract = document.querySelector(".subtract")
const multiply = document.querySelector(".multiply")
const divide = document.querySelector(".divide")
const assigner = document.querySelector(".assignment")
const divideByHundred = document.querySelector(".percent")
const plusMinus = document.querySelector(".plus-minus")
const dot = document.querySelector(".dot")


let newNumber = true
let sumSwitch = false
let subSwitch = false
let multiplySwitch = false
let divideSwitch = false
let stopFunction = false
let startFunction = true
let num1 = 0
let num2 = 0

function addition() {
    return num1 + num2
}

function subtraction() {
    return num1 - num2
}

function multiplication() {
    return num1 * num2
}

function division() {
    return num1 / num2
}

function displayNumberOne() {
    digits.forEach(digit => {
        digit.addEventListener("click", event => {
            target = event.target.textContent
            if (stopFunction) {
                return
            }
            else if (result.textContent.length === 10) {
                result.textContent = parseFloat(result.textContent) + 0
            }
            else if (result.textContent == "LOL") {
                result.textContent = target
            }
            else {
                result.textContent += target
            }
            return num1 = parseFloat(result.textContent)
        })
    })
}

function displayNumberTwo() {
    digits.forEach(digit => {
        digit.addEventListener("click", event => {
            target = event.target.textContent
            if (startFunction) {
                return
            }
            else if (result.textContent.length == 10) {
                result.textContent = parseFloat(result.textContent) + 0
            }
            else if (result.textContent == num1 && newNumber) {
                result.textContent = target
                newNumber = false
            }
            else {
                result.textContent += target
            }
            return num2 = parseFloat(result.textContent)
        })
    })
}


function sum() {
    add.addEventListener("click", event => {
        stopFunction = true
        startFunction = false
        sumSwitch = true
        newNumber = true
        if (subSwitch) {
            result.textContent = num1 - num2
            subSwitch = false
        }
        else if (multiplySwitch) {
            if (num2 == 0) {
                result.textContent = num1 * 1
            }
            else {
                result.textContent = num1 * num2
                multiplySwitch = false
            }
        }
        else if (divideSwitch) {
            if (num2 == 0) {
                result.textContent = num1 / 1
            }
            else {
                result.textContent = num1 / num2
                divideSwitch = false
            }
        }
        else if (sumSwitch == true && subSwitch == false && multiplySwitch == false && divideSwitch == false) {
            result.textContent = num1 + num2
        }
        num1 = parseFloat(result.textContent)
        num2 = 0
        if (result.textContent.length > 10) {
            result.textContent = (result.textContent).substring(0,10)
        }
    })
}

function subtracting() {
    subtract.addEventListener("click", event => {
        stopFunction = true
        startFunction = false
        subSwitch = true
        newNumber = true
        if (sumSwitch) {
            result.textContent = num1 + num2
            sumSwitch = false
        }
        else if (multiplySwitch) {
            if (num2 == 0) {
                result.textContent = num1 * 1
            }
            else {
                result.textContent = num1 * num2
                multiplySwitch = false
            }
        }
        else if (divideSwitch) {
            if (num2 == 0) {
                result.textContent = num1 / 1
            }
            else {
                result.textContent = num1 / num2
                divideSwitch = false
            }
        }
        else if (subSwitch == true && sumSwitch == false && multiplySwitch == false && divideSwitch == false) {
            result.textContent = num1 - num2
        }
        num1 = parseFloat(result.textContent)
        num2 = 0
        if (result.textContent.length > 10) {
            result.textContent = (result.textContent).substring(0,10)
        }
    })
}

function multiplier() {
    multiply.addEventListener("click", event => {
        stopFunction = true
        startFunction = false
        multiplySwitch = true
        newNumber = true
        if (num2 == 0) {
            result.textContent = num1 * 1
        }
        else if (subSwitch) {
            result.textContent = num1 - num2
            subSwitch = false
        }
        else if (sumSwitch) {
            result.textContent = num1 + num2
            sumSwitch = false
        }
        else if (divideSwitch) {
            if (num2 == 0) {
                result.textContent = num1 / 1
            }
            else {
                result.textContent = num1 / num2
                divideSwitch = false
            }
        }
        else if (multiplySwitch == true && sumSwitch == false && subSwitch == false && divideSwitch == false) {
            result.textContent = num1 * num2
        }
        num1 = parseFloat(result.textContent)
        num2 = 0
        if (result.textContent.length > 10) {
            result.textContent = (result.textContent).substring(0,10)
        }
    })
}

function divider() {
    divide.addEventListener("click", event => {
        stopFunction = true
        startFunction = false
        divideSwitch = true
        newNumber = true
        if (num2 == 0) {
            result.textContent = num1 / 1
        }
        else if (subSwitch) {
            result.textContent = num1 - num2
            subSwitch = false
        }
        else if (sumSwitch) {
            result.textContent = num1 + num2
            sumSwitch = false
        }
        else if (multiplySwitch) {
            if (num2 == 0) {
                result.textContent = num1 * 1
            }
            else {
                result.textContent = num1 * num2
                multiplySwitch = false
            }
        }
        else if (divideSwitch == true && sumSwitch == false && subSwitch == false && multiplySwitch == false) {
            result.textContent = num1 / num2
        }
        num1 = parseFloat(result.textContent)
        num2 = 0
        if (result.textContent.length > 10) {
            result.textContent = (result.textContent).substring(0,10)
        }
    })
}


function assign() {
    assigner.addEventListener("click", event => {
        if (stopFunction == false) {
            return
        }
        else if (sumSwitch) {
            addition()
            result.textContent = addition()
            sumSwitch = false
            subSwitch = false
            multiplySwitch = false
            divideSwitch = false
            newNumber = true
            num1 = parseFloat(result.textContent)
            num2 = 0
            if (result.textContent.length > 10) {
                result.textContent = (result.textContent).substring(0,10)
            }
        }
        else if (subSwitch) {
            subtraction()
            result.textContent = subtraction()
            subSwitch = false
            sumSwitch = false
            multiplySwitch = false
            divideSwitch = false
            newNumber = true
            num1 = parseFloat(result.textContent)
            num2 = 0
            if (result.textContent.length > 10) {
                result.textContent = (result.textContent).substring(0,10)
            }
        }
        else if (multiplySwitch) {
            multiplication()
            result.textContent = multiplication()
            multiplySwitch = false
            sumSwitch = false
            subSwitch = false
            divideSwitch = false
            newNumber = true
            num1 = parseFloat(result.textContent)
            num2 = 0
            if (result.textContent.length > 10) {
                result.textContent = (result.textContent).substring(0,10)
            }
        }
        else if (divideSwitch) {
            if (num2 == 0) {
                stopFunction = false
                startFunction = true
                num1 = 0
                num2 = 0
                result.textContent = "LOL"
                divideSwitch = false
                sumSwitch = false
                subSwitch = false
                multiplySwitch = false
                newNumber = true
            }
            else {
            division()
            result.textContent = division()
            divideSwitch = false
            sumSwitch = false
            subSwitch = false
            multiplySwitch = false
            newNumber = true
            num1 = parseFloat(result.textContent)
            num2 = 0
            if (result.textContent.length > 10) {
                result.textContent = (result.textContent).substring(0,10)
            }
        }}
    })
}

function clearance() {
    clear.addEventListener("click", event => {
        stopFunction = false
        startFunction = true
        sumSwitch = false
        subSwitch = false
        multiplySwitch = false
        divideSwitch = false
        newNumber = true
        result.textContent = ""
        num1 = 0
        num2 = 0
    })
}

function percentage() {
    divideByHundred.addEventListener("click", event => {
        if (stopFunction == false) {
            num1 /= 100
            if (result.textContent.length > 10) {
                result.textContent = ((result.textContent)/100).substring(0,10)
            }
            else {
                result.textContent /= 100
            }
        }
        else if (stopFunction == true) {
            num1 /= 100
            if (result.textContent.length > 10) {
                result.textContent = ((result.textContent)/100).substring(0,10)
            }
            else {
                result.textContent /= 100
            }
        }
    })
}

function changeSign() {
    plusMinus.addEventListener("click", event => {
        if (stopFunction == false) {
            num1 -= num1 * 2
        }
        else if (stopFunction == true) {
            num1 -= num1 * 2
        }
        result.textContent = num1
    })
}


function keyboardSupport() {
    document.addEventListener("keydown", event => {
        if (event.key == "Enter") {
            if (stopFunction == false) {
                return
            }
            else if (sumSwitch) {
                addition()
                result.textContent = addition()
                sumSwitch = false
                subSwitch = false
                multiplySwitch = false
                divideSwitch = false
                newNumber = true
                num1 = parseFloat(result.textContent)
                num2 = 0
                if (result.textContent.length > 10) {
                    result.textContent = (result.textContent).substring(0,10)
                }
            }
            else if (subSwitch) {
                subtraction()
                result.textContent = subtraction()
                subSwitch = false
                sumSwitch = false
                multiplySwitch = false
                divideSwitch = false
                newNumber = true
                num1 = parseFloat(result.textContent)
                num2 = 0
                if (result.textContent.length > 10) {
                    result.textContent = (result.textContent).substring(0,10)
                }
            }
            else if (multiplySwitch) {
                multiplication()
                result.textContent = multiplication()
                multiplySwitch = false
                sumSwitch = false
                subSwitch = false
                divideSwitch = false
                newNumber = true
                num1 = parseFloat(result.textContent)
                num2 = 0
                if (result.textContent.length > 10) {
                    result.textContent = (result.textContent).substring(0,10)
                }
            }
            else if (divideSwitch) {
                if (num2 == 0) {
                    stopFunction = false
                    startFunction = true
                    num1 = 0
                    num2 = 0
                    result.textContent = "LOL"
                    divideSwitch = false
                    sumSwitch = false
                    subSwitch = false
                    multiplySwitch = false
                    newNumber = true
                }
                else {
                division()
                result.textContent = division()
                divideSwitch = false
                sumSwitch = false
                subSwitch = false
                multiplySwitch = false
                newNumber = true
                num1 = parseFloat(result.textContent)
                num2 = 0
                if (result.textContent.length > 10) {
                    result.textContent = (result.textContent).substring(0,10)
                }
            }}
        }
        else if (event.key == "Backspace") {
            if (stopFunction == false) {
                bebo = result.textContent
                result.textContent = bebo.slice(0,bebo.length - 1)
                num1 = parseFloat(result.textContent)
            }
            else if (stopFunction == true && num2 == 0 && (num1 > 0 || num1 < 0)) {
                stopFunction = false
                startFunction = true
                sumSwitch = false
                subSwitch = false
                multiplySwitch = false
                divideSwitch = false
                newNumber = true
                result.textContent = ""
                num1 = 0
                num2 = 0
            }
            else if (stopFunction == true) {
                bebo = result.textContent
                result.textContent = bebo.slice(0,bebo.length - 1)
                num2 = parseFloat(result.textContent)
            }
        }
    })
}



function decimal() {
    dot.addEventListener("click", event => {
        target = event.target.textContent
        if (stopFunction == false) {
            if (result.textContent.includes(".")) {
                return
            }
            else {
                result.textContent += target
                num1 = parseFloat(result.textContent)
            }
        }
        if (stopFunction == true) {
            if (result.textContent.includes(".")) {
                return
            }
            else {
                result.textContent += target
                num2 = parseFloat(result.textContent)
            }
        }
    })
}





displayNumberOne()
displayNumberTwo()
assign()
sum()
multiplier()
divider()
subtracting()
clearance()
percentage()
changeSign()
keyboardSupport()
decimal()