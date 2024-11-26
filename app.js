function isValidDate(dateStr) {
    const checkDate = (day, month, year) => {
        const fullYear = year < 100 ? year + 2000 : year;
        if (day >= 1 && day <= 31 && month >= 1 && month <= 12 && fullYear) {
            return true;
        }
        return false;
    };

    if (dateStr.includes('.')) {
        const partsDot = dateStr.split('.');
        if (partsDot.length === 3) {
            const day = parseInt(partsDot[0], 10);
            const month = parseInt(partsDot[1], 10);
            const year = parseInt(partsDot[2], 10);
            return checkDate(day, month, year);
        }
    } else if (dateStr.includes('/')) {
        const partsSlash = dateStr.split('/');
        if (partsSlash.length === 3) {
            const day = parseInt(partsSlash[0], 10);
            const month = parseInt(partsSlash[1], 10);
            const year = parseInt(partsSlash[2], 10);
            return checkDate(day, month, year);
        }
    }
    return false;
}

function convertDate(dateStr) {
    let day, month, year;

    if (dateStr.includes('.')) {
        const parts = dateStr.split('.');
        day = parseInt(parts[0], 10);
        month = parseInt(parts[1], 10);
        year = parseInt(parts[2], 10);
    } 
    else if (dateStr.includes('/')) {
        const parts = dateStr.split('/');
        day = parseInt(parts[0], 10);
        month = parseInt(parts[1], 10);
        year = parseInt(parts[2], 10);
    }

    const fullYear = year < 100 ? year + 2000 : year;

    return `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${fullYear.toString().padStart(4, '0')}`;
}

function filterAndConvertDates(dateList) {
    const validDates = [];
    for (const dateStr of dateList) {
        if (isValidDate(dateStr)) {
            validDates.push(convertDate(dateStr));
        }
    }
    return validDates;
}

const dates = ["10/02/1982", "11/12/2023", "29.02.20", "31.04.2022", "00.13.22", 'sasd', "41.12.2023"];
const filteredDates = filterAndConvertDates(dates);
console.log(filteredDates);