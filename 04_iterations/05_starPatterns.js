//   Nested Loops Examples 
//   Patterns -

  let n = 5;

/*
            Q.1-
            *****
            *****
            *****
            *****
            *****
*/

// Q.1.sol-
for (let i = 0; i < n; i++){
    let row = "";
    for (let j = 0; j < n; j++){
        row = row + "*";
    }
    console.log(row);
}


/*
            Q.2-
            *
            **
            ***
            ****
            *****
*/

// Q.2.v1
for (let i = 0; i < n; i++){
    let row = "";
    for (let j = i; j >= 0; j--){
        row = row + "*";
    }
    console.log(row);
}

// Q.2.v2
for (let i = 0; i < n; i++){
    let row = "";
    for (let j = 0; j <= i; j++){
        row = row + "*";
    }
    console.log(row);
}



/*
            Q.3-
            1
            12
            123
            1234
            12345
*/

// Q.3. sol
for (let i = 0; i < n; i++){
    let row = "";
    for (let j = 0; j <= i; j++){
        row= row+(j+1);
    }
    console.log(row);
}



/*
            Q.4-
            1
            22
            333
            4444
            55555
*/

// Q.4.v1 
for (let i = 1; i <= n; i++){
    let row = ""
    for (let j = i; j > 0; j--){
        row = row + i;
    }
    console.log(row);
}

// Q.4.v2
for (let i = 0; i < n; i++){
    let row = "";
    for (let j = 0; j <= i; j++){
        row = row + (i+1)
    }
    console.log(row);
}

// Q.4.v3
for (let i = 1; i <= n; i++){
    let row = "";
    for (let j = 1; j <= i; j++){
        row = row + (i)
    }
    console.log(row);
}



/*
            Q.5-
            12345
            1234
            123
            12
            1
*/

// Q.5.v1
for (let i = 0; i < n; i++){
    let row = "";
    for (let j = 0; j < n-i ; j++){
        row =row + (j+1)
    }
    console.log(row);
}

// Q.5.v2
for (let i = 1; i <= n; i++){
    let row = ""
    for (let j = 1; j <= (n - i) + 1; j++){
        row = row + j
    }
    console.log(row);
}


/*
            Q.6-
            #####
            ####
            ###
            ##
            #
*/

// Q.6. sol-
for (let i = 0; i < n; i++){
    let row = "";
    for (let j = 0; j < n - i; j++){
        row = row + "#";
    }
    console.log(row);
}


/*
            Q.7- Tricky 
                *
               **
              ***
             ****
            *****
*/

// Q.7. sol-
for (let i = 0; i < n; i++){
    let row = "";
    for (let j = 0; j < n - (i + 1); j++){
        row = row + " ";
    }
    for (let k = 0; k < i + 1;k++){
        row = row + '*';
    }
    console.log(row);
}


/*
            Q.8-
            1
            10
            101
            1010
            10101
*/

// Q.8. sol-
for (let i = 0; i < n; i++){
    let row = "";
    let toggle = 1;
    for (let j = 0; j < i + 1; j++){
        row = row + toggle;

        if (toggle == 1) {
            toggle = 0;
        } else {
            toggle = 1;
        }
    }
    console.log(row);

}


/*
           Q.9-
            1
            01
            010
            1010
            10101
*/

// Q.9. sol-
let toggle = 1;
for (let i = 0; i < n; i++){
    let row = "";
    for (let j = 0; j < i + 1; j++){
        row = row + toggle;
        if (toggle == 1) {
            toggle = 0;
        } else {
            toggle = 1;
        }
    }
    console.log(row);
}
