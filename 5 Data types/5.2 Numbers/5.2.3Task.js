function readNumber(){
    let a = +prompt('number?')
    let b = null
    if(typeof a === 'number' && !isNaN(a)){
        return  a
    } else {
        if (isNaN(a)){
          readNumber()
        } else {
          return b
        }
    }
}
console.log(readNumber())