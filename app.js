'use strict';

function calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                alert("Ошибка! Деление на ноль.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            console.error(`Неизвестная операция: ${operation}`);
            return;
    }

    console.log(`Результат: ${result}`);

    document.querySelector('.result').innerText = `Результат: ${result}`;

    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
}
