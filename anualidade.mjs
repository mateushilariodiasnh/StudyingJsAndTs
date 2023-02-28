let mesPago = 7;
let valorDaAnualidade = 489.00;

function calculoDoValorFinalPago(mesPago, valorDaAnualidade) {
    let taxaDoJuroComposto = 0.05;
    let janeiro = 1;
    let valorFinalPago = valorDaAnualidade * (( 1 + taxaDoJuroComposto ) ** mesPago - janeiro )
    console.log(valorFinalPago + valorDaAnualidade);
}

calculoDoValorFinalPago(mesPago, valorDaAnualidade)