// .....................Problem -1 ................
// 1) If I write []==true,will it show true or false? Check it out.
// This value is False

/*
if ([] == true) {
    console.log('This value is True');
}
else {
    console.log('This value is False');
}

//................
let arr = [];
if (arr) {
    console.log(' true');
}
else {
    console.log('false');
}
//..........................

//2) Use === to check if the true === "true" gives true or false.
//Value is False

if (true === 'true') {
    console.log('Value is True');
}
else {
    console.log('Value is False');

}

// 3) Write an arrow function that will take a parameter and will check if the parameter is a number or not by using isNaN(). And return true or false.

const checkNumber = (num) => {
    if (typeof num === 'number') {
        return true
    }
    else {
        return false;
    }
}
const result = checkNumber('3');
console.log(result);
*/


// ...........Problem -2......................
//Change the value stored in the storeFalsyValue variable to a falsy value, such that the code in the else statement executes.
/*
let storeFalsyValue = true;
if (!storeFalsyValue) {
    console.log(`Nothing to show!`);
}
else {
    console.log(`You are amazing!`);
}
*/



//............Problem-3..........
/**Write an arrow function that will take 3 parameters (first two parameters will be numbers and the third
parameter will be a string) that will perform arithmetic operation depending on the third parameter and
will print the result. For example:
1. Print result of num1+num2 if operation is “add”
2. Print result of num1-num2 if operation is “subtract”
3. Print result of num1*num2 if operation is “multiply”
4. Print result of num1/num2 if operation is “divide”
5. Print result of num1%num2 if operation is “modulus”
6. Else print “Invalid operation” */

const calculator = (number1, number2, instruction) => {
    if (instruction === 'add') {
        const add = number1 + number2;
        console.log(add);
    }
    else if (instruction === 'subtract') {
        const subtract = number1 - number2;
        console.log(subtract);
    }
    else if (instruction === 'multiply') {
        const multiply = number1 * number2;
        console.log(multiply);
    }
    else if (instruction === 'divide') {
        const divide = number1 / number2;
        console.log(divide);
    }
    else if (instruction === 'modulus') {
        const modulus = number1 % number2;
        console.log(modulus);
    }
    else {
        console.log('Invalid Operator');
    }
}

calculator(25, 3, 'modulus');
