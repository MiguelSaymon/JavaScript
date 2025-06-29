let num = document.querySelector('input#fnum')
let lista = document.getElementById('flista')
let resultado = document.querySelector('div#resultado')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        resultado.innerHTML = ''
    } else {
        window.alert('[ERRO]')
    }

    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione um valor')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]

        for(let pos in valores) {
            if (valores[pos] > maior) 
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo, temos ${total} números cadastrados </p>`

        resultado.innerHTML += `<p>O maior valor informado foi ${maior} </p>`
        resultado.innerHTML += `<p>O menor valor informado foi ${menor} </p>`
    }
}