//1) Вариант не сработает
//  function Constr(){}
// Constr.prototype = {
//    num: 42
// }


// let obj = new Constr()
// console.log(obj.num)
// let obj2 = new obj.constructor();
// console.log(obj2.num)
//2)Сработает
function Constr() {
    this.num = 42
}

let obj = new Constr()
console.log(obj.num)

let obj2 = new obj.constructor();
console.log(obj2.num)



