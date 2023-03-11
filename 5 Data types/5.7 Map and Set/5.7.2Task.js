let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

const aclean = (arr) => {
    const newArr = []
    arr.map(el => {
        newArr.push(el.toLowerCase().split('').sort().join(''))
    })
    return Array.from(new Set(newArr))
}


console.log( aclean(arr) );