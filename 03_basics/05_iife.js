// IIFE = Immediately Invoked Function Expression.
// An IIFE is a JavaScript function that runs as soon as it is defined. 

// It is a design pattern which is also known as a --- Self-Executing Anonymous Function --- and 
// contains two major parts:-

// 1. The first is the anonymous function with lexical scope enclosed within the grouping operator (). 
//      This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// 2. The second part creates the immediately invoked function expression (), 
//      through which the JavaScript engine will directly interpret the function.

// IIFE Basic syntax:
(function () {
    // …
})();


// IIFE Basic syntax: 
(() => {
    // …
})();

// first:  () - will write function defination into first paranthesis.
// second: () - will execute function. 

// UseCase: 
// Avoids polluting global scope.
// used in Database connection files, to connect with database as soon as application gets started. 

// ------- examples -------
// Note: always use semicolon at the end of IIFE.

// Named IIFE
(function greet(){
    console.log("Hello World");
})();


(() => {
    console.log("Hello from Arrow Function")
})();


// passing arguments in IIFE 
(function greetWithName(name){
    console.log(`Hello From ${name}`)
})("John");


((num1, num2) => {
    console.log(num1 + num2);
})(2,5);




