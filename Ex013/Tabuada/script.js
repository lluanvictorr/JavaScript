function tabuada(){
 let numero = document.getElementById("txtn")
 let tabuada = document.getElementById('tab')
 if (numero.value.length == 0){
    window.alert('Informe um número!')}
 else{   
 let n = Number(numero.value)
 tabuada.innerHTML=''   
 for(let contador = 1; contador<=10; contador+=1){
    let item = document.createElement('option')  
    item.text = `${n} x ${contador} = ${n*contador}` 
    item.value = `tab${contador}`
    tab.appendChild(item) 
    
}
}

}