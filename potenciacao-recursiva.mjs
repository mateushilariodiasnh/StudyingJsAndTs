function potenciacao(base, expoente) {
    if (expoente == 0) {
        return 1;
    }
    return base * potenciacao(base, expoente - 1)
}

console.log(potenciacao(13, 2))