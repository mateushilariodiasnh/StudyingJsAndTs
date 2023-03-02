let notaSolicitada = 348;

function minimoDeCedulas(notaSolicitada) {
    let cem = 100;
    let cinquenta = 50;
    let dez = 10;
    let cinco = 5;
    let um = 1;
    let quantidade = 0;
    let notasUtilizadas = [];

    while (notaSolicitada >= cem) {
        notaSolicitada -= cem
        quantidade++
        notasUtilizadas.push(cem)
    }

    while (notaSolicitada >= cinquenta) {
        notaSolicitada -= cinquenta
        quantidade++
        notasUtilizadas.push(cinquenta)
    }

    while (notaSolicitada >= dez) {
        notaSolicitada -= dez
        quantidade++
        notasUtilizadas.push(dez)
    }

    while (notaSolicitada >= cinco) {
        notaSolicitada -= cinco
        quantidade++
        notasUtilizadas.push(cinco)
    }

    while (notaSolicitada >= um) {
        notaSolicitada -= um
        quantidade++
        notasUtilizadas.push(um)
    }

    console.log(quantidade)
    console.log(notasUtilizadas)

}

minimoDeCedulas(notaSolicitada)