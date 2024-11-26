function isValidCardNumber(cardNumber) {
    const digits = cardNumber.replace(/\D/g, '');
    if (digits.length != 16) {
        return false; 
    }

    let sum = 0;
    for (let i = digits.length - 1; i >= 0; i--) {
        let digit = parseInt(digits[i], 10);
        
        if ((i + 1) % 2 === 0) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
    }
    return sum % 10 === 0;
}

console.log(isValidCardNumber("4561-2612-1234-5467")); 
console.log(isValidCardNumber("1234-5678-9012-3456")); 
console.log(isValidCardNumber("4111-1111-1111-1111"));