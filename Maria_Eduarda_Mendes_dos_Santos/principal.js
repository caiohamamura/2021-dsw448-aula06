"use strict";
let canvas = document.getElementById("meu-canvas");
let ctx = canvas.getContext("2d");
let img = document.querySelector("#aranha");

let posx = 0;
let posy = 0;

const QDE_MOVIMENTO = 10;

function limparCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function desenhaHeroi() {
    ctx.drawImage(img, posx, posy, 100, 150);
}
function terminajogo (){
    alert("Parabéns! Você encontrou a porta!");
}
desenhaHeroi();

document.onkeydown = function(evento) {
    switch (evento.key) {
        case "ArrowUp":
            if (posy > 0)
                posy -= QDE_MOVIMENTO;
            break;
        case "ArrowDown":
            if (posy + img.height < canvas.height)
                posy += QDE_MOVIMENTO;
            break;
        case "ArrowRight":
            if (posx + img.width < canvas.width)
                posx += QDE_MOVIMENTO;
            break;
        case "ArrowLeft":
            if (posx > 0)
                posx -= QDE_MOVIMENTO;
            break;

        default:
            break;
    }
if ((posx>650)&& (posx<700) && (posy>385) && (posy<400)) {
    terminajogo();
}
    limparCanvas();
    desenhaHeroi();
}