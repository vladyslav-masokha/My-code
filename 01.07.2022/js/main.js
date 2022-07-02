// HomeWork 1 | HW 1. Hello!
alert('Hello user');

let userName = prompt('What is your name?');

while (userName === '') {
	alert("You didn't enter your name...");
	userName = prompt('What is your name?');
}

alert(`Nice to meet you, ${userName}`);

const currentYear = 2022;
let userAge = +prompt('How old are you?');

while (userAge == '') {
	alert("You didn't enter your age...");
	userAge = +prompt('How old are you?');
}

alert(`You was born in ${currentYear - userAge}`);

alert(`Your data:

Your name: ${userName},
Your age: ${userAge},
You was born in ${currentYear - userAge}
`);

console.group('Your data:');
console.log(`Your name: ${userName}
Your age: ${userAge}
You was born in ${currentYear - userAge}
`);
console.groupEnd();
