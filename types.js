/*
.......Strongly/Stricktly typed language..............
int a =5;
string b = 'Name OMuk';
bool c = True;
object student = {name: 'Noyon', id:55};
int[] numbers = [3,5,3,2];
string[] name = ['abul', 'kabul']
*/

/*
//......JavaScript is a Dynamic type language............
// Premitive type
const a = 3;
const b = 'Babul';
const c = true;

// Non Premitive type
const ages = [3, 5, , 6, 7];
const student = { id: 45, class: 3 };
console.log(typeof a, typeof b, typeof c, Array.isArray(ages), typeof student);
*/

let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let p = { job: 'Web Developer' };
let q = p;
console.log(p, q);                   //{ job: 'Web Developer' } { job: 'Web Developer' }
q.job = 'Front End Developer';
console.log(p, q);                  //{ job: 'Front End Developer' } { job: 'Front End Developer' }
q = { job: 'Back end developer' };
console.log(p, q);                  //{ job: 'Front End Developer' } { job: 'Back end developer' }