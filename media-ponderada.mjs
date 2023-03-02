let aluno = {
    notaOne: 6.9,
    notaTwo: 7.8,
    notaThree: 5.3,
}

function mediaPonderadaEClassificacao(aluno) {
    let mediaPonderada;
    let maiorNota = 0;
    let pesoParaAMaiorNota = 4;
    let pesoParaAsDemaisNotas = 3;
    let resultadopesoParaAMaiorNotasMultiplicacao;
    let resultadoPesoParaAsDemaisNotasSoma = 0;

    Object.values(aluno).forEach(nota => {
        if (nota > maiorNota) {
            maiorNota = nota
            resultadopesoParaAMaiorNotasMultiplicacao = maiorNota * pesoParaAMaiorNota
        }
        else { resultadoPesoParaAsDemaisNotasSoma += nota * pesoParaAsDemaisNotas }
    })

    mediaPonderada = (resultadoPesoParaAsDemaisNotasSoma + resultadopesoParaAMaiorNotasMultiplicacao) / (pesoParaAMaiorNota + (pesoParaAsDemaisNotas * 2))

    if (mediaPonderada >= 5) {
        console.log("Aprovado")
    }
    else {console.log("Reprovado")}

    console.log(mediaPonderada)

}

mediaPonderadaEClassificacao(aluno)