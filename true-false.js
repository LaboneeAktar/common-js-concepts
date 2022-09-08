/**
 * Truthy:
    1. true
    2. any number (positive , negative) will be truthy, except 0
    3. any string is truthy except empty ('') srting
    4. '0', 'false' is truthy
    5. object and empty object {}
    6. array and empty array []

 * Falsy
    1. false
    2. 0
    3. empty string ''
    4. undefined
    5. null
 */

const x = false;
if (x) {
    console.log('Value of x is truthy');
}
else {
    console.log('Value of x is falsy');
}

//optional
//check falsy use ! in condition
const y = '';
if (!y) {
    console.log('Y is falsy');
}
else {
    console.log('y is truthy');
}

//check truthy use !!
const z = ' ';
if (!!z) {
    console.log('z is truthy');
}
else {
    console.log('z is falsy');
}