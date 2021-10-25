'use strict';
// Create counter

let buttonMinus = document.createElement('button');
let minus = document.createTextNode('-');
buttonMinus.appendChild(minus);
document.querySelector('.counter').appendChild(buttonMinus);
buttonMinus.classList.add('min');

let count = document.createElement('p');
let number = document.createTextNode('0');
count.appendChild(number);
document.querySelector('.counter').appendChild(count);
count.classList.add('count')

let buttonPlus = document.createElement('button');
let plus = document.createTextNode('+');
buttonPlus.appendChild(plus);
document.querySelector('.counter').appendChild(buttonPlus);
buttonPlus.classList.add('plus');

let reset = document.createElement('button');
let textReset = document.createTextNode('Reset');
reset.appendChild(textReset);
document.querySelector('.container').appendChild(reset);
reset.classList.add('reset');

// Counter function and logic

let counter = 0;

// Minus
document.querySelector(".min").addEventListener('click', function () {

    if (counter > 0) {
        document.querySelector('.count').textContent = --counter;
    }

});
// Plus
document.querySelector(".plus").addEventListener('click', function () {

    document.querySelector('.count').textContent = ++counter;
});

// Reset
document.querySelector('.reset').addEventListener('click', function () {
    counter = 0;
    document.querySelector('.count').textContent = counter;
});