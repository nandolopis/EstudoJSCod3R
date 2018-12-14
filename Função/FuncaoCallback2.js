const notas = [7.7,6.5,5.2,8.9,3.6,7.1,9.0]

//sem callback

const  notasBaixas1 = []

for(let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//com callback

const nostasMenorQue7 = (nota) => nota < 7 //função callback que sera passada para o filter

const notasBaixas2 = notas.filter(nostasMenorQue7)

console.log(notasBaixas)