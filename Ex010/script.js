function carregar() {

var msg = window.document.getElementById("msg");
var gif = window.document.getElementById("gif");
var data = new Date();
var hora = 20;
msg.innerHTML = `Agora são ${hora} horas`;
if(hora >=0 && hora <12){
    msg.innerHTML += " da manhã.<br> O dia está apenas começando,<br>te desejo um ótimo dia!";
     gif.src = "8bitdia.gif";
     document.body.style.background = "#86b2eb";
}
else if (hora >=12 && hora <=18){
    msg.innerHTML += " da tarde.<br>Agora é metade do dia,<br>tenha um ótimo resto da tarde!";
    gif.src = "8bittarde.gif";
    document.body.style.background = "#e27644";
}
else{
    msg.innerHTML += " da noite.<br>O dia já está terminando...<br>Tenha uma ótima noite!";
    gif.src = "8bitnoite.gif";
    document.body.style.background = "#234d74";
}
}