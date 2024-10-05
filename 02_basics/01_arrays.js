 
// JavaScript arrays are resizable and can contain a mix of different data types.
// (When those characteristics are undesirable, use typed arrays instead.)
// JavaScript array-copy operations create shallow copies. 
// (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).


// Declaring an array
let myArr = [1,2,3,4,5]
const anotherArr = ["john", 18, "NewYork City", false]
const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);


// ------------ Array Methods ------------------

myArr.push(6,7)
// console.log(myArr)

myArr.pop()
// console.log(myArr)

myArr.unshift(0)
// console.log(myArr)

myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(9))
// console.log(myArr.includes(5))

const newArr = myArr.join()
// console.log(newArr)
// console.log(myArr)
// console.log(typeof(newArr))
// console.log(typeof myArr)


// console.log("Original array ", myArr); 

const nArr1 = myArr.slice(1, 3)  // Deep-copy (not affect original value)
// console.log("slice => ", nArr1);
// console.log("Original array ", myArr);

const nArr2 = myArr.splice(1, 3) // Shallow-copy (will affect original value)
// console.log("splice => ", nArr2);
// console.log("Original array ", myArr);



const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// Old way to combine 2 value/arrays  
const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);


// Spread-Operator with array [...arr1, ...arr2, ...arr3]
// can combine more than 2 values/arrays 
const all_heros = [...marvel_heros, ...dc_heros]
// console.log(all_heros)

// Nested Array 
// flat() is used to remove nesting in array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


// console.log(Array.isArray("John"))
// console.log(Array.from("John"))
// console.log(Array.from({name: "John"}))  // Interesting


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));