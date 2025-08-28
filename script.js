function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function division(a, b) {
    let result = a / b;

    // alert(result);

    // if (result % 1 !== 0) {
    //     alert("HIS LS:KDJFL");
    //     result = result.toFixed(2);
    // }

    // alert(result);

    return result;
}

function power(base, exponent) {

    if (exponent === 0) {
        return 1;
    }
    else if (exponent === 1) {
        return base;
    }
    else {
        return base * (power(base, exponent - 1));
    }
}



//Below is the code for the drag and drop feature

let newX = 0,  newY = 0, startX = 0, startY = 0;
let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

let calc = document.querySelector(".calc-container");
let wrapper = document.querySelector(".wrapper");
let header = document.querySelector(".header");

header.addEventListener('mousedown', mouseDown);

function mouseDown(e) {
    startX = e.clientX;
    startY = e.clientY;

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);


}

function mouseMove(e) {
    newX = startX - e.clientX;
    newY = startY - e.clientY;

    startX = e.clientX;
    startY = e.clientY;

    calc.style.top = (calc.offsetTop - newY) + "px";
    calc.style.left = (calc.offsetLeft - newX) + "px";

}
    
function mouseUp(e) {
    document.removeEventListener('mousemove', mouseMove);
}

function removeNum(string) {
    
    if (string.length === 1) {
        string = "0";
        return string;
    }
    else {
            
        let temp = string.split('');
        temp.pop(); 
        return temp.join('');
    }
}



//This code impelements the function of the calculator

let previousNum = 0;
let display = 0;
let currentNum = 0;

let resultDisplay = document.querySelector(".result");
let expressionDisplay = document.querySelector(".expression");
let numbers = document.querySelectorAll(".numbers");
let clearEntry = document.querySelector("#clear-entry");
let deleteBtn = document.querySelector("#delete");
let plusBtn = document.querySelector("#plus");
let equalBtn = document.querySelector("#equal");
let subtractBtn = document.querySelector("#subtract");
let multiplyBtn = document.querySelector("#multiply");
let divideBtn = document.querySelector("#divide");
let clearBtn = document.querySelector("#clear");
let posNegBtn = document.querySelector("#positive-negative");
let decimalBtn = document.querySelector("#decimal");
let squareRootBtn = document.querySelector("#square-root");
let powerBtn = document.querySelector("#power");


clearEntry.addEventListener('click', () => {
    currentNum = 0;
    resultDisplay.textContent = "0";
});

clearBtn.addEventListener('click', () => {
    previousNum = 0;
    currentNum = 0;
    expressionDisplay.textContent = "";
    resultDisplay.textContent = "0";

});

deleteBtn.addEventListener('click', () => {
    let tempStr = resultDisplay.textContent.trim();

    if (tempStr === "NaN") {
        resultDisplay.textContent = "0";
        expressionDisplay.textContent = "";
    }
    else {
        let newString = removeNum(tempStr);
    
        currentNum = Number(newString);
        resultDisplay.textContent = newString;
    }
});

posNegBtn.addEventListener('click', () => {
    if (resultDisplay.textContent[0] === "-") {
        currentNum = Number(resultDisplay.textContent);
        currentNum = Math.abs(currentNum);
        resultDisplay.textContent = currentNum.toString();
    }
    else {
        currentNum = Number(resultDisplay.textContent);
        currentNum = currentNum * -1;
        resultDisplay.textContent = currentNum.toString();
    }
});

decimalBtn.addEventListener('click', () => {
    if (!resultDisplay.textContent.includes(".")) {
        resultDisplay.textContent += ".";
    }
});

squareRootBtn.addEventListener('click', () => {
    let result = 0;
    let num = Number(resultDisplay.textContent);
    
    if (num >= 0) {
        result = Math.sqrt(num);
        expressionDisplay.textContent = `sqrt(${num}) =`;
        resultDisplay.textContent = result.toString();
    }
    else {
        expressionDisplay.textContent = "Enter a positve number";
    }
});

powerBtn.addEventListener('click', () => {
    previousNum = Number(resultDisplay.textContent);
    expressionDisplay.textContent = `${previousNum} ^`
    resultDisplay.textContent = "0";
})

numbers.forEach((button) => {
    button.addEventListener('click', () => {
        resultDisplay.textContent.trim()
        let string = button.getAttribute("id");
        let num = Number(string.split("").pop());

        if (expressionDisplay.textContent.includes("=")) {
            expressionDisplay.textContent = "";
            resultDisplay.textContent =  num.toString();
            
        }
        else if (resultDisplay.textContent.trim() === "0") {
            resultDisplay.textContent = num.toString();
        }
        else {
            resultDisplay.textContent = resultDisplay.textContent + num;
            resultDisplay.textContent = resultDisplay.textContent;
        }
    })
});

plusBtn.addEventListener('click', () => {
    previousNum = Number(resultDisplay.textContent);
    expressionDisplay.textContent = `${previousNum} +`
    resultDisplay.textContent = "0";
});

subtractBtn.addEventListener('click', () => {
    previousNum = Number(resultDisplay.textContent);
    expressionDisplay.textContent = `${previousNum} -`
    resultDisplay.textContent = "0";
});

multiplyBtn.addEventListener('click', () => {
    previousNum = Number(resultDisplay.textContent);
    expressionDisplay.textContent = `${previousNum} x`
    resultDisplay.textContent = "0";
});

divideBtn.addEventListener('click', () => {
    previousNum = Number(resultDisplay.textContent);
    expressionDisplay.textContent = `${previousNum} /`
    resultDisplay.textContent = "0";
});




equalBtn.addEventListener('click', () => {

    if (expressionDisplay.textContent.includes("=")) {

    }
    else if (expressionDisplay.textContent.includes("x")) {
        currentNum = Number(resultDisplay.textContent);
        let result = multiply(previousNum, currentNum);
        resultDisplay.textContent = result.toString();
        expressionDisplay.textContent += ` ${currentNum} =`;
        currentNum = result;
        previousNum = 0;
    }
    else if (expressionDisplay.textContent.includes("/")) {
        currentNum = Number(resultDisplay.textContent);
        let result = division(previousNum, currentNum);
        resultDisplay.textContent = result.toString();
        expressionDisplay.textContent += ` ${currentNum} =`;
        currentNum = result;
        previousNum = 0;
    }
    else if (expressionDisplay.textContent.includes("+")) {
        currentNum = Number(resultDisplay.textContent);
        let result = addition(previousNum, currentNum);
        resultDisplay.textContent = result.toString();
        expressionDisplay.textContent += ` ${currentNum} =`;
        currentNum = result;
        previousNum = 0;
    }
    else if (expressionDisplay.textContent.includes("-")) {
        currentNum = Number(resultDisplay.textContent);
        let result = subtraction(previousNum, currentNum);
        resultDisplay.textContent = result.toString();
        expressionDisplay.textContent += ` ${currentNum} =`;
        currentNum = result;
        previousNum = 0;
    }
    else if (expressionDisplay.textContent.includes("^")) {
        currentNum = Number(resultDisplay.textContent);
        
        if (currentNum >= 0) {
            let result = power(previousNum, currentNum);
            resultDisplay.textContent = result.toString();
            expressionDisplay.textContent += ` ${currentNum} =`;
            currentNum = result;
            previousNum = 0;
        }
    }
   
   
});


