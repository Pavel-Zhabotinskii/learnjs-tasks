function f(a, b) {
  console.log( a + b );
}
Function.prototype.defer = function(ms){
    const func = this;
    return function(a, b){
        setTimeout(() => func.call(this , a, b),ms)
    }
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.