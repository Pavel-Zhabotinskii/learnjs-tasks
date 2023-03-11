let arr = ["HTML", "JavaScript", "CSS"];

const copySorted = (arr) => {
    const newArr = []
    return newArr.concat(arr).sort()
}

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)