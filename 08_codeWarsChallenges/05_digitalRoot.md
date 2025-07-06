### 05.Kata - Sum of Digits / Digital Root 
Problem Statement -
> Digital root is the recursive sum of all the digits in a number.
>
> Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples -
> 16  -->  1 + 6 = 7\
> 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6\
> 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6\
> 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

Approach -
>   1. Convert the number to a string to access individual digits.
>   2. Split the string into an array of digit characters.
>   3. Sum the digits using reduce().
>   4. Repeat until `n` is a single-digit number.

Solution -
```js
    function digitalRoot(n) {
      while(n >= 10){
        n = String(n).split('').reduce((a,b) => a + Number(b), 0); 
      }
      return n; 
    }
```

Alternative (Mathematical Approach) -
```js
    function digitalRoot(n) {
      if (n === 0) return 0;
      return n % 9 === 0 ? 9 : n % 9;
    }

// The digital root follows a modulo 9 pattern
// For any number n, the digital root is n % 9, except when n is a multiple of 9 (then it's 9)
// Special case for 0 (returns 0)

```

Explanation: 
> `String()` converts number to string ex. "456"\
> `split('')` split produces an array of strings ex.[ "4", "5", "6" ]\
> `Number()` converts string to number ex."4" -> 4, "5" -> 5, ..\
> Fixing digit conversion (`Number(b)`) ensures proper arithmetic\
> `reduce()` 4 + 5 + 6 = 15.


