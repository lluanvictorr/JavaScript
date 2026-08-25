function contagem(){
var numinicio = document.getElementById('txti')
var pulo = document.getElementById('txtp')
var numfinal = document.getElementById('txtf')
var resultado = document.getElementById('resultado')
if (numinicio.value == ''|| pulo.value == '' || numfinal.value == ''){
    window.alert('Por favor preencha as informações abaixo para a contagem ser feita!')
}
else{
    resultado.innerHTML = 'Contando: <br>'
    let i = Number(numinicio.value)
    let f = Number(numfinal.value)
    let p = Number(pulo.value)
    if(p <= 0){
      window.alert('SALTO INVÁLIDO! Considerando salto = 1') 
      p = 1 
    }
    if (i < f){
        //Contagem CRESCENTE
        for(var c = i; c < f; c += p){
        resultado.innerHTML += ` &rightarrow; ${c}  `
    }   
    }
    else{
        //Contagem DECRESCENTE
        for(var c = i; c>= f; c -= p ){
            resultado.innerHTML += ` &rightarrow; ${c} `
        }
    }
    resultado.innerHTML += '|' 
}


}