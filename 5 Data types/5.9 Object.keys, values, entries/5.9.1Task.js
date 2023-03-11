let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const sumSalaries = (obg) => {
    let sum = 0
    for (let value of Object.values(obg)){
        sum += value
    }
    return sum
}

console.log( sumSalaries(salaries) );