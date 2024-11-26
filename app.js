function isValidCardNumber(cardNumber) {
    if (cardNumber.includes('-')) {
        cardNumber = cardNumber.split('-').join('');
    }
    const digits = cardNumber.replace(/\D/g, '');
    
    let sum = 0;
    const isEven = digits.length % 2 === 0 ? 0 : 1; 
    for (let i = isEven; i < digits.length; i += 2) {
        let digit = parseInt(digits[i], 10);
        digit *= 2;
        if (digit > 9) {
            digit -= 9;
        }
        sum += digit;
    }

    for (let j = 1 - isEven; j < digits.length; j += 2) {
        sum += parseInt(digits[j], 10);
    }

    return sum % 10 === 0;
}

console.log(isValidCardNumber("4561-2612-1234-5467")); 
console.log(isValidCardNumber("1234-5678-9012-3456")); 
console.log(isValidCardNumber("4111-1111-1111-1111"));
console.log(isValidCardNumber("234s834503458353"));
console.log(isValidCardNumber("2342834503458353"));
console.log(isValidCardNumber("4561-2612-1234-5464"));
console.log(isValidCardNumber("4561-2612-1534-5464"));