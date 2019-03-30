//создаем рандомное число
var numberRandom = function (operandOne, operandTwo) {
    let numberRnd = Math.floor(Math.random() * operandOne - operandTwo);
    return numberRnd;
}

document.write('<h1>Задание 3 </h1><br>')  

var numberOne = numberRandom(100, 50);
var numberTwo = numberRandom(100, 50);

document.write('первое число = ' + numberOne + '<br></br>');
console.log('первое число = ' + numberOne);
document.write('второе число = ' + numberTwo + '<br></br>');
console.log('второе число = ' + numberTwo);

if (numberOne > 0 && numberTwo > 0) {
    document.write('разница чисел равна ' + (numberOne + numberTwo));
    console.log('разница чисел равна ' + (numberOne - numberTwo));
} else if (numberOne < 0 && numberTwo < 0) {
    document.write('произведение чисел равно ' + (numberOne + numberTwo));
    console.log('произведение чисел равно ' + (numberOne * numberTwo));
} else {
    document.write('сумма чисел равна ' + (numberOne + numberTwo));
    console.log('сумма чисел равна ' + (numberOne + numberTwo));
};


document.write('<h1>Задание 4 </h1><br>');
var a = parseInt(prompt ('Введите число a от 0 до 15: (нужно для задания 4)'));

switch(a) {
    case 0:  
    document.write(a++);

    case 1:  
    document.write(a++);

    case 2:  
    document.write(a++);

    case 3:  
    document.write(a++);

    case 4:  
    document.write(a++);

    case 5:  
    document.write(a++);

    case 6:  
    document.write(a++);

    case 7:  
    document.write(a++);

    case 8:  
    document.write(a++);

    case 9:  
    document.write(a++);

    case 10:  
    document.write(a++);

    case 11:  
    document.write(a++);

    case 12:  
    document.write(a++);

    case 13:  
    document.write(a++);

    case 14:  
    document.write(a++);      

    case 15:  
    document.write(a++);
    break;  

    default:
      break;
}

document.write('<h1>Задание 5 </h1><br>');

var numOne = numberRandom(100, 50);
var numTwo = numberRandom(100, 50);

document.write('заданы два числа: ' + numOne + ' и ' + numTwo + '<br></br>');
console.log('заданы два числа: ' + numOne + ' и ' + numTwo);

function addition(numOne, numTwo) {
    let addition = numOne + numTwo;
    return addition;
}

console.log('их сумма равна ' + addition(numOne, numTwo));
document.write('их сумма равна ' + addition(numOne, numTwo) + '<br></br>');

function difference(numOne, numTwo) {
    let difference = numOne - numTwo;
    return difference;
}

console.log('их разница равна ' + difference(numOne, numTwo));
document.write('их разница равна ' + difference(numOne, numTwo) + '<br></br>');

function division(numOne, numTwo) {
    let division = numOne / numTwo;
    return division;
}

console.log('результат после деления ' + division(numOne, numTwo).toFixed(1));
document.write('результат после деления ' + division(numOne, numTwo).toFixed(1) + '<br></br>');

function increase(numOne, numTwo) {
    let increase = numOne * numTwo;
    return increase;
}

console.log('результат после умножения ' + increase(numOne, numTwo));
document.write('результат после умножения ' + increase(numOne, numTwo) + '<br></br>');

var operation = prompt('введите знак операции (нужно для 6 задания) : + сложение, - вычитание, * умножение, / деление');

document.write('<h1>Задание 6 </h1><br>');

if (operation == '+' || operation == '-' || operation == '*' || operation == '/') {
    function mathOperation(numOne, numTwo, operation) {
        switch (operation) {
            case '+':
                return addition(numOne, numTwo);
                break;
            case '-':
                return difference(numOne, numTwo);
                break;
            case '/':
                return division(numOne, numTwo);
                break;
            case '*':
                return increase(numOne, numTwo);
                break;
        }
    }
} else {
    alert('надо было ввести знак операции');
};

console.log(mathOperation(numOne, numTwo, operation).toFixed(1));
document.write(mathOperation(numOne, numTwo, operation).toFixed(1));

document.write('<h1>Задание 7 </h1><br>');

function power(val, pow) {
    if (pow === 0) {
        return 1;
    } else {
        return val * power(val, pow - 1);
    }
}

console.log(power(4, 2));
document.write('4 в степени 2 = ' + power(4, 2));