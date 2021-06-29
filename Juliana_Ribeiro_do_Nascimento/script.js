"use strict";

const MOVIMENTO = 5;
const VELOCIDADE = 100;

let canvas = document.getElementById("canvinha");
let heroiImg = document.getElementById("miraculous");
let gatinhoImg = document.getElementById("gatinho");
let ctx = canvas.getContext("2d");
let ctx2 = canvas.getContext("2d");
let xpos = 0;
let ypos = 0;
let direcao = "leste";
let xportal = 680;
let yportal = 480;

function limpaTela(){
ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function desenhaHeroi(){
ctx.drawImage(heroiImg, xpos, ypos, heroiImg.width, heroiImg.height);
}

function desenhaGatinho(){
    ctx2.drawImage(gatinhoImg, xportal, yportal, gatinhoImg.width, gatinhoImg.height);
}


desenhaHeroi();
desenhaGatinho();

function loopPrincipal(){

    if (xpos > xportal-80 && ypos > yportal-80){
        termino();
    }
    else {
        switch (direcao) {
            case "leste":
                if(xpos + heroiImg.width < canvas.width)
                    xpos += MOVIMENTO;
                break;
            case "oeste":
                if(xpos > 0)
                    xpos -= MOVIMENTO;
                break;
            case "norte":
                if(ypos > 0)
                    ypos -= MOVIMENTO;
                break;
            case "sul":
                if(ypos + heroiImg.height < canvas.height)
                    ypos += MOVIMENTO;
                break;
        
            default:
                break;
        }
    limpaTela();
    desenhaHeroi();
    desenhaGatinho();
}
}

let intervalo = setInterval(loopPrincipal, VELOCIDADE);

document.onkeydown= function(evento){
switch (evento.key) {
    case "ArrowUp":
        direcao = "norte";
        break;
    case "ArrowDown":
       direcao= "sul";
        break;
    case "ArrowRight":
       direcao = "leste";
        break;
    case "ArrowLeft":
        direcao = "oeste";
        break;
    default:
        break;
    }
limpaTela();
desenhaHeroi();
desenhaGatinho();
}

function termino(){
    clearTimeout(intervalo)
    alert("Parabéns, Ladybug chegou até o Cat Noir!")
}