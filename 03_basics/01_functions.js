// function defination
function printHello() {
    console.log("Hello world")
}

//  printHello = without () called as function reference

//  with () function execution 
printHello()


function addNumbers(number1, number2) {  // here it is called Parameters.
    // console.log(number1 + number2)
    return number1 + number2;
}

addNumbers(2, 3)  // here it is called Arguments.

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