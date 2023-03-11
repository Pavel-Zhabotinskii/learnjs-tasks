let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}
console.log(menu)

const multiplyNumeric = (obj) => {
    for(key in obj){
        typeof obj[key] === 'number' ? obj[key] *= 2 : obj[key];  
    }
}
multiplyNumeric(menu)

console.log(menu)
