let user = [
    {
        "nome": "Gustavo",
        "altura": 88,
        "taxaDeCrescimentoAnual": 0.12,
    },
    {
        "nome": "Leonardo",
        "altura": 102,
        "taxaDeCrescimentoAnual": 0.7,
    }
]

function crescimentoDeAltura(user) {
    let alturaOne = user[0].altura;
    let alturaTwo = user[1].altura;
    let ano = 0;

    if (alturaOne === alturaTwo) {
        console.log("Eles possuem alturas iguais.")
    }

    do {
        alturaOne += alturaOne * user[0].taxaDeCrescimentoAnual;
        alturaTwo += alturaTwo * user[1].taxaDeCrescimentoAnual;
        ano++
    } while (alturaOne <= alturaTwo);

    console.log("ultrapassara em ", ano)

}

crescimentoDeAltura(user)