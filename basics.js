
//Console outputs
console.log("hello world"); // print -informational
console.error("Hi I am an error"); //log errors in your code
console.warn("warning"); //warning, not an error
console.group("hellos"); //groups together multiple console outputs
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.groupEnd();

//Variables - containers for information
//There are 3 specific ways to declare variables:
//const - constant, once assigned a value, it is not changed
//let - block scoped variable, can update it's value
//var  - DO NOT USE
let a = "abc";
console.log("type of a:",typeof a);
console.log("value:", a)
a =123;
console.log("type of a:",typeof a);
console.log("value:", a)

//Data Types
// string, boolean, symbol, null, bigint, undefined, number, nAn
console.log(typeof(true));

//Operators
// +, -, /, * , %
// >, <, >=, <=
// && -and ||-or --logical
//&  | -- bitwise
//= - assignment
//== - compares and checks equality of values 
//=== - check equality of values but also their data types - strict mode
console.log(1 == "1"); //true - checks value not data type
console.log(1 === "1"); //false
//! - not
let x = 2;//type is number, value is 2
let y = "2";//type is string, value is 2
console.log(typeof x);
console.log(typeof y);
console.log(x == y);//true
console.log(x === y);//false

//Iteration - loops, when you have a set of instructions you want to do repeatedly for a certain amount of time
//3 types of loops:
//- for loop - use when you know how many times you want the loop to execute
// use the below 2 loops when you don't know how many times the loop will run because it is dependent on some other condition
// - while loop - only executes when the given condition is true
// - do while loop - executes at least oncem regardless of if the condition is true

//for(initialisation;condition;iterator){statements}
for(let i=0; i<=10; i+=2){
    console.log(i);
    // i += 2; // i = i + 2;
}

let i = 21;

//while loop
while(i>20){
    console.log("while loop");
    i--;
}

//do-while loop
do{
    console.log("do while loop");
}while(i>20);


//Conditionals
//truthy & falsey - all values have an inherent boolean value, defaults to truthy
// examples of falsey
let g;//undefined - falsey
console.log(typeof g)

if(g){
    console.log("falsey, not executed");
}
//example of truthy
let h = 45;
if(h){
    console.log("truthy, executed");
}
//if statements
//if(condition){statements}else if(condition2){statement2}...else{default}
let temp = 15;
if(temp<20){
    console.log("turn on heating");
    if(temp==15){
        console.log("ideal")
    }
}else if(temp>=20 && temp<=27){
    console.log("turn on AC");
}else{
    console.log("do nothing")
}

//Switch cases - use when you have a set number of conditions
let day = "tues";
switch(day){
    case "mon":
        console.log("Day 1");
        break;
    case "tues":
        console.log("Day 2");
        break;
    case "wed":
        console.log("Day 3");
        break;
    case "thurs":
        console.log("Day 4");
        break;
    case "fri":
        console.log("Day 5");
        break;
    case "sat":
        console.log("Day 6");
        break;
    case "sun":
        console.log("Day 7");
        break;
    default:
        console.log("default");
}

//Ternary statements
// ternary operator - ?
// syntax:  condition ? valueIfTrue : valueIfFalse
let age = 10;

if(age>=25){
    console.log("can buy alco")
}else{
    console.log("can't buy alco")
}

let tern = age>=25 ? "can buy alco" : "can't buy alco";
console.log(tern, "ternary");

//Objects - defined as an unordered collection of related data (key:value pairs)
let personObj = {
    name: "ash",
    age: 12,
    job: "trainer"
}
console.log("person:", personObj)
console.log(JSON.stringify(personObj)); //method to take an object and convert it into a string

//JSON - JavaScript Object Notation
let myObj = `[{
    "name": "ash",
    "age": 12,
    "job": "trainer"
},
{
    "name": "JH",
    "age": 24,
    "job": "trainer"
}]`;

console.log("JSON", myObj);
//Example of loading JSON DATA:
//GET request
// fetch("people.json")
// .then(response => response.json())
// .then(data => console.log("fetch", data));

//Arrays
const myArr = [1, "2", 3, 4, 5, 6, 7];
const names = ["bob", "mickey", "eeyore", "minnie"];
console.log(myArr);
console.log(names);
console.log(names[1]);//mickey
names.push("jerry");// only way to modify constant variables is through a method
console.log(names);

//Destructuring
const [a1, a2, a3, a4, a5, a6, a7] = myArr;
console.log(myArr[0]+myArr[1]);
console.log(a1+a2);// 1 + "2" = 12
console.log(a1+parseInt(a2));// 1 + 2 = 3
//spread operator - ...
const[name1, name2, ...rest] = names;
console.log(name2);
console.log("rest:", rest);

const grades = [21, 43, 54, 64, 23, 96, 27, 84, 100];
const[,,,grade, ...others] = grades;
console.log(grade);
console.log(others);


let myObj2 = {
    name: "peppy",
    breed: "chihuahua",
    
}
console.log("initial",myObj2);
const n = myObj2.name;
console.log(n);

myObj2 = {...myObj2, ...{size:"xs", colour:"brown"}};
console.log("updated:", myObj2);


//Funtions/methods - are a set of instructions you want to execute/ reuse
//3 ways to write functions

//function - global scope, call the funtion before it's been declared

myFun("hello", "ash");
myFun("normal function","hi");

function myFun(p,x){
    console.log(p);
    console.log(p+" "+x);
}

//function expression - has to be initalised before called
myFun2("function expression");
const myFun2 = function(x){
    console.log(x);
}


//arrow functions - more concise way of writing function expressions
const myFun3 = (z) => console.log(z);

const myFun4 = (t,u) => {
    let sum = t + u;
    console.log(t,"+",u,"=",sum);
}

myFun3("arrow function");// z = "arrow function"

myFun4(3,4);// t= 3, u = 4