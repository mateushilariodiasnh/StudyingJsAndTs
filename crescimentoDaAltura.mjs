let user = [
    {
        "nome": "Gustavo",
        "altura": 88,
        "taxaDeCrescimentoAnual": 1.2,
    },
    {
        "nome": "Leonardo",
        "altura": 122,
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

    while (alturaOne <= alturaTwo) {
        alturaOne = (alturaOne * user[0].taxaDeCrescimentoAnual) + alturaOne;
        alturaTwo = (alturaTwo * user[1].taxaDeCrescimentoAnual) + alturaTwo;
        ano++
    }

    console.log(alturaOne)
    console.log("ultrapassara em ", ano)

}

crescimentoDeAltura(user)