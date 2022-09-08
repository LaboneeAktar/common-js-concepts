/**
 * 8 Ways to get undefined
 */

//1. variable that is not initialized will give undefined
let first;
// console.log(first);

//2. function without return
function second(a, b) {
    const total = a + b;
}
// second();

//3. parameter that is not passed will be undefined
function third(a, b, c, d) {
    const total = a + b + c + d;
    console.log(a, b, c, d);
}
// third(2, 3);

//4. if return has nothing on the right side will return undefined
function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return;
    }
    return a + b;
}
const total = noNegative(5, -7);
// console.log(total);

//5. property that does not exists on an object will give undefined
const fifth = { id: 2, age: 45 };
// console.log(fifth.age, fifth.salary);


//6. accessing array elements outside of the index range will give undefined
const sixth = [3, 4, 5, 6, 6];
// console.log(sixth[1], sixth[10]);

//7. deleting an element inside an array
const seventh = [3, 4, 5, 6, 6];
delete seventh[1];            //.......should not do it, instead use splice
// console.log(seventh);

//8. set a value directly to undefined
const eights = undefined;     //............should not do it

// should do 
const ninth = null;

const data = { results: [], update: null };
console.log(data.results, data.update);

console.log(typeof undefined);     //undefined
console.log(typeof null);          //object
