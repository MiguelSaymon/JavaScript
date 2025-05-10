let numero = [2, 4, 6, 8, 10] // Array ou Vetor

    //{VARIÁVEL}.push = 12 Adiciona o elemento a última posição 

// Quando não colocamos em `` (crase), o vetor adiciona os colchetes :

console.log(numero) // Forma padrão

console.log('-----------------------------//-----------------------------')

// E quando adicionamoos `` crases, o vetor separa os elementos por , (vírgula) :

console.log(`Nosso vetor é ${numero}`) 

console.log('-----------------------------//-----------------------------')

let numero_dois = [5, 8, 4]

// Aqui, o JS vai criar o elemento, vai criar o índice e vai adicionar o valor desejado :

numero_dois[3] = 6 

    //{VARIÁVEL}.sort() . Vai colocar os elementos em ordem crescente
console.log(numero_dois)

console.log('-----------------------------//-----------------------------')

// {VARIÁVEL}.length . Vai medir a 'largura'/ quantos elementos tem, no caso 5

let numero_tres = [20, 30, 40, 50, 60]
console.log(`O Vetor/Array tem ${numero_tres.length} elementos`)

// posições 
console.log(`O primeiro do elemento do Vetor é ${numero_tres[0]}`)

console.log('-----------------------------//-----------------------------')

let numero_quatro = [1,0,19,65,94]
numero_quatro.sort()

for (var posicao = 0; posicao < numero_quatro.length ; posicao ++) {
    console.log(numero_quatro[posicao])
}

console.log('-----------------------------//-----------------------------')

// Simplificação

let numero_cinco = [24, 42, 17,32,53]
numero_cinco.sort()

for(let pos in numero_cinco) {
    console.log(numero_cinco[pos])
}

console.log('-----------------------------//-----------------------------')

    //Buscando valores no vetor :

let numero_seis = [7,99,33,74,39]
numero_seis.sort()

// numero_seis.indexOf(74) TRUE
// numero_seis.indexOf(8)  FALSE

console.log(numero_seis.indexOf(74))
console.log(numero_seis.indexOf(8))

console.log('-----------------------------//-----------------------------')