const fatorial = x => {
    if (x === 0) {
        return 1
    }
    return x * fatorial(x - 1)
}

console.log(fatorial(5))