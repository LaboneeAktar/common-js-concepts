//premetive : console value same thakbe. Pass by value
let num1 = 5;
let num2 = 3;

function multiply(a, b) {
    a = 10;
    return a * b;
}
console.log(num1, num2);
multiply(num1, num2);

console.log(num1, num2);


// non premetive : console value will be change after function call
// object and array are pass by reference
let stu1 = { name: 'rina', partner: 'mina' }
let stu2 = { name: 'tina', partner: 'rita' }

function team(team1, team2) {
    team1.name = 'Pinky';
    team2.partner = 'Ayat';
}
console.log(stu1, stu2);
team(stu1, stu2);
console.log(stu1, stu2);
