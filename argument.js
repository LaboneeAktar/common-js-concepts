function sum(a, b, c) {
    console.log(arguments);
    const args = [...arguments];
    console.log(args);
    const results = a + b + c;
    return results;
}
const total = sum(34, 55, 654, 7, 4, 33);
console.log(total);
console.log(sum.length);   //It's show the number of parameter (here 3 parameter)