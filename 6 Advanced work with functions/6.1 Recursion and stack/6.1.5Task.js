let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

const printListReverse = (list) => {
    let newObj = list
    let arr = []
    while(newObj){
        arr.unshift(newObj.value)
        newObj = newObj.next
    }
    arr.forEach(el => console.log(el))
}
// const printListReverse = (list) => {
//     if(list.next) printListReverse(list.next)
//     console.log(list.value) 
// }

printListReverse(list)