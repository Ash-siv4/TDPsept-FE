'use strict';

const calcInput = document.getElementById("calcIn");// get input box element by it's ID of "calcIn"

//for loop so that you can enter double or more digit numbers
//since all the numbers have the same class identifier, the querySelectorAll returns all elements that match, when clicked
for (let numberButton of document.querySelectorAll("div#calc button.num")) {
    numberButton.addEventListener("click", function (event) {
        //if we are still clicking numbers, the following line updates the input box display to show all those numbers
        calcInput.value += event.target.innerText;

    });
}

//declared outside so that we can use/update these values within any functions we have
let firstNum;
let operator;

//same logic as the above for loop but this checks for operators clicked
for (let operatorButton of document.querySelectorAll("div#calc button.op")) {
    operatorButton.addEventListener("click", function (event) {
        //assign the input box value to the firstNum variable
        firstNum = calcInput.value;
        //grab the operator clicked(via it's text on the button) and store it in the operator variable
        operator = event.target.innerText;
        calcInput.value = "";

    });
}

//reset the input box so that it is empty
document.getElementById("clear").addEventListener("click", function () {
    calcInput.value = "";
});

//function to perform the operation when the equal button is clicked
document.getElementById("equal").addEventListener("click", function () {
    let secondNum = calcInput.value;
    let result;
    //match the operator detected from the for loop to it's relevant case to perform its operation
    switch (operator) {
        case "+":
            result = parseFloat(firstNum) + parseFloat(secondNum);
            break;
        case "-":
            result = firstNum - secondNum;
            break;
        case "*":
            result = firstNum * secondNum;
            break;
        case "/":
            result = firstNum / secondNum;
            break;
    }

    calcInput.value = result;//get the result of the operation and display it in the input box
  });