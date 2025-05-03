function contar() {
    let inicio = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let resultado = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO]') 
    } else {
        resultado.innerHTML = 'Contando :'
        let inicio_numero = Number(inicio.value)
        let fim_numero = Number(fim.value)
        let passo_numero = Number(passo.value)

        if ( passo_numero <= 0) {
            window.alert('[ERRO]')
            passo_numero = 1
        }

        if (inicio_numero < fim_numero) {
            for (let contador = inicio_numero; contador <= fim_numero; contador += passo_numero) {
                    resultado.innerHTML += `${contador} \u{1F449} `
        } } else {
            for (let contador = inicio_numero; contador >= fim_numero; contador -= passo_numero) {
                resultado.innerHTML += `${contador} \u{1F449} `
            }
        }
        resultado.innerHTML += ` \u{1F3C1}`
    }
}