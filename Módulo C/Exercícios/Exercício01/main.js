function carregar() {
    var mensagem = document.getElementById('mensagem_da_div')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = 'foto_manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'foto_tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'foto_noite.png'
        document.body.style.background = '#515154'
    }
}