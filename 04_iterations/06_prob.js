/*
      Q. Write a function that returns the count of digits in a number.
      ex. num= 404, count= 3 
      handle corner cases: num = 0, num = -404
*/ 
function numCount(num) {

    let count = 0;

    num = Math.abs(num);

    if (num === 0) {
        return 1;
    }

    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}

console.log(numCount(-4045));




/*
        Q. write a function that returns the reverse of a number.
        ex -num = 123, reverse = 321
*/

function revNumber(num) {

    num = Math.abs(num);                // converts -ve to +ve no.

    let rem = 0;
    let reverse = 0;
    while (num > 0) {
        rem = num % 10;                 // stores last digit 
        reverse = (reverse * 10) + rem; // 321 IMP
        num = Math.floor(num / 10);     // remove last digit 
    }
    return reverse;
}

console.log(revNumber(5443));




/*
        Q.Given an integer x, return true if x is Palindrome, and false otherwise
        palindrome number - 121, 2552, 24242 [reverse of num is same]
        handle corener casese as well 
        Note: -ve number never be a palindrome, so return false. 
*/
function isPalindrome(x) {
    let xCopy = x;  // IMP
    if (x < 0) {
        return false;
    }
  
    let rem = 0;
    let rev = 0;
    while (x > 0) {
        rem = x % 10; 
        rev = (rev * 10) + rem;
        x = Math.floor( x / 10 );
    }
   
    if (rev === xCopy) {
        return true;
    } else {
        return false;
    }
    // return rev === xCopy;    // shorthand for if-else above.
}

console.log(isPalindrome(121));
