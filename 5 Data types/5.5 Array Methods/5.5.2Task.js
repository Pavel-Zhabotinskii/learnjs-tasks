let arr = [5, 3, 8, 1];

const filterRange = (arr, a, b) => arr.filter(el => el >= a && el <= b)

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (совпадающие значения)

console.log(arr); // 5,3,8,1 (без изменений)