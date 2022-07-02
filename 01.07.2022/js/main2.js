let firstNum = +prompt('Enter the first number');

while (firstNum == '') {
	alert("You didn't enter first number...");
	firstNum = +prompt('Enter the first number');
}

let secondNum = +prompt('Enter the second number');

while (secondNum == '') {
	alert("You didn't enter second number...");
	secondNum = +prompt('Enter the second number');
}

const result = `Calculations are finished!

Sum: ${firstNum} + ${secondNum} = ${firstNum + secondNum}
Diff: ${firstNum} - ${secondNum} = ${firstNum - secondNum}
Mult: ${firstNum} * ${secondNum} = ${firstNum * secondNum}
Div: ${firstNum} / ${secondNum} = ${firstNum / secondNum}`;

alert(result);

console.group('Calculator');
console.log(result);
console.groupEnd();
