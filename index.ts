import inquirer from "inquirer";

let firstNumber = await inquirer.prompt([{
    name: 'value1',
    message: 'Enter first value',
    type: 'number',
}]);

let secondNumber = await inquirer.prompt([{
    name: 'value2',
    message: 'Enter second value',
    type: 'number',
}]);

console.log("Press + for addition");
console.log("Press - for subtraction");
console.log("Press * for multiplication");
console.log("Press / for division");

let operator = await inquirer.prompt([{
    name: 'operator',
    message: 'Enter Action to be performed',
    type: 'input',
}]);

const val1 = firstNumber.value1;
const val2 = secondNumber.value2;
const op = operator.operator;

if (op == '+') 
{
    console.log("Addition is " + (val1 + val2));
} 

else if (op == '-')
 {
    console.log("Subtraction is " + (val1 - val2));
} 

else if (op == '*') 

{
    console.log("Multiplication is " + (val1 * val2));
}

else if (op == '/')
 {
    if (val1.value2 == 0) {
        console.log("Error: Division by zero");
    } 
    else
     {
        console.log("Division is " + (val1/val2));
    }

} 

else {
    console.log("Invalid operator");
}