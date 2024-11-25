// const score = [1,4,6,3,12];

// score.forEach((el, i) => {
//   console.log(`индекс ${i + 1} и элемент ${el}`)
// })

// const transactions = [10, -7, 50, -10, 100];

// console.log(transactions.map((el) => el * 60));


// const transactions = [10, -7, 50, -10, 100];
// const positive = transactions
//     .filter(el => {
//   // if (el > 0) {
//   //   return el
//   // }
//     return el > 0;
//     })
//     .map(el => el * 60)
// console.log(positive)

// const prices = [[100, 200], [120, 100], [200, 350]];

// const res = prices
// .map(product => product[1] - product[0])
// .filter(price => price > 0);

// console.log(res);

const transactions = [10, -7, 50, -10, 100];

const balance = transactions.reduce((acc, el) => acc + el, 0)

console.log(balance);

