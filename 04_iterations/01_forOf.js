// -------- for-of loop in JavaScript ----------- also called higher order arrays Loops.

// for-of loop on Array
let name_arr = ["a", "b", "c", "d"];

// Basic syntax:
for (const element of name_arr) {
    // console.log(element);
}


// for-of loop on String
const greetings = "Hello world!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// for-of loop on ------- Map data Structure -----------
// ---- Map ----- accepts Key-value pairs,
// In Map keys are unique, where as values can be same. ex:

const map = new Map()

map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India");
map.set('IND', "India");

// console.log(map);

// prints whole element ie. key value pair.
for (const element of map) {
    // console.log(element);
}

// print only keys of Map
for (const [key] of map) {
    // console.log(key);
}

// prints both key and value
for (const [key, value] of map) {
    // console.log(`${key} => ${value}`);
}



// ----------- ----------- --------------------
// Note:    for-of loop does not works with Objects.

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}

