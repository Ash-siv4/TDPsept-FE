
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

//switch cases
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
    default:
        console.log("default");
}