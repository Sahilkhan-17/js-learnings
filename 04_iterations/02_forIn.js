// --------   for-in loop -----------


// for-in loop works with Objects
const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: "Ruby",
    py: "Python"
}

for (const key in myObject) {
    // console.log(key);
}

for (const key in myObject) {
    // console.log(myObject[key]);
}

for (const key in myObject) {
    // console.log(`${key} => ${myObject[key]}`);
}


// for-in loop on Arrays
const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    // console.log(key);
}

for (const key in programming) {
    // console.log(programming[key]);
}

for (const key in programming) {
    // console.log(`${key} => ${programming[key]}`);
}

