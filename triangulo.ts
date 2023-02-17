let hipotenusa: number = Number(prompt("Digite a primeira medida do triângulo:"));
let catetoOposto: number = Number(prompt("Digite a segunda medida do triângulo:"));
let catetoAdjacente: number = Number(prompt("Digite a terceira medida do triângulo:"));

function Triangulo(hipotenusa: number, catetoOposto: number, catetoAdjacente: number): void {

    if (hipotenusa === catetoOposto && hipotenusa === catetoAdjacente) {
        alert("o triângulo é equilátero")
    }
    else if (hipotenusa != catetoOposto && hipotenusa != catetoAdjacente && catetoOposto != catetoAdjacente) {
        alert("o triângulo é escaleno")
    }
    else {
        alert("o triângulo é isósceles")
    }

}

Triangulo(hipotenusa, catetoOposto, catetoAdjacente)
