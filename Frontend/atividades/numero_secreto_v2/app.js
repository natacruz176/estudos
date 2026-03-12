//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jodo do Número Secreto'

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um numero de 1 a 10';

function exibirTexto(tag, texto){
    let  campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirTexto('h1', 'Jogo do Numero Secreto');
    exibirTexto('p', 'Escolha um numero de 1 a 10');

    numeroSecreto = gerarNumeroSecreto();

    function gerarNumeroSecreto(){
        return parseInt(Math.random() * 10) + 1;
    }

function verificarChute() {
    console.log  (numeroSecreto)
}