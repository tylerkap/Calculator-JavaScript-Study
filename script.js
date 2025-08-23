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


// calc.addEventListener('click', () => {
//     calc.style.top = "500px";
//     calc.style.left = "0px";

//     alert("Is this working?");
// });

