function setup() {
  createCanvas(600, 400);
  jogo.loop();
}

function draw() {
  background("green");
  mostraBolinha();
  movimentaBolinha();
  colisaoRaqueteGit();
  campo();
  verificaColisaoBorda();
  mostrarTimes();
  movimentoDasRaquetes();
  mostrarAreaDoGol();
  incluirPlacar();
  golMarcado();
}











