let salario = 1024;
let plano = "B";

function novoSalarioCalculado(salario, plano) {
    let novoSalario;
    switch (plano) {
        case "A":
            novoSalario = (salario * 0.10) + salario;
            break;
        case "B":
            novoSalario = (salario * 0.15) + salario;
            break;
        case "C":
            novoSalario = (salario * 0.20) + salario;
            break;
        default:
            novoSalario = "plano inválido";
            break;+ salario;
    }
    return novoSalario;
}

console.log(`O seu novo salário é ${novoSalarioCalculado(salario, plano)}`)