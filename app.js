function encryptPassword(password) {
    const passwordArray = password.split('');
    const length = passwordArray.length;
    const encryptedArray = new Array(length);

    for (let i = 0; i < length; i++) {
        if (i < length / 2) {
            encryptedArray[i] = passwordArray[length - 1 - i]; .
        } else {
            encryptedArray[i] = passwordArray[i]; 
        }
    }
    return encryptedArray.join('');
}

function checkPassword(originalPassword, encryptedPassword) {
    const decryptedPassword = encryptPassword(encryptedPassword); 
    return originalPassword === decryptedPassword; 
}

