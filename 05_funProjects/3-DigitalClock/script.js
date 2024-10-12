// The setInterval() method calls a function at specified intervals (in milliseconds).
// The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
// 1 second = 1000 milliseconds.
// syntax : setInterval(function, milliseconds, param1, param2, ...)


const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

setInterval(()=>{
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);



//  Note: To execute the function only once, use the setTimeout() method instead.

//  To clear an interval, use the id returned from setInterval():
//      myInterval = setInterval(function, milliseconds);
//  Then you can to stop the execution by calling clearInterval():
//      clearInterval(myInterval);