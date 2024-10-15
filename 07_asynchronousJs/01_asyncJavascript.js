//  Asynchronous JavaScript
//  Asynchronous programming is a technique that enables your program to start a potentially long-running task 
//  and still be able to be responsive to other events while that task runs, 
//  rather than having to wait until that task has finished. Once that task has finished, 
//  your program is presented with the result.

// ek task ko time lag raha hai tab tak wait na krna, us bich me dusra task perform kr lena ye hota hai asynchronous programing.  

// we used [async-await / promises] to acheive asynchronous programing technique in javascript.


// creating/defining a promise :
const promiseOne = new Promise(function (resolve, reject) {

    setTimeout((response) => {
        console.log('Async task is compelete of promise-One ');
    }, 1000)
});

//  Consuming promise :  
promiseOne.then(function () {
    console.log("Promise completed !!");
})


// ---- Note : then() has direct connection with resolve, catch() has connection with reject. -------
// if promise resolved then() will execute,
// if promise rejected catch() will execcute,
// and finally() is default, executes either promise resolved or rejected.
// ex: promiseFive


const promiseTwo = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve();
        console.log("Async task is compelete of promise-Two");
    }, 1000)
});

promiseTwo.then(function () {
    console.log('promise Consumed successfully of promise-Two');
})


// ---------------- -------------------- -------------------------

new Promise((resolve, reject) => {
    setTimeout(function () {
        console.log('Async task is compelete of promise-Three');
        resolve()
    }, 1000);
}).then(function () {
    console.log("promise Consumed successfully of promise-Three");
})


// ---------------- -------------------- -------------------------

const promiseFour = new Promise((resolve, reject) => {
    console.log("Async Task of promise Four");

    // returning object through resolve()
    resolve({ username: "SomeName", email: "someEmail@example.com" });
})

promiseFour.then(function (user) {
    console.log(user);
});



// ---------------- -------------------- -------------------------
// used both resolve and reject (works any one of them based on condition)

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        isError = false;
        if (!isError) {
            resolve({ username: "myName", email: "myEmail@example.com" })
        } else {
            reject('ERROR: Something went wrong in promiseFive');
        }
    }, 1000);
});


//  Chaining
// promiseFive.then(function (obj) {
//     // displaying whole object
//     console.log(obj);
//     return obj.email;

// }).then(function (email) {
//     // displaying email of an object
//     console.log(email);

// }).catch(function (err) {
//     console.log('Error : ', err);

// }).finally(function () {
//     console.log('Promise either fullfilled or promise gets error');
// })


// ---- using  async-await --------
// they can not handle error directly, we need to use try-catch block here for errors.


async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


// ---------------- -------------------- -------------------------
//  The fetch() method used to fetch a resource.
//  The fetch() method takes one mandatory argument, the path to the resource you want to fetch.
//  The fetch() function returns a Promise which is fulfilled with a Response object representing the server's response. 
//  getting data from Random user me api using ----- fetch() ------

// 01. fetch() using asyn-await approach
async function getRandomUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

getRandomUser();


// 02. fetch() using then() and catch() approach

fetch('https://randomuser.me/api/')
    .then(function (response) {
        return response.json()
        // console.log(response);

    }).then(function (data) {
        console.log(data);
        return data.results[0].email;

    }).then((email) => {
        console.log(email);

    }).catch(function (err) {
        console.log(err);

    })