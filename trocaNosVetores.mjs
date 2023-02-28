let curso = ["ADS", "DSM", "CC", "EGC"];
let duracaoDoCurso = [3, 3, 4, 5];

console.log(curso.values)
function trocaDeValores(curso, duracaoDoCurso) {
    let tamanhoParaAExclusao = curso.length;
    duracaoDoCurso.push(curso);
    curso.push(duracaoDoCurso);
    duracaoDoCurso.splice(0, tamanhoParaAExclusao);
    curso.splice(0, tamanhoParaAExclusao);
    curso.splice(8, tamanhoParaAExclusao);
    console.log(`O vetor curso agora fica assim: ${curso}`)
    console.log(`O vetor duracaoDoCurso agora fica assim: ${duracaoDoCurso}`)
}
 
trocaDeValores(curso, duracaoDoCurso)