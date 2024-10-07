// ---- this keyword : ----- 
// in node environment this refers to empty object,
// where as in browser this refers to global object which is nothing but (window object).

// this keyword works only with objects, not with functions. example-
function someFun(){
    const name= "Smith";
    console.log(this.name);

}
// someFun();


// this keyword with Object
const obj = {
    username : "sahil",
    price: 99,

    message: function(){
        console.log(`${this.username}, welcome to github`);
    }
}
// obj.message();
// obj.username="John";
// obj.message();



// -------- Arrow Function ---------- 
// introduced in ES6.
// Note: whenever we use {} with arrow fun, we need to explicitly mention return keyword.

// Basic function syntax :
function funName(){}

//Basic Arrow function syntax :
() => {}

// Arrow function with parameters - 
(num1, num2) => { return num1+num2;}

// holding arrow function to a variable -
const addTwo = (n1, n2) => { 
    return n1+n2;
}
console.log(addTwo(3,4)); 

// arrow function for single statement (also called ---- implicit return ----) 
const addThree = (v1, v2, v3) => v1+v2+v3;
console.log(addThree(2,2,2)); 

// another way using () braces - implicit return 
const anyFun = () => (console.log('Hello'));
anyFun();

//  () braces is used when we need to return an object, example:
const myFun = () => ({myname: "sahil", age: 18});
console.log(myFun());