let notas = [3, 4.7, 8.7, 10, 5.9, 6, 6, 7, 2, 4, 6, 7, 9, 8.5, 9.8];

function notasEmLetras(notas) {
    let notaA = [];
    let notaB = [];
    let notaC = [];
    let notaD = [];
    for (let i = 0; i < notas.length; i++) {
        let conceitoA = notas[i] >= 9.0 && notas[i] <= 10.0;
        let conceitoB = notas[i] >= 7.0 && notas[i] <= 8.9;
        let conceitoC = notas[i] >= 5.0 && notas[i] <= 6.9;
        if (conceitoA) {
            notaA.push(notas[i])
        }
        else if (conceitoB) {
            notaB.push(notas[i])
        }
        else if (conceitoC) {
            notaC.push(notas[i])
        }
        else { notaD.push(notas[i]) }
    }
    console.log("As notas A foram:", notaA)
    console.log("As notas B foram:", notaB)
    console.log("As notas C foram:", notaC)
    console.log("As notas D foram:", notaD)
}

notasEmLetras(notas)