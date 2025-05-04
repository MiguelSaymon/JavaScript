function tabuada() {
    let numero = document.getElementById('numero')
    let tabuada = document.getElementById('select')
    let contador = 1

    if (numero.value.length == 0) {
        window.alert('[ERRO}')
    } else {
        let numero_usuario = Number(numero.value)

        tabuada.innerHTML = ``

        while (contador <= 10) {
            let item = document.createElement('option')
            item.text = `${numero_usuario} x ${contador} = ${numero_usuario*contador}`
            tabuada.value = `tabuada${contador}`
            tabuada.appendChild(item)
            contador++
        }
    }
}