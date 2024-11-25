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

function crypto(password) {
    if (!password || password.length < 8 || password.length > 10) {
        return null;
    }
    const middleIndex = Math.floor(password.length / 2);
    const firstHalf = password.slice(0, middleIndex);
    const secondHalf = password.slice(middleIndex);
    const reversedSecondHalf = secondHalf.split('').reverse().join('');
    const swappedFirstAndMiddle = firstHalf.slice(0, 1) + reversedSecondHalf.slice(3, 4) + firstHalf.slice(0, 1) + reversedSecondHalf.slice(0, 3) + firstHalf.slice(2);
    return swappedFirstAndMiddle;
}

function checkPassword(encryptedPassword, originalPassword) {
    if (!encryptedPassword || !originalPassword) {
        return false;
    }
    return originalPassword === crypto(encryptedPassword);
}

const password = 'userpassword';
const encryptedPassword = crypto(password);
const decryptedPassword = crypto(encryptedPassword);
console.log(password, encryptedPassword, decryptedPassword, password === decryptedPassword);