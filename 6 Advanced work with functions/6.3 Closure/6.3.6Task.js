let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField (value){
    return function(a,b){
        return a[value] > b[value] ? 1 : -1
    }
}

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));