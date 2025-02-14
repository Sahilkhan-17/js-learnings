// function  ------- defination --------
function printHello() {
    console.log("Hello world")
}

//  printHello = without () called as ---- function reference ------

//  with ()  ------ function execution -------- 
printHello()


function addNumbers(number1, number2) {  // here it is called ----- Parameters ------
    // console.log(number1 + number2)
    return number1 + number2;
}

addNumbers(2, 3)  // here it is called ----- Arguments --------

// returning value from a function used return keyword while defining function else it will give undefined.
const result = addNumbers(2, 3)
// console.log(result)


//  Note: if we dont pass any argument and call a function it will return undefined.
//  addNumber() requires arguments.
//  example = console.log(addNumbers())  


// Note:  empty strings " " == false
//        undefined         == false


// passing Default value in function
function greet(greeter='Sam'){
    return `Default value is ${greeter}`;
}

// here we are not passing any value, so default value will be printed.
// if we pass any value then, that value will be printed.
const doGreet = greet()  
console.log(doGreet)


// Variables are so powerful in js it can hold functions as well.
// Here addTwo is called as -------- Expressions ------ in Js. 

// console.log(addTwo(2))  // we cannot access Expression (addTwo) before initialization, it will throw error

const addTwo = function (num){
    return num + 2;
}
console.log(addTwo(2))   // this is possible

// --------------------- ----------------------------
// Important: in below examples we are calling function which is declare afterwards. 

// ex.1
console.log(addSomething(2));   // calling normal function result = 3.

function addSomething(num){    // normal function declaration
    return num + 1;
}

// ex.2
console.log(addAnotherThing(2));  // calling (function) as Expression result = error.

const addAnotherThing = function (num){     // function declaration as Expression (addAnotherThing)
    return num + 1;
}
