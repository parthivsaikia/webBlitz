const numbers = [1, 2, 2, 3, 4, 4, 5];

const ans=numbers.reduce((acc, num) => acc.includes(num) ? acc : [...acc, num], [])
console.log(ans)