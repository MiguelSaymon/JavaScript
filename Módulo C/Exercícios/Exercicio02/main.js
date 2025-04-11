function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formulario_ano = document.getElementById('txtano')
    var resultado = document.querySelector('div#resultado')

    if (formulario_ano.value.length == 0 || Number(formulario_ano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var formulario_sexo = document.getElementsByName('radsex')
        var idade = ano - Number(formulario_ano.value) 
        // resultado.innerHTML = `Sua idade é ${idade} anos`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (formulario_sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'crianca_homem.png')
            } else if (idade <= 24) {
                // Jovem 
                img.setAttribute('src', 'jovem_homem.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'adulto_homem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso.png')
            }

        } else if (formulario_sexo[1].checked) {
            genero = 'Mulher'
            if (idade > 0 && idade < 13) {
                // Criança
                img.setAttribute('src', 'crianca_mulher.png')
            } else if (idade >= 13 && idade <= 24) {
                // Jovem
                img.setAttribute('src', 'jovem_mulher.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'adulta_mulher.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
        resultado.appendChild(img)
    }
    img.style.borderRadius = ' 50%'
}