### 01.Kata - Replace With Alphabet Position 
Problem Statement -
> In this kata you are required to, given a string, replace every letter with its position in the alphabet.\
> If anything in the text isn't a letter, ignore it and don't return it.\
> "a" = 1, "b" = 2, etc.

Example -
> Input = "The sunset sets at twelve o' clock."\
> Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

Solution -
```js
function alphabetPosition(text) {
  return text
    .toLowerCase()
    .split('')
    .filter(character => character >= 'a' && character <= "z")
    .map(character => character.charCodeAt(0) - 'a'.charCodeAt(0) + 1 )
    .join(' ');
}
```

Explaination -

We need to:
1. Iterate through each character in the input string
2. For each character:
   - Check if it's a letter (a-z or A-Z)
   - Convert it to lowercase (or uppercase) for uniform handling
   - Calculate its position in the alphabet (a/A=1, b/B=2, ..., z/Z=26)
3. Ignore/skip any non-letter characters
4. Return the result as a space-separated string of numbers


> All solutions follow the same basic logic:
>  1. Case normalization (convert to lowercase)
>  2. Character filtering (keep only alphabetic characters)
>  3. Position calculation using ASCII/Unicode values
>  4. Result formatting with space separation

> The ASCII math works because:\
'a' has ASCII code 97, 'A' is 65\
'b' is 98, 'B' is 66\
etc.\
So for any lowercase letter: `'a' - 'a' + 1 = 1`, `'b' - 'a' + 1 = 2`, etc.
