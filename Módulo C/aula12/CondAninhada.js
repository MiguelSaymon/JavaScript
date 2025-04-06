var idade = 18

if (idade >= 18 ) {  //Condição Aninhada
    console.log('Você pode votar')
} else {
    if (idade >= 16) {
        console.log('Você tem a opção de votar')
    } else {
        console.log('Você não pode votar')
    }
}