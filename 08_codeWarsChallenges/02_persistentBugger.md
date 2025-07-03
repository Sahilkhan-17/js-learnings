### 02.Kata - Persistent Bugger
Problem Statement - 
>Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output) :
> 39 --> 3 (because `3 * 9 = 27`, `2 * 7 = 14`, `1 * 4 = 4` and 4 has only one digit, there are 3 multiplications)\
  999 --> 4 (because `9 * 9 * 9 = 729`, `7 * 2 * 9 = 126`, `1 * 2 * 6 = 12`, and finally `1 * 2 = 2`, there are 4 multiplications)\
  4 --> 0 (because 4 is already a one-digit number, there is no multiplication)

Approach - 
>  1. Check if the number is already a single digit: If yes, return 0 as no multiplication is needed.
>  2. Initialize a counter: This will keep track of how many multiplications we've performed.
>  3. Loop until the number is a single digit :
>     - Convert the number to a string to access individual digits
>     - Split the string into individual characters (digits)
>     - Convert each digit back to a number
>     - Multiply all digits together to get a new number 
>     - Increment the counter
>  4. Return the counter when the loop exits (when we have a single-digit number)


Solution -
```js
function persistence(num) {
 let count = 0; 
 while(num >= 10){
   num = String(num).split('').reduce((a, b) => a * b, 1);
   count++;
 }
  return count;
}
```

Explaination -
>  1. **Initialization**: We start with a counter set to 0 to track the number of multiplications.
>  2. **Loop Condition**: Continue processing as long as the number has more than one digit (num ≥ 10).
>  3. **Digit Multiplication**:
>     - Convert number to string,
>     - split into digits,
>     - then use reduce to multiply them.
>  4. **Update and Count**: Replace the number with the product of its digits and increment the counter.
>  5. **Termination**: When the number becomes a single digit, exit the loop and return the count.


Understanding `Array.reduce()` method -
> The `reduce()` method executes a `reducer` function on each element of an array, resulting in a single output value.
>
> Syntax: `array.reduce(reducerFunction, initialValue)`
>
> `reducerFunction` :
>  - A function to execute on each element
>  - it takes 4 arguments, but we typically use just the first two:
>    -  **accumulator** (a): Accumulates the callback's return values
>    -  **currentValue** (b): The current element being processed
>    -  (We're ignoring **index** and **array** parameters here)
>
> `initialValue` (1) :
>  - Value to use as the first argument to the first call of the reducer

In Our Case: `reduce((a, b) => a * b, 1)`
Breaking this down:
  1. Initial Setup:
     - We start with the initial value `1` (this becomes our first `a`)
     - First digit becomes our first `b`
  3. How It Works:
     - On first iteration: `a = 1` (initial value), `b = first digit`
       - Returns `1 * first digit`
     - On second iteration: `a = previous result`, `b = second digit`
       - Returns `(previous result) * second digit`
  4. Continues until all digits are processed

Example with Number 39:
  - `String(39)`.`split('') ` → `['3', '9']`
  - First iteration: `a = 1`, `b = '3'` → `1 * 3 = 3`
  - Second iteration: `a = 3`, `b = '9'` → `3 * 9 = 27`
  - Final result: `27`
  - `num = 27`, and loop continues till single digit occurs.
