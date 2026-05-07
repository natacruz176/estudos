//Ex_1

function exercicio1() {

    let titulo = document.querySelector('h1');
    titulo.innerHTML = ('hora do desafio');
}

//Ex_2

function exercicio2(){

    console.log('O botao foi clicado' )
}

//Ex_3

function exercicio3(){

    alert ('Eu amo JS')


}

//Ex_4

function exercicio4(){

   let cidade  =prompt ('qual sua cidade?');
    alert (`Estive em ${cidade} e lembrei de você.`);
}

//Ex_5

function exercicio5(){


    let numero1 = parseInt (prompt ('qual seu numero?'));
    let numero2 = parseInt (prompt ('qual seu numero?'));
   let soma = (numero1 + numero2);
    alert (soma);
}

//Ex_6

function exercicio6(){

        console.log ('ola mundo!')

}

//Ex_7

function exercicio7(id){

let nome = document.getElementById('inputTexto1').value
console.log (`ola ${nome}`);

}

//Ex_8

function exercicio8(){

let numb1 = document.getElementById('input08').value
let resultado = (numb1 * 2);
let campoResultado = document.getElementById('resultado08')
campoResultado.innerHTML = resultado;

}

//Ex_9

function exercicio9(){

let media1 = parseInt (document.getElementById('inputNumber2').value)
let media2 = parseInt (document.getElementById('inputNumber3').value)
let media3 = parseInt (document.getElementById('inputNumber4').value)
let campoResultado = document.getElementById('resultado09');
let ex9 = (media1 + media2 + media3 );
let media = (ex9 / 3)

campoResultado.innerHTML = media;


}

//Ex_10

function exercicio10(){

let numb1 = document.getElementById('inputNumber5').value
let numb2 = document.getElementById('inputNumber6').value
let campoResultado = document.getElementById('resultado10')
if (numb1 > numb2 ){
     campoResultado.innerHTML = numb2
}
else{
    campoResultado.innerHTML = numb1
}

}

//Ex_11

function exercicio11(){

let numb1 = document.getElementById('inputNumber7').value
let campoResultado = document.getElementById('resultado11')
campoResultado.innerHTML = numb1 * numb1

}

//Ex_12

function exercicio12(){
    let numb1 =document.getElementById('inputNumber8').value
    let numb2 =document.getElementById('inputNumber9').value
    let campoResultado =document.getElementById('resultado12')

    campoResultado.innerHTML = parseInt(numb1 / (numb2 * numb2));
}
    

    
//Ex_13

    function exercicio13(){

    let numb1 =document.getElementById('inputNumber10').value
    let resultado=1;

    // PARA (CONDIÇÃO INICIAL; CONDIÇÃO DE PARADA; CONTAGEM)
    for (let i = numb1; i >= 1; i--) {
    resultado *= i;
    }

    let campoResultado =document.getElementById('resultado13')
    campoResultado.textContent = resultado
 
}


//Ex_14

function exercicio14(){

    let numb1 =document.getElementById('inputNumber11').value
    let campoResultado =document.getElementById('resultado14')
    campoResultado.innerHTML = numb1 * 4,80

}

//Ex_15

function exercicio15(){

    let numb1 = parseFloat (document.getElementById('inputNumber12').value);
    let numb2 =  parseFloat (document.getElementById('inputNumber13').value);
    let campoResultado1 =document.getElementById('resultado15');
    let campoResultado2 =document.getElementById('resultado16');
    campoResultado1.innerHTML = numb1 + numb2
    campoResultado2.innerHTML = numb1 * numb2

}

//Ex_16

function exercicio16(){

    let numb1 =parseFloat (document.getElementById('inputNumber14').value);
    let campoResultado1 =document.getElementById('resultado17');
    let campoResultado2 =document.getElementById('resultado18')
    campoResultado1.innerHTML = parseInt (numb1 * 2 * 3,14 );
    campoResultado2.innerHTML = parseInt ((numb1 * numb1) * 3,14)

}

//Ex_17

function exercicio17(){

let numb1 =document.getElementById('inputNumber15').value
let resultado1 = document.getElementById('resultado_ex17_1');
let resultado2 = document.getElementById('resultado_ex17_2');
let resultado3 = document.getElementById('resultado_ex17_3');
let resultado4 = document.getElementById('resultado_ex17_4');
let resultado5 = document.getElementById('resultado_ex17_5');
let resultado6 = document.getElementById('resultado_ex17_6');
let resultado7 = document.getElementById('resultado_ex17_7');
let resultado8 = document.getElementById('resultado_ex17_8');
let resultado9 = document.getElementById('resultado_ex17_9');
let resultado10 = document.getElementById('resultado_ex17_10');
    resultado1.innerHTML = numb1 * 1
    resultado2.innerHTML = numb1 * 2
    resultado3.innerHTML = numb1 * 3
    resultado4.innerHTML = numb1 * 4
    resultado5.innerHTML = numb1 * 5
    resultado6.innerHTML = numb1 * 6
    resultado7.innerHTML = numb1 * 7
    resultado8.innerHTML = numb1 * 8
    resultado9.innerHTML = numb1 * 9
    resultado10.innerHTML = numb1 * 10


}




let listaGenerica = [];//Ex_18
let linguagensDeProgramacao = [];

function exercicio19(){ 

    linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin','Python'];

    let resultado = document.getElementById('resultado20');
    resultado.textContent = linguagensDeProgramacao;
}

//Ex_20

function exercicio20(){

    let nomeLinguagens = document.getElementById('inputNumber16').value;
    alert (nomeLinguagens);
    let lista = document.getElementById('resultado20');

    linguagensDeProgramacao.push(nomeLinguagens);
    lista.textContent = linguagensDeProgramacao;

    }
