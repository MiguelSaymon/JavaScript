// Pegando os dias da semana no sistema
semana = new Date()
dias_semana = semana.getDay()

/* Dias da semana :
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = sexta
    6 = Sábado 
*/

switch (dias_semana) { // Condições Múltiplas
    case 0 :
        console.log('Domingo')
    break // NÃO ESQUECER O BREAK

    case 1 :
        console.log('Segunda')
    break

    case 2 :
        console.log('Terça')
    break

    case 3 :
        console.log('Quarta')
    break

    case 4 :
        console.log('Quinta')
    break

    case 5: 
        console.log('Sexta')
    break

    case 6 :
        console.log('Sábado')
    break

    default :
        console.log('[ERRO]')
    break
}