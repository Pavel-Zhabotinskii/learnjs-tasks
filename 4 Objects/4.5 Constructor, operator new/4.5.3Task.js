function Accumulator(startingValue){
    this.value = startingValue;

    this.read = function (){
        this.number = +prompt('Введите число:' , 0)
        return this.value += this.number
    }
}

let accumulator = new Accumulator(1); 

accumulator.read(); 
accumulator.read(); 

alert(accumulator.value);

