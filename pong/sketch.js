//variáveis da bolinha
let xBolinha = 420;
let yBolinha = 200;
let diametro = 25;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

//variáveis da raquete
let xRaquete = 1;
let yRaquete = 150;
let comprimentoRaquete = 2;
let alturaRaquete = 95;


//variáveis do oponente
let xRaqueteoponente = 598;
let yRaqueteoponente = 150;
let velocidadeyOponente;
let chancedeErrar = 0;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let oponentePontos = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload() {
  trilha = loadSound ("trilha.mp3");
  ponto = loadSound ("ponto.mp3");
  raquetada = loadSound ("raquetada.mp3"); 
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostrarRaquete(xRaquete, yRaquete);
  movimentodaraquete();
  //verificacolisaodaraquete ();
  colisaoraquetegithub(xRaquete, yRaquete);
  mostrarRaquete(xRaqueteoponente, yRaqueteoponente);
  movimentaRaqueteoponente ();
  colisaoraquetegithub (xRaqueteoponente, yRaqueteoponente);
  incluirPlacar();
  marcarPontos();
}

function mostraBolinha () { 
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha () {
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;

}

function verificaColisaoBorda () {
  if(xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadexBolinha *= -1;
  
  } 
  if(yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeyBolinha *= -1;
  }  
}

function mostrarRaquete (x,y) {
  rect(x, y, comprimentoRaquete, alturaRaquete);
}

function mostrarRaqueteoponente () {
  rect(xRaqueteoponente, yRaqueteoponente, comprimentoRaquete, alturaRaquete);
}

function movimentodaraquete () {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete +=10;
  }
}

function verificacolisaodaraquete () {
  if (xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete){velocidadexBolinha *= -1; raquetada.play();
  }  
}

function colisaoraquetegithub (x, y){
  colidiu = 
    collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if (colidiu) {velocidadexBolinha *= -1;
                raquetada.play();
  }
}


function movimentaRaqueteoponente () {
  velocidadeyOponente = yBolinha - yRaqueteoponente - comprimentoRaquete / 2 - 30;
  yRaqueteoponente += velocidadeyOponente + chancedeErrar
  calculaChanceDeErrar()
  } 


function incluirPlacar (){
  stroke (255);
  textAlign (CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill (255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect (450, 10, 40, 20);
  fill (255);
  text(oponentePontos,  470, 26);
}

function marcarPontos(){
  if (xBolinha > 587 && yBolinha> 130 && yBolinha < 220) {
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 15 && yBolinha> 130 && yBolinha < 220) {
    oponentePontos +=1;
    ponto.play();
  }
}

function calculaChanceDeErrar () {
  if (oponentePontos >= meusPontos) {
    chancedeErrar += 1
    if (chancedeErrar >=39){
      chancedeErrar = 40
    }
  } else {
    chancedeErrar -=1
    if (chancedeErrar <= 35){
    chancedeErrar = 35
    }
  }
}







