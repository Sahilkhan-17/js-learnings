
# JavaScript

## Variables
- Variables are so powerful in JS that they can hold functions as well.


## Data Types
JavaScript has the following primitive data types:

| Type       | Description                          | Example           |
|------------|--------------------------------------|-------------------|
| `number`   | Numeric values (up to 2^53)          | `42`, `3.14`      |
| `bigint`   | Arbitrary-length integers            | `123n`            |
| `string`   | Textual data                         | `"hello"`         |
| `boolean`  | Logical true/false                   | `true`, `false`   |
| `null`     | Intentional empty value              | `null`            |
| `undefined`| Uninitialized value                  | `undefined`       |
| `symbol`   | Unique identifier                    | `Symbol('id')`    |

```javascript
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object"
```


## Type Conversions
```javascript
"33" => 33
"33abc" => NaN
true => 1; false => 0

"" => false
"anyString" => true
```


## Arrays
- JavaScript arrays are resizable and can contain a mix of different data types
- Array-copy operations create shallow copies (all standard built-in copy operations create shallow copies)

### Array Methods
- `push()`, `pop()`, `shift()`, `unshift()`, `join()`, `concat()`
- `slice()` - Deep-copy (doesn't affect original array)
- `splice()` - Shallow-copy (affects original array)
- `flat()` - Removes nesting in array
- `isArray()`, `from()`, `of()`

### Spread Operator
```javascript
[...arr1, ...arr2, ...arr3]  // Can combine more than 2 values/arrays.
```


## Functions
**Notes:**
- If you don't pass any argument and call a function, it will return `undefined`.
- Empty strings `" " == false`, `undefined == false`


### Function Expressions
Creating a variable and assigning a function to it is called as function expression.
Two types of function expressions:
1. Anonymous Function Expressions
2. Named Function Expressions (NFE)

**Notes:**
- you can access normal functions which are declared later ( Hoisted - can be called before definition. )
- you cannot access Expressions before initialization, it will throw error ( Not Hoisted - must be defined before use. )


### Closure
- A closure is the combination of a function bundled together with references to its surrounding state (lexical environment). 
- In other words, a closure gives a function access to its outer scope. 
- Closures are created every time a function is created.


### `this` Keyword
- this refers to the current context of an object. 
- In Node environment: `this` refers to empty object.
- In browser: `this` refers to global object (window object).
- Works only with objects, not with functions


### Arrow Functions
- Introduced in ES6.
Note: When using `{}` with arrow functions, you need to explicitly mention `return` keyword.


## IIFE (Immediately Invoked Function Expression)
A function that runs as soon as it is defined.

**Use Cases:**
- Avoids polluting global scope.
- Used in Database connection files to connect immediately when application starts.

Note: Always use semicolon at the end of IIFE.
