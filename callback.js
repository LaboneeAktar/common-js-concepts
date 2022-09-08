function greetings(greetingsHandler, name) {
    greetingsHandler(name);
}

function greetingsHandler(name) {
    console.log('Good Morning', name);
}

function greetingsEvining(name) {
    console.log('Good Evening', name);
}

greetings(greetingsHandler, 'Halim chacha');
greetings(greetingsHandler, 'Korim chacha');
greetings(greetingsHandler, 'Rohim chacha');
greetings(greetingsEvining, 'Halim chacha');
greetings(greetingsEvining, 'Korim chacha');
greetings(greetingsEvining, 'Rohim chacha');

// const name = "Karim Chacha";
// greetings(name);