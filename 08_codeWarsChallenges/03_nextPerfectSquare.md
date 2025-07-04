### 03.Kata - Find the next perfect square! 
Problem Statement -
> You might know some pretty large perfect squares. But what about the NEXT one?
>
> Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
>
> If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

Examples ( Input --> Output ) -
> 121 --> 144\
625 --> 676\
114 --> -1  #  because 114 is not a perfect square

Approach -
> 1. Check if the input is a perfect square: Calculate the square root of the input number and verify if it's an integer.
> 2. If it's not a perfect square, return -1 (or equivalent).
> 3. If it is a perfect square, calculate the next perfect square by taking the sq, adding 1, and squaring the result.

Solution -
```js
  function findNextSquare(sq) {
    const root = Math.sqrt(sq);
    if(Number.isInteger(root)){
      return Math.pow(root + 1, 2);
    }else{
      return -1;
    }  
  }
```
OR
```js
  // using ternary operator
  function findNextSquare(sq) {
    return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
  }
```

Explanation:
> - `Math.sqrt()` calculates the square root
> - `Number.isInteger()` checks if the root is an integer
> - `Math.pow()` calculates the square of the next integer
