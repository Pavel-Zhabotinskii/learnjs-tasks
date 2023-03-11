function pow(x, n) {
    return n < 1 ? `Степень ${n} не поддерживается, используйте натуральное число`: x**n
}

console.log(pow(1,0))