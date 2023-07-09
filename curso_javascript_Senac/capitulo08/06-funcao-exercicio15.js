// Declarando a função
function MostraFrase(a, b){
    return (a * b);
}

// Criando as variáveis
var frase = 'Programando em Javascript';
var numero = 0;

// Solicitando valores ao usuário
numero = parseInt(prompt('Digite um número entre 1 e 30',''));
if(numero >=1 || numero <= 30){
    document.getElementById('resultado').innerHTML += MostraFrase(frase, numero);
} else {
    alert('número errado!');
}

// Mostrando o resultado na tela
//document.getElementById('resultado').innerHTML += MostraFrase(frase, numero);