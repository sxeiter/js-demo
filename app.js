function reverseFilter(arr, removeFunc) {
    return arr.reduce((acc, el) => {
        if (!removeFunc(el)) {
            acc.push(el)
        }
        return acc;
    }, [])
}

function isGreaterThanFive(el) {
    return el > 5;
}

const inputArray = [3, 6, 9, 2];
const outputArray = reverseFilter(inputArray, isGreaterThanFive);
console.log(outputArray);