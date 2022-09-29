"use strict"

const powerUp = (n1,n2) => Math.pow(n1,n2);
console.log(powerUp(2,2));

const power = (n1,n2) => console.log(n1**n2);
power(2,3);


//Callbacks - pass in a function as an argument/parameter/input into another function

const greet = (firstname, lastname) => {
    console.log(firstname, lastname);
    alert(`Hello ${firstname}, ${lastname}`);
}

const bye = (firstname, lastname) => {
    console.log(firstname, lastname);
    alert(`Bye ${firstname}, ${lastname}`);
}

const fullname = (f, l) => console.log(f+l);

const userInput = (callback) => {
    let fname = prompt("Please enter your first name: ");
    let sname = prompt("Please enter your last name: ");
    callback(fname, sname);
}

// greet("Ash", "S");
//define which function will be our callback function
// userInput(greet);//i.e. we callback the greet function here
// userInput(bye);
// userInput(fullname);

//Promises - it is an operation that hasn't been completed yet
//they have 3 states in which they can be which are:
// - fullfilled
// - rejected
// - pending

// let prom = new Promise((resolve, reject)=>{
//     let x = "no";//7
//     if(x=="milk"){
//         resolve("Success");
//     }else{
//         reject("Failed, out of stock");
//     }
// })

//calling the promise
//try-catch-finally
// prom.then(()=>{
//     console.log(`task completed`);
// }).catch((message)=>{
//     console.log(`Catch block - status is: ${message}`);
//     console.error(message);
// }).then(()=>{//finally
//     console.log("Finally block - runs regardless")
// })

//Closures - data privacy

//outer function - fname, intro
const fullName = (fname) => {
    let intro = "My name is ";
    //inner function - s
    // const lname = "result";
    const lname = (s) => {
        return `${intro} ${fname} ${s}`;
    }
    return lname;
}

let first = fullName("Ash");//fname =Ash
// console.log(first);//fullName returns the lname arrow funtion which then returns the string

let second = first("siva");
// console.log(second);//actual values that the inner function has used for the string

//outer function
let multiplier = (x) => {
    return (y) => {
        return x*y;
    };
}
let m = multiplier(3);
console.log(m);
console.log(m(2));




// (x) => { console.log("hi")}; // this is the arrow function part
