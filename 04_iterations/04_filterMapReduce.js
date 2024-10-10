//  The map(), filter(), and reduce() are the array functions 
//  that allow us to manipulate an array according to our own logic
//  and return a new array after applying the modified operations on it.


// ------- filter() ------    --- these are also called higher order Functions.
//  The filter() method in JavaScript is used to create a new array, 
//  with all elements that pass a certain condition defined by a callback function. 
//  It iterates through each element of the array and invokes the callback function for each element. 
//  If the callback function returns true for an element, that element is included in the new array; otherwise, it is excluded.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const someVar = myNums.filter((n) => n <= 5);
// console.log(someVar);

const newNums = myNums.filter((num) => {
  return num > 4;
})

// console.log(newNums);


// Array of Objects 
const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === 'History');

//   console.log(userBooks);




// ------- map() ------- 
// The map() method in JavaScript is used to create a new array by applying a function to each element of the original array. 
// It iterates through each element of the array and invokes a callback function for each element. 
// The result of the callback function is then added to the new array.

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumers.map( (num) => { return num + 10});


// called as chaining
const someNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40);

// console.log(someNums);




// -------- reduce() -----------
// The reduce() method in JavaScript is used to reduce an array to a single value. 
// It executes a provided callback function once for each element in the array, resulting in a single output value. 
// The callback function takes four arguments: accumulator, currentValue, currentIndex, and the array itself.

const numArr = [1, 2, 3];

const myTotal = numArr.reduce(function (acc, currentval) {
    // console.log(`acc: ${acc} and currval: ${currentval}`);
    return acc + currentval;
}, 0);  

// console.log(myTotal);

//Note: in above ex. we are passing callback function & 0 as initial value for accumulator.


const total = myNums.reduce( (acc, curr) => acc + curr, 0);
// console.log(total);


// used in shopping cart example : Array of Objects.

const shoppingCart = [
  {
      itemName: "js course",
      price: 2999
  },
  {
      itemName: "py course",
      price: 999
  },
  {
      itemName: "mobile dev course",
      price: 5999
  },
  {
      itemName: "data science course",
      price: 12999
  },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);




