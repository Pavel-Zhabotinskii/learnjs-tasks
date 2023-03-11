let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

const getAverageAge = (arr) => {
    let averageAge = 0
    for(let value of arr){
        averageAge += value.age
    }
    return averageAge/arr.length
}

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28