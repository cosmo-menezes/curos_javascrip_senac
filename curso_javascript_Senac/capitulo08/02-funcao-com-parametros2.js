// Declarando a função com parâmetros
function Produto(a, b){
    return a * b;
}

// Declarando as variáveis
var n1 = 0;
var n2 = 0;

// Solicitando os valores para o usuário
n1 = parseInt(prompt('Digite um número:',''));
n2 = parseInt(prompt('Digite um número:',''));

// Mostrando o resultado na tela
document.getElementById("teste").innerHTML += Produto(n1, n2);