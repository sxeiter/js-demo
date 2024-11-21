function currencyConverter(amount, fromCurrency, toCurrency) {
    let rate;

    if (fromCurrency === 'RUB' && toCurrency === 'USD') {
        rate = 0.03;
    } else if (fromCurrency === 'RUB' && toCurrency === 'EUR') {
        rate = 0.028;
    } else if (fromCurrency === 'USD' && toCurrency === 'RUB') {
        rate = 33.33;
    } else if (fromCurrency === 'USD' && toCurrency === 'EUR') {
        rate = 0.93;
    } else if (fromCurrency === 'EUR' && toCurrency === 'RUB') {
        rate = 35.71;
    } else if (fromCurrency === 'EUR' && toCurrency === 'USD') {
        rate = 1.08;
    } else {
        return null; 
    }
    return amount * rate;
}