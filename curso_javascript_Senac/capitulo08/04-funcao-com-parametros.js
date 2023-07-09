// Declarando as funções
function Media(a, b, c, d){

    return (a + b + c + d) / 4;
}

// Criando variáveis
var nota1 = 0, 
nota2 = 0, nota3 = 0, nota4 = 0;

// Mensagem para o usuário
alert('Informe as 4 notas do aluno');

// Solicitando as notas para o usuário
nota1 = parseInt(prompt('Digite a primeira nota: '));
nota2 = parseInt(prompt('Digite o segundo número: '));
nota3 = parseInt(prompt('Digite o terceiro número: '));
nota4 = parseInt(prompt('Digite a quarta nota: '));

// Imprimindo o resultado na tela
document.getElementById('teste').innerHTML += Media(nota1, nota2, nota3, nota4);
