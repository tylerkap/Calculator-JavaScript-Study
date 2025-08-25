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
    return a / b;
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

console.log(header.offsetTop);
console.log(wrapper.offsetTop);


function mouseDown(e) {
    startX = e.clientX;
    startY = e.clientY;

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);


}

function mouseMove(e) {
    newX = startX - e.clientX;
    console.log(newX);
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
        console.log(temp);
        
        return temp.join('');
    }
}



//This code impelements the function of the calculator

let expressionArray = [];
let display = 0;
let currentNum = 0;

let resultDisplay = document.querySelector(".result");
let expressionDisplay = document.querySelector(".expression");
let numbers = document.querySelectorAll(".numbers");
let clearEntry = document.querySelector("#clear-entry");
let deleteBtn = document.querySelector("#delete");


clearEntry.addEventListener('click', () => {
    currentNum = 0;
    resultDisplay.textContent = "0";

    console.log(`3: This is the current number: ${currentNum}`);
});

deleteBtn.addEventListener('click', () => {
    let tempStr = resultDisplay.textContent.trim();
    let newString = removeNum(tempStr);
    console.log(tempStr);
    console.log(newString);

    currentNum = Number(newString);
    resultDisplay.textContent = newString;
});





numbers.forEach((button) => {
    button.addEventListener('click', () => {
        resultDisplay.textContent.trim()
        console.log(button.getAttribute("id"));

        let string = button.getAttribute("id");
        let num = Number(string.split("").pop());

        if(resultDisplay.textContent.trim() === "0") {
            currentNum = num;
            resultDisplay.textContent = currentNum.toString();
            console.log(`1: This is the current number: ${currentNum}`)
        }
        else {
            resultDisplay.textContent = resultDisplay.textContent + num;
            currentNum = Number(resultDisplay.textContent);

            console.log(`2: This is the current number: ${currentNum}`)
        }

        resultDisplay.textContent = currentNum.toString();

    })
});
