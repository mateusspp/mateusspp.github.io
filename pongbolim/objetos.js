//variáveis da bolinha, x, y, diametro e raio
let diametro = 15;
let Bolinha = [420, 200, diametro, diametro / 2];

//velocidade da bolinha, x e y
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

let xRaquete = [100, 370];
let yRaquete = 150;

let xRaqueteOponente = [500, 220];
let yRaqueteOponente = 150;

let comprimentoRaquete = 10;
let alturaRaquete = 95;

//Área do gol
let areaDoGol = [15, 160, 10, 95];
let areaDoGolOponente = [575, areaDoGol[1], areaDoGol[2], areaDoGol[3]];

colidiu = false;


//constrain (yRaqueteOponente, 0, height);
//console.log("constrain" + teste);

let placar = [0, 0];

function mostraBolinha() { 
  fill(color(255, 255, 255));
  circle(Bolinha [0], Bolinha [1], Bolinha[2]);
}

function movimentaBolinha() {
  Bolinha [0] += velocidadeXBolinha;
  Bolinha [1] += velocidadeYBolinha;
}

function verificaColisaoBorda () {
  if(Bolinha [0] + Bolinha[3] > width || Bolinha [0] - Bolinha[3] < 0) {
    velocidadeXBolinha *= -1;
  } 
  if(Bolinha [1] + Bolinha[3] > height || Bolinha[1] - Bolinha[3] < 0) {
    velocidadeYBolinha *= -1;
  }  
}

function mostrarTimes (){
  for (let i = 0; i < xRaquete.length; i += 1) {
    fill(color(255,204,0));
    rect(xRaquete[i], yRaquete, comprimentoRaquete, alturaRaquete);
    fill(color(0, 0, 255));
    rect(xRaqueteOponente[i], yRaqueteOponente, comprimentoRaquete, alturaRaquete);
  }
}  

function mostrarAreaDoGol() {
  fill(color(255, 255, 255));
  rect(areaDoGol[0], areaDoGol[1], areaDoGol[2], areaDoGol[3]) &&    
  rect(areaDoGolOponente[0], areaDoGolOponente[1], areaDoGolOponente[2], areaDoGolOponente[3]);
}

function colisaoRaqueteGit (){
  for (let i = 0; i < xRaquete.length; i += 1) {
    colidiu = 
    collideRectCircle(xRaquete[i], yRaquete, comprimentoRaquete, alturaRaquete, Bolinha [0], Bolinha [1], Bolinha[3]) || collideRectCircle(xRaqueteOponente[i], yRaqueteOponente, comprimentoRaquete, alturaRaquete, Bolinha [0], Bolinha [1], Bolinha[3]);
    if (colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play();  
    }
  }
}

function movimentoDasRaquetes() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
    yRaquete = constrain (yRaquete, 26, 280);
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete +=10;
    yRaquete = constrain (yRaquete, 26, 280);
  }
    if (keyIsDown(87)) {
    yRaqueteOponente -= 10;
    yRaqueteOponente = constrain (yRaqueteOponente, 26, 280);
  }
  if (keyIsDown(83)) {
    yRaqueteOponente +=10;
    yRaqueteOponente = constrain (yRaqueteOponente, 26, 280);
  }
}

function incluirPlacar(){
  stroke (255);
  textAlign (CENTER);
  textSize(14);
  fill(color(255, 140, 0));
  rect(150, 1, 40, 20);
  fill (255);
  text(placar[0], 170, 17);
  fill(color(255, 140, 0));
  rect (450, 1, 40, 20);
  fill (255);
  text(placar[1], 470, 17);
}

function golMarcado(){
  if(Bolinha [0] > 575 && Bolinha [1] > 120 && Bolinha [1] < 270){
    placar[0] += 1;
    galvao.play();
    Bolinha [0] = 300;
    Bolinha [1] = 200;
    
  }
   if(Bolinha [0] < 25 && Bolinha [1] > 130 && Bolinha [1] < 270) {
    placar[1] += 1;
    galvao.play();
    Bolinha [0] = 300;
    Bolinha [1] = 200;
 }
}





