type Tcarro = {
    modelo: string;
    ano: number;
    cor: string;
    marca: string;
}

type TcalcNaoPService = (carro: Tcarro) => boolean

const meuCarro: Tcarro = {
    modelo: 'fusca',
    ano: 1999,
    cor: 'rosa',
    marca: 'volskwagen',
}

interface INaoPaga {
    execute: (carro: Tcarro, calculadora: TcalcNaoPService) => boolean;
}

const naoPaga: INaoPaga = {
    execute: function(carro: Tcarro, calculadora: TcalcNaoPService) : boolean {
        const elePaga = calculadora(carro);
        return elePaga
    }
}
