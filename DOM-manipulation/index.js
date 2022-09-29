"use strict";
//DOM MANIPULATION
const title = document.createElement("h1");//creating a h1 tag

title.innerText = "Let's manipulate the DOM";//adding the text inbetween the h1 tag

document.body.appendChild(title);//the h1 tag is going in the body tag

const div = document.getElementById("myDiv");//finding an element with id="myDiv"

console.log("target div:", div);//prints details of the tag

const newButton = document.createElement("button");//creates a button element

newButton.innerText = "PRESS ME";//update text of the button element

div.prepend(newButton);//adds the button to the div we got


const secondDiv = document.querySelector("body > div.divNoId");

console.log(secondDiv);

const para = document.querySelector("body > div.divNoId > p");
para.innerText = "hello";

para


//event handling
const greet = () => console.log("Hello World!");

newButton.onclick = greet;
newButton.addEventListener("click",greet);

