let curso = ["ADS", "DSM", "CC", "EGC"];
let duracaoDoCurso = [3, 3, 4, 5];

function trocaDeValores(curso, duracaoDoCurso) {
    let tamanhoParaAExclusao = curso.length;
    // let arrayDuracaoDoCurso = duracaoDoCurso.concat(curso);
    // let arrayCurso = curso.concat(duracaoDoCurso);
    // arrayDuracaoDoCurso.splice(0, tamanhoParaAExclusao);
    // arrayCurso.splice(0, tamanhoParaAExclusao);
    // arrayCurso.splice(4, tamanhoParaAExclusao);
    // console.log(`O vetor curso agora fica assim: ${arrayCurso}`)
    // console.log(`O vetor duracaoDoCurso agora fica assim: ${arrayDuracaoDoCurso}`)

    for (let i = 0; i < tamanhoParaAExclusao; i++) {
        curso.push(duracaoDoCurso[i]);
        duracaoDoCurso.push(curso[i]);
    }

    duracaoDoCurso.splice(0, tamanhoParaAExclusao);
    curso.splice(0, tamanhoParaAExclusao);
    curso.splice(4, tamanhoParaAExclusao);

    console.log(`O vetor curso agora fica assim: ${curso}`)
    console.log(`O vetor duracaoDoCurso agora fica assim: ${duracaoDoCurso}`)
}

trocaDeValores(curso, duracaoDoCurso)