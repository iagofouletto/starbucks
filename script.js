/*
    JAVA =! JavaScript

    Variavéis -> pedacinho de mémoria do computador, 
    que você separa e pode 
    guarda QUALQUER coisa.

    console.log -> forma de ENXEERGA o que eu tenho no JavaScript
    dentro do navegador

    Funções -> Pedacinho de código, QUE só execunta,
    quando é chamado!
 
    document == HTML

    Algorítmo -> È UMA RECEITA DE BOLO
    [x] saber quem é o botão    
    [x] saber quando o botão foi clicado
    [x] trocar a cor da bola colorida
    [x] saber quem é o copo
    [x] trocar a imagem do copo
    [x] saber quem é a bola colorida

*/
// Função para trocar a imagem do copo
function trocaImagem(novaImagem) {
  document.querySelector(".imagem-copo").src = novaImagem;
}

function mudarCor(cor) {
  document.querySelector(".circulo").style.background = cor;
  document.querySelector(".texto-starbucks").style.color = cor;
  document.querySelector("button").style.background = cor;
}
