"use strict";
let canvas = document.querySelector("#icanvas");
let ctx = canvas.getContext("2d");
let imgGato = document.querySelector("#gatinho");
let imgLa = document.querySelector("#la");


const altla = 100;
const lgla = 70;

const altgato = 50;
const lggato = 50;

let posx = 0;
let posy = 0;

let posxLa=350;
let posyLa=350;

const QT_MOV = 5;


function limpaCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function mostrargatinho() {
    ctx.drawImage(imgGato, posx, posy, lggato, altgato);
}

function mostrarla() {
    ctx.drawImage(imgLa, posxLa, posyLa, lgla, altla);
   
}

mostrargatinho();
mostrarla();

document.onkeydown = function(evento) {
    switch (evento.key) {
        case "ArrowUp":
            if (posy > 0)
                posy -= QT_MOV;
            break;
        case "ArrowDown":
            if (posy + imgGato.height  < canvas.height)
                posy += QT_MOV;
            break;
        case "ArrowLeft":
            if (posx > 0)
                posx -= QT_MOV;
            break;
        case "ArrowRight":
            if (posx + imgGato.height   < canvas.width)
                posx += QT_MOV;
            break;

        default:
            break;
    }

    limpaCanvas();
    mostrargatinho();
    mostrarla();
    endgame();
}

function endgame() {
   if(posy==posx)
    alert("Parabéns! Você ajudou o gatinho a chegar até a lã!!");
}

