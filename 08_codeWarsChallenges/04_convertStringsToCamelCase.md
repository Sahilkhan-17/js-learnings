### 04.Kata - Convert string to camel case 
Problem Statement -
> Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples -
>  `"the-stealth-warrior"` gets converted to `"theStealthWarrior"`\
>  `"The_Stealth_Warrior"` gets converted to `"TheStealthWarrior"`\
>  `"The_Stealth-Warrior"` gets converted to `"TheStealthWarrior"`

Approach -
> 1. Split the string into words using either '-' or '_' as delimiters
> 2. The first word remains as-is (except possibly capitalizing its first letter)
> 3. Subsequent words should have their first letter capitalized and the rest lowercase

Solution -
```js
function toCamelCase(str){
  if(!str) return str;

  return str.split(/[-_]/).map((word, index) => {
    if(index === 0){
      return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join('');
}
```

Explanation:
> 1. Split the string using a regex that matches either - or _
> 2. Map over the resulting array of words
> 3. For the first word (index 0), leave it unchanged
> 4. For other words, capitalize the first letter and lowercase the rest
> 5. Join all words together without any separators

Key takeaways -
> 1. The `map()` function iterates through each element of the array and invokes a callback function for each element
> 2. The `slice()` method is a built-in JavaScript function that extracts a section of a string (or array) and returns it as a new string (or array), without modifying the original.
>    - syntax:\
>      `string.slice(startIndex, endIndex)`\
>      `startIndex`(required), `endIndex`(optional)
>    - Ex:\
>      const str = "Hello World";\
>      console.log( str.slice( 0, 5) );  // "Hello"\
>      console.log( str.slice(6) );     // "World" (to end of string)
> 3. The `split()` is a powerful way to split strings using regular expressions (regex) in JavaScript.
>    - syntax:\
>      `string.split( separator )` OR `string.split( /pattern/ )`
>    - Ex 1:\
>      "hello-world".split(/[-_]/)\
>      Result: ["hello", "world"]
>    - Ex 2:\
>      "-start_with_separator_".split(/[-_]/)\
>      Result: ["", "start", "with", "separator", ""]
