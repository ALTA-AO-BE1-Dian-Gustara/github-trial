function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

console.log(fibonacci(2))
console.log(fibonacci(0))
console.log(fibonacci(9))
console.log(fibonacci(10))
console.log(fibonacci(12))