function verificar() {
    var nome = document.getElementById("txtnome")
    var data = new Date() 
    var ano = data.getFullYear()
    var anousuario = document.getElementById("txtano")
    var resultado = document.getElementById("resultado")
   if (anousuario.value == 0 || anousuario.value > ano ) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
   }
   else {
    var sexo = document.getElementsByName("radsexo")
    var idade = ano - (anousuario.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute ('id', 'imagem')
    if (sexo[0].checked)
        {
        genero = "masculino"
        if(idade >= 0 && idade < 12){
           img.setAttribute('src', 'criança.png')
        }
        else if ( idade <= 25){
            img.setAttribute('src', 'jovemhomem.png')
        }
        else if (idade <= 50){
            img.setAttribute('src', 'homemadulto.png')
        }
        else{
            img.setAttribute('src', 'homemvelho.png')
        }
        }
        else if (sexo[1].checked)
            {
        genero = "feminino"
        if (idade >= 0 && idade < 10)
            {
            img.setAttribute('src', 'criança.png')
            }
    
        else if (idade <=25 )
            {
            img.setAttribute('src', 'jovemmulher.png' )
            }
           
        else if (idade <= 50)
            {
            img.setAttribute('src', 'mulheradulta.png' )
            }
           
        else{
            img.setAttribute('src', 'mulhervelha.png')
        }
        }
    
        resultado.style.textAlign = 'center'
    resultado.innerHTML = ` Olá ${nome.value}, muito prazer! Gênero ${genero} com ${idade} anos.`
    resultado.appendChild(img)
}
}