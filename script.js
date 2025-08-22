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



console.log(power(2, 8));

let newX = 0,  newY = 0, startX = 0, startY = 0;


let calc = document.querySelector(".calc-container");

calc.addEventListener('mousedown', mouseDown);

function mouseDown(e) {
    startX = e.clientX;
    startY = e.clientY;

    console.log(startX);
    console.log(startY);

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);


}

function mouseMove(e) {
    newX = startX - e.clientX;
    newY = startY - e.clientY;

    startX = e.clientX;
    startY = e.clientY;

    calc.style.top = (calc.offsetTop - newY) + 'px';
    calc.style.left = (calc.offsetLeft - newX) + 'px';

}

function mouseUp(e) {
    document.removeEventListener('mousemove', mouseMove);
}


// calc.addEventListener('click', () => {
//     calc.style.top = "500px";
//     calc.style.left = "0px";

//     alert("Is this working?");
// });

