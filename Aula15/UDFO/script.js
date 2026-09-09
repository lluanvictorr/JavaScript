let numero = document.getElementById('fnum')
let lista = document.getElementById('flista')
let resultado = document.getElementById('resultado')
let valores = []
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
    return true
    }
    else{
    return false
    }
}
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }

}

function adicionar(){
    if(isNumero(numero.value) && !inLista(numero.value, valores)){
    }
    else{
        window.alert('Por favor insira um valor válido para ser adicionado!')
    }
}