### 07.Kata - Who Likes It ?
Problem Statement -
> You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
>
> Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
>  ```text
>    []                                -->  "no one likes this"
>    ["Peter"]                         -->  "Peter likes this"
>    ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
>    ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
>    ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
>  ```

Approach -
> The logic handles 5 cases:
> 1. Empty array: "no one likes this"
> 2. 1 name: "[Name] likes this"
> 3. 2 names: "[Name1] and [Name2] like this"
> 4. 3 names: "[Name1], [Name2] and [Name3] like this"
> 5. 4+ names: "[Name1], [Name2] and [n-2] others like this"

Solution -

```js
    // Using if-else 

    function likes(names) {
      const len = names.length;
      if(len === 0){
        return `no one likes this`;
      }else if(len === 1){
        return `${names[0]} likes this`;
      }else if(len === 2){
        return `${names[0]} and ${names[1]} like this`;
      }else if (len === 3){
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
      }else {
        return `${names[0]}, ${names[1]} and ${len - 2} others like this`;
      } 
    }    
```

```js
    // Using Switch Statement

    function likes(names) {
      switch(names.length){
        case 0:
          return "no one likes this";
        case 1:
          return names[0] + " likes this";
        case 2:
          return names[0] + " and " + names[1] + " like this";
        case 3:
          return names[0] + ", " + names[1] + " and " + names[2] + " like this";
        default: 
          return names[0] + ", " + names[1] + " and " + (names.length-2) + " others like this";
      }
    }
```

Explaination:
> **Empty Array Handling**: When no names are provided, return "no one likes this".\
> **Single Name**: Use singular "likes" and just the name.\
> **Two Names**: Join with "and" and use plural "like".\
> **Three Names**: First two names comma-separated, last joined with "and".\
> **Four or More Names**: Show first two names, then count of remaining people as "X others".
