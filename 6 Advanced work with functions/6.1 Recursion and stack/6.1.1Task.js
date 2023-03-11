// 1) const sumTo = (n) => {
//     let sum = 0
//     for(let i = n; i > 0; i--){
//         sum += i
//     }
//     return sum
// }

// 2) const sumTo = (n) => n === 0 ? n : n + sumTo(n - 1)

const sumTo = (n) => n * (n + 1) / 2;

console.log(sumTo(1)) //= 1
console.log(sumTo(2)) //= 2 + 1 = 3
console.log(sumTo(3)) //= 3 + 2 + 1 = 6
console.log(sumTo(4)) //= 4 + 3 + 2 + 1 = 10

console.log(sumTo(100)) //= 100 + 99 + ... + 2 + 1 = 5050