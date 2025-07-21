// Definindo variáveis globais
let jardineiro;
let plantas = [];
let temperatura = 10;
let totalArvores = 0;


function setup() {
  createCanvas(600, 400);
  jardineiro = new jardineiro(width / 2, height -50);
}


function draw() {
  
  //Usando map() para ajustar a cor de fundo de forma mais controlada
  let corFundo = lerpColor(color(217,112, 26), color(219, 239, 208);
                           map(totalArvores, 0, 100, 0, 1));
  background(corFundo);
  
  mostrarinformacoes();
  
  temperatura += 0.1;
  
  jardineiro.atualizar();
  jardineiro.mostrar();
  
  //verificar se o jogo acabou
  verificarFimDeJogo();
  
  // Usando map() para aplicar o comportamento de árvores plantadas
  plantas.map((arvore) => arvore.mostrar());
}

// Funçao para mostrar as imformaçoes da tela
function mostrarInformacoes(){
  textSize(16);
  fill(0);
  text("temperatura: " + temperatura.toFixed(2), 10, 30)
  text("Árvores plantadas: " + totalArvores, 10, 50)
  text("para movimentar o personagem use as setas do teclado.", 10, 80);
  }

//Função para verificar se o jogo acabou
function verificarFimDeJogo(){
  if (totalArvores > temperatura){
    mostrarMensagensDeVitoria();
  } else if (temperatura > 50){
    mostrarMensagensDeDerrota();
  }
}

//Função para mostrar as mensagens de vitória
function mostrarMensagensDeVitoria() {
  textSize(20);
  fill(0, 0, 0);
  text("você venceu! você plantou muitas árvores!", 100, 200);
  noLoop();
}

//função para mostra mensagens de derrota
function mostrarMensagemDeDerrota() {
  textSize(20);
  fill(250, 0, 0);
  text("você perdeu! a temperatura está muio alta.", 100, 200);
  noLoop();
}

//Classe que cria o jardineiro
class Jardineiro{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.emoji = '';
    this.velocidade = 3;
  }
  
  //Função para atualizar a posição do jardineiro
 atualizar() {
  if (keyIsDown(LEFT_ARROW)) {
    this.x -= this.velocidade;
  }
   if (keyIsDown(RIGHT_ARROW)){
     this.x += this.velocidade;
   }
   if (keyIsDown(UP_ARROW)){
     this.y -= this.velocidade;
   }
   if (keyIsDown(DOWN_ARROW)){
     this.y += this.velocidade;
   }
 }
  
//Função para desenhar o jardineiro na tela
  mostrar() {
    textSize(32);
    text(this.emoji, this.x, this.y);
  }
}
//função para plantar e criar uma arvore






