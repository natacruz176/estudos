alert("Bem-vindo ao jogo do Número secreto");

let numeroSecreto = parseInt(Math.random()*10);
let chut;
let tentativas = 1; //tentativas++

//Enquanto o chute "nao for igual"(diferente) a o numero secreto
while(chut !=numeroSecreto)
{
    chut = prompt("Escolha um numero entre 1 a 10");

    if(chut == numeroSecreto) //se
    {
        break;
    }
    else //se não
    {
        tentativas++
        if(chute>numeroSecreto) //se
        {
            alert(`O numero secreto é menor ${chute}`);
        }
        else //se não
{
    alert(`O numero secreto é maior ${chute}`);
}
    }
}

//operador ternario
let PalavraTentativa = tentativas > 1 ? "tentativas" : "tentativas";

alert(`Parabens, voce descobriu meu numero secreto ${numeroSecreto}, com ${tentativas} ${PalavraTentativa}!`); //tamplate