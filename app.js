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

function getDaysInMonth(month, year) {
    if (month === 2) {
        return isLeapYear(year) ? 29 : 28;
    }
    return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
}

function isValidDate([day, month, year]) {
    
    if (month < 1 || month > 12) {
        return false;
    }

    year = year < 100 ? year + 2000 : year;

    if (year < 1900 || year > new Date().getFullYear()) {
        return false;
    }

    const maxDaysInMonth = getDaysInMonth(month, year);
    return day >= 1 && day <= maxDaysInMonth;
}

function convertDate([day, month, year]) {
    year = year < 100 ? year + 2000 : year;
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