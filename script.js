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

function addCommas(string) {
    if (string.includes(",")) {

        string = removeCommas(string);
    }

    
    
    if (string.length > 3) {
        let count = 0;
        let size = string.indexOf(".");

        if (string.includes(".")) {

            for (let i = size - 1; i >= 1; i--) {
                if (count === 2) {
                    string = string.slice(0, i) + ',' + string.slice(i);
                    count = 0;
                }
                else {
                    count++
                }
            }


        }
        else {

            for (let i = string.length - 1; i >= 1; i--) {
                if (count === 2) {
                    string = string.slice(0, i) + ',' + string.slice(i);
                    count = 0;
                }
                else {
                    count++
                }
            }
        }
        
        return string;
    }
    else {
        return string;
    }
}

function removeCommas(string) {
    let tempArr = string.split('');
    
    tempArr.forEach((char, index) => {
        if (char === ",") {
            tempArr.splice(index, 1);
        }
    })

    let newString = tempArr.join('');

    return newString;
}

let testStr = "100000";
let newString = addCommas(testStr);
let removeC = removeCommas(newString);

console.log(newString);
console.log(Number(removeC));



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
let fractionBtn = document.querySelector("#fraction");
let percentageBtn = document.querySelector("#percentage");


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
        currentNum = currentNum * - 1;
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
    let num = Number(removeCommas(resultDisplay.textContent));
    
    if (num >= 0) {
        result = Math.sqrt(num);
        expressionDisplay.textContent = `sqrt(${resultDisplay.textContent}) =`;
        resultDisplay.textContent = addCommas(result.toString());
    }
    else {
        expressionDisplay.textContent = "Enter a positve number";
    }
});

powerBtn.addEventListener('click', () => {
    expressionDisplay.textContent = `${resultDisplay.textContent} ^`
    previousNum = Number(removeCommas(resultDisplay.textContent));
    resultDisplay.textContent = "0";
})

fractionBtn.addEventListener('click', () => {
    let num = Number(removeCommas(resultDisplay.textContent));
    
    if (num !== 0) {
        let result = 1 / num;
        //expressionDisplay.textContent = `1 / ${num} =`;
        resultDisplay.textContent = addCommas(result.toString());
    }

})

percentageBtn.addEventListener('click', () => {
    let num = Number(removeCommas(resultDisplay.textContent));
   
    if (num > 0) {
        let result = num / 100;
    
        //expressionDisplay.textContent = `${num} / 100 =`;
        resultDisplay.textContent = addCommas(result.toString());
    }
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
            let newStr = resultDisplay.textContent + num;
            console.log(newStr);
            console.log(addCommas(newStr));
            resultDisplay.textContent = addCommas(newStr);
        }
    })
});

plusBtn.addEventListener('click', () => {
    expressionDisplay.textContent = `${resultDisplay.textContent} +`
    previousNum = Number(removeCommas(resultDisplay.textContent));
    resultDisplay.textContent = "0";
});

subtractBtn.addEventListener('click', () => {
    expressionDisplay.textContent = `${resultDisplay.textContent} -`;
    previousNum = Number(removeCommas(resultDisplay.textContent));
    resultDisplay.textContent = "0";
});

multiplyBtn.addEventListener('click', () => {
    expressionDisplay.textContent = `${resultDisplay.textContent} x`;
    previousNum = Number(removeCommas(resultDisplay.textContent));
    resultDisplay.textContent = "0";
});

divideBtn.addEventListener('click', () => {
    expressionDisplay.textContent = `${resultDisplay.textContent} /`
    previousNum = Number(removeCommas(resultDisplay.textContent));
    resultDisplay.textContent = "0";
});


equalBtn.addEventListener('click', () => {

    if (expressionDisplay.textContent.includes("=")) {

    }
    else if (expressionDisplay.textContent.includes("x")) {
        expressionDisplay.textContent += ` ${resultDisplay.textContent} =`;
        currentNum = Number(removeCommas(resultDisplay.textContent));
        let result = multiply(previousNum, currentNum);
        resultDisplay.textContent = addCommas(result.toString());
        currentNum = result;
        previousNum = 0;
    }
    else if (expressionDisplay.textContent.includes("/")) {
        expressionDisplay.textContent += ` ${resultDisplay.textContent} =`;
        currentNum = Number(removeCommas(resultDisplay.textContent));
        let result = division(previousNum, currentNum);
        resultDisplay.textContent = addCommas(result.toString());
        currentNum = result;
        previousNum = 0;
    }
    else if (expressionDisplay.textContent.includes("+")) {
        expressionDisplay.textContent += ` ${resultDisplay.textContent} =`;
        currentNum = Number(removeCommas(resultDisplay.textContent));
        let result = addition(previousNum, currentNum);
        resultDisplay.textContent = addCommas(result.toString());
        currentNum = result;
        previousNum = 0;
    }
    else if (expressionDisplay.textContent.includes("-")) {
        expressionDisplay.textContent += ` ${resultDisplay.textContent} =`;
        currentNum = Number(removeCommas(resultDisplay.textContent));
        let result = subtraction(previousNum, currentNum);
        resultDisplay.textContent = addCommas(result.toString());
        
        currentNum = result;
        previousNum = 0;
    }
    else if (expressionDisplay.textContent.includes("^")) {
        currentNum = Number(removeCommas(resultDisplay.textContent));
        
        if (currentNum >= 0) {
            expressionDisplay.textContent += ` ${resultDisplay.textContent} =`;
            let result = power(previousNum, currentNum);
            resultDisplay.textContent = addCommas(result.toString());
            currentNum = result;
            previousNum = 0;
        }
    }
});


