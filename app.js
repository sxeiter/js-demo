function createQuery(params) {
    const urlParams = Object.entries(params).map(([key, value]) => `${key}=${value}`);
    return urlParams.join('&');
};

const newObj = {
    search: 'Вася',
    surname: 'пупкин',
    take: 10,
};

console.log(createQuery(newObj));

