function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
    }
    this.calculate = function(str) {
        const arrValueAndOp = str.split(' ')
        a = +arrValueAndOp[0]
        op = arrValueAndOp[1]
        b = +arrValueAndOp[2]

        if(isNaN(a) || isNaN(b)) return 'Введите значение формата "3 + 7"'
        
        
        // if(op === '+') return a + b
        // if(op === '-') return a - b
        return this.methods[op](a, b);
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };

}

let calc = new Calculator;

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result)

console.log( calc.calculate("3 - 7") );