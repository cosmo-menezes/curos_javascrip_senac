// Declarando a função
function Media(a, b, c, d){
    return (a + b + c + d) / 4;

    var media = (a + b + c + d) / 4;

    if(media >= 7){
        return 'aprovado com média: ' + media;
    } else {
        return 'reprovado com media: ' + media;
    }
    
}

// Declarando as variáveis
var nome = '';
var n1 = 0, n2 = 0, n3 = 0, n4 = 0;


// Solicitando ao usuário o nome do aluno(a);
nome = prompt('Digite o nome do aluno(a)', '');
alert('Informe as 4 notas do aluno(a)');


// Mensagem para o usuario;
n1 = parseFloat(prompt('Digite a primeira nota: ',''));
n2 = parseFloat(prompt('Digite a segunda nota: ', ''));
n3 = parseFloat(prompt('Digite a terceira nota: ', ''));
n4 = parseFloat(prompt('Digite a quarta nota: ', ''));

document.getElementById('teste').innerHTML += 'O Aluno(a) '+ nome + ' está com: '+ Media(n1, n2, n3, n4);