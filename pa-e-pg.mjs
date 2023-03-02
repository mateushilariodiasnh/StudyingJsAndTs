let numeroDeTermo = 7;
let primeiroTermo = 3;
let razao = 4;


function ProgressaoAritimetica(numeroDeTermo, primeiroTermo, razao) {
    let termosDaSequenciaPa = [primeiroTermo];
    let auxiliarParaSoma = primeiroTermo;
    let somaDosTermosPa = 0;

    for (let i = 1; i < numeroDeTermo; i++) {
        auxiliarParaSoma += razao
        termosDaSequenciaPa.push(auxiliarParaSoma)
    }
    
    for (let j = 0; j < termosDaSequenciaPa.length; j++) {
        somaDosTermosPa += termosDaSequenciaPa[j];
    }

    console.log(termosDaSequenciaPa)
    console.log(somaDosTermosPa)
};

function ProgressaoGeometrica(numeroDeTermo, primeiroTermo, razao) {
    let termosDaSequenciaPg = [primeiroTermo];
    let auxiliarParaMultiplicacao = primeiroTermo;
    let somaDosTermosPg = 0;

    for (let i = 1; i < numeroDeTermo; i++) {
        auxiliarParaMultiplicacao *= razao
        termosDaSequenciaPg.push(auxiliarParaMultiplicacao)
    }

    for (let j = 0; j < termosDaSequenciaPg.length; j++) {
        somaDosTermosPg += termosDaSequenciaPg[j];
    }

    console.log(termosDaSequenciaPg)
    console.log(somaDosTermosPg)
};

ProgressaoAritimetica(numeroDeTermo, primeiroTermo, razao)
ProgressaoGeometrica(numeroDeTermo, primeiroTermo, razao)