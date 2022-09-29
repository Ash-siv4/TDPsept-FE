"use strict";

//Create a function that creates a paragraph tag
const makePara = () => {
    const newPara = document.createElement("p");
    newPara.id = "paraID";
    newPara.innerText = "New paragraph made";
    document.body.appendChild(newPara);
}

makePara();

//Create another funtion that changes the text of that paragraph tag to what is in a textbox
const updatePara = () => {
    const existingPara = document.getElementById("paraID");//grab id of exising paragraph tag
    console.log(existingPara);
    const newTextValue = document.getElementById("paraText").value;//grab id of input box and get the value inside it
    console.log(newTextValue,"- value in box");
    const newText = document.getElementById("paraText");//grab id of input box and get the value inside it
    console.log(newText," - the element");
    existingPara.innerText= newText;//assign input box text to the existing paragrah tag
}

//Create another function that deletes the paragraph tag

const deletePara = () => {
    const existPara = document.getElementById("paraID");//grab id of exising paragraph tag
    existPara.remove();
}

// deletePara();