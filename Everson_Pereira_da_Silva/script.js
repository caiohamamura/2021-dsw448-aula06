
let canvas = document.querySelector("#icanvas");
let ctx = canvas.getContext("2d");
let imgHeroi = document.querySelector("#heroi");
let imgPortal = document.querySelector("#portal"); 

const QDE_MOVIMENTO = 5;
const VEL_ATUALIZA = 50;

let posx = 0;
let posy = 0;
let direcao = "l";


function limpaCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function desenhaHeroi() {
    ctx.drawImage(imgHeroi, posx, posy, imgHeroi.width, imgHeroi.height);
}

function desenhaPortal() {
      ctx.drawImage(imgPortal, 690, 470, imgPortal.width, imgPortal.height);
  }

desenhaHeroi();
desenhaPortal();

function repeticaoPrincipal() {
    // Voce pode verificar se ganhou aqui dentro!

    if(posx >= 680 && posx <= 780 && posy >= 360 && posy <= 590)
    {
          terminarJogo()
    }
  
    switch (direcao) {
        case "n":
            if (posy > 0)
                posy -= QDE_MOVIMENTO;
            break;
        case "s":
            if (posy + imgHeroi.height < canvas.height)
                posy += QDE_MOVIMENTO;
            break;
        case "l":
            if (posx + imgHeroi.width < canvas.width)
                posx += QDE_MOVIMENTO;
            break;
        case "o":
            if (posx > 0)
                posx -= QDE_MOVIMENTO;
            break;


        default:
            break;
    }
    limpaCanvas();
    desenhaHeroi();
    desenhaPortal();
}

let repeticao = setInterval(repeticaoPrincipal, VEL_ATUALIZA);

document.onkeydown = function(evento) {
    switch (evento.key) {
        case "ArrowUp":
            if (direcao != "s")
                direcao = "n";
            break;
        case "ArrowDown":
            if (direcao != "n")
                direcao = "s";
            break;
        case "ArrowLeft":
            if (direcao != "l")
                direcao = "o";
            break;
        case "ArrowRight":
            if (direcao != "o")
                direcao = "l";
            break;

        default:
            break;
    }
}

function terminarJogo() {
    clearTimeout(repeticao);
    imgHeroi.width = 0
    imgHeroi.height = 0
    alert("Você foi teletransportada!");
}

