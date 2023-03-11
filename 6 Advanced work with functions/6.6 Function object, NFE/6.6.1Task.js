function makeCounter() {

    function counter() {
        counter.set = function (value){
            counter.count = value
        }
        counter.decrease = function (){
            counter.count--
        }
        return counter.count++;
    };

    return counter;
}
  
let counter = makeCounter();
counter()
counter.set(15)
counter()
counter()
counter.decrease()
console.log( counter() ); 