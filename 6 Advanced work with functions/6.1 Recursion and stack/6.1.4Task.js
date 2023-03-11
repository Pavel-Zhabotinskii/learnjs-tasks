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

// const printList = (list) => {
//     let newObj = list
//     while(newObj){
//         console.log(newObj.value)
//         newObj = newObj.next
//     }
// }
const printList = (list) => {
    console.log(list.value) 
    if(list.next) printList(list.next)
}

printList(list)