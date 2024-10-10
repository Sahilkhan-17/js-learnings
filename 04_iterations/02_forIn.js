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


// for-in loop does not work with Map 
const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    // console.log(key);
}