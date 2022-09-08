// always use ===
// equal comparison does not work for non-premetive 

const first = 2;
const second = 2;

if (first == second) {
    console.log("They are equal");
}
else {
    console.log('They are not equal');
}


const third = 2;
const fourth = '2';

if (third === fourth) {
    console.log("They are equal");
}
else {
    console.log('They are not equal');
}