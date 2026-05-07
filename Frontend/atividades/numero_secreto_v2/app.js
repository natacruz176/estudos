
    function exibirTexto(tag, texto){
    let  campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

    let tentativas = 1;
   

function msgInicial(){
    exibirTexto('h1', 'Jogo do Numero Secreto');
    exibirTexto('p', 'Escolha um numero de 1 a 10');
    }

    msgInicial();

    numeroSecreto = gerarNumeroSecreto();

    function gerarNumeroSecreto(){
        return parseInt(Math.random() * 10) + 1;
    
    }

    if (tentativas > 10){
        exibirTexto('h1', 'Jogo do Numero Secreto');
    exibirTexto('p', 'Escolha um numero de 1 a 10');
    document.getElementById('reiniciar').removeAttribute('disabled')
        return;
    }

    



    function verificarChute() {
    let chute = document.querySelector ('input').value;
    if (chute == numeroSecreto){
        exibirTexto('h1','acertou!'); 


        let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';

        let msgTentativa = `Parabens, voce acertou o numero ${numeroSecreto}, com ${tentativas} ${palavraTentativa}`;
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chutar').setAttribute('disabled', true);
        document.querySelector('input').setAttribute('disabled', true);

        exibirTexto ('p', msgTentativa);
       
    } else {
        tentativas++;
        limparCampo()
        if(chute > numeroSecreto){
            exibirTexto ('p', 'o numero é menor');
             exibirTexto('h1','Errou');

        }else{
            exibirTexto('h1','Errou');
            exibirTexto('P', 'o numero é maior');
        }
    }

}
    function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
    }

    function novoJogo(){
        msgInicial();
        numeroSecreto = gerarNumeroSecreto();
        document.getElementById('chutar').removeAttribute('disabled');
        document.getElementById('chutar').removeAttribute('disabled');
        limparCampo();
        document.getElementById('reiniciar').setAttribute('disabled', true);
    }




   