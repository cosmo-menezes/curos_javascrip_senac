// Declarando a função
function Soma(a, b){

    return a + b;
}


// Declarando variáveis
var num1 = 0;
var num2 = 0;


// Solicitando os valores para o usuário
num1 = parseInt(prompt('Digite um número', ''));
num2 = parseInt(prompt('Digite um número', ''));

// Mostrando na tela
document.getElementById('teste').innerHTML += Soma(num1, num2);

