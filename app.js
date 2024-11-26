function stringToArray(dateStr) {
    const separators = ['.', '/', '-'];
    const separator = separators.find(separator => dateStr.includes(separator));
    if (!separator) {
        return null;
    }
    const parts = dateStr.split(separator);
    return parts.map(part => parseInt(part, 10));
}

function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function isValidDate([day, month, year]) {
    if (day < 1 || day > 31) {
        return false;
    }
    if (month < 1 || month > 12) {
        return false;
    }
    year = year < 100 ? year + 2000 : year;
    if (year < 1 || year > 9999) {
        return false;
    }
    if (isLeapYear(year) && month === 2 && day > 29) {
        return false;
    }
    if (!isLeapYear(year) && month === 2 && day > 28) {
        return false;
    }
    return true;
}

function convertDate([day, month, year]) {
    return `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year.toString().padStart(4, '0')}`;
}

function filterAndConvertDates(dateList) {
    const validDates = [];
    for (const dateStr of dateList) {
        const parts = stringToArray(dateStr);
        if (parts && isValidDate(parts)) {
            validDates.push(convertDate(parts));
        }
    }
    return validDates;
}

const dates = ["10/02/1982", "11/12/2023", "29.02.20", "31.04.2022", "00.13.22", 'sasd', "41.12.2023"];
const filteredDates = filterAndConvertDates(dates);
console.log(filteredDates);