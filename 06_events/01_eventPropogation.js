//---------  Event Propogation in JS. ------------ 
// 01 - event Bubbling  : bottom to top direction.(default event propogation )
// 02 - event Capturing : top to bottom direction.

// syntax : addEventListener('event-name', callback(), boolean-value);


// 01 - event Bubbling ---------------
// by default its false (ie: event Bubbling)

// document.getElementById('images').addEventListener('click', ()=>{
//     console.log("clicked inside ul ");
// }, false);

// document.getElementById('owl').addEventListener('click', ()=>{
//     console.log("clicked inside specific element Owl ");
// }, false);  


// 02 - event Capturing -------------- 
// needs to explixitly mention true (ie: event Bubbling)
document.getElementById('images').addEventListener('click', ()=>{
    console.log("clicked inside ul ");
}, true);

document.getElementById('river').addEventListener('click', ()=>{
    console.log("clicked inside specific element river");
}, true);  



// Note: view difference in console. 

// stopPropogation() : this will stop the propogation.(will stop bubbling and capturing)

// preventDefault() : this will stop the default behaviour of an element,
//  in our case its googles link 
document.getElementById('google').addEventListener('click', (e)=>{
    e.preventDefault();
}, false);  