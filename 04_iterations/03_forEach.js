// forEach() Loop inbuilt in arrays --- its a higher order function. 
// it requires a callback function as an argument.
// forEach() does not returns anything.

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (val) {
    // console.log(val);
})

coding.forEach((item) => {
    // console.log(item);
})


// passing printMe reference 
function printMe(item) {
    console.log(item);
}

// coding.forEach(printMe);


// forEach() has element, indexes, array as well
coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})


// forEach() with Array of Object

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    // console.log(item);
    // console.log(item.languageName);
    console.log(item.languageFileName);
} )
