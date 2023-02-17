function Operacoes(numberOne: number, numberTwo: number) {

    let adicao: number = numberOne + numberTwo;
    let subtracao: number = numberOne - numberTwo;
    let multiplicacao: number = numberOne * numberTwo;
    let divisao: number = numberOne / numberTwo

    return(
        console.log(`a adição é ${adicao}`),
        console.log(`a subtração é ${subtracao}`),
        console.log(`a multiplicação é ${multiplicacao}`),
        console.log(`a divisão é ${divisao}`)
    )
}

let numberOne: number = 24;
let numberTwo: number = 56;

console.log(Operacoes(numberOne, numberTwo))