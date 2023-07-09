// Declaração da função
function VerificaForm(frm){
    if(frm.nome.value ==''){
        alert('Campo obrigatório');
        frm.nome.focus();
        return false;
    }

    if(frm.email.value ==''){
        alert('Campo obrigatório');
        frm.email.focus();
        return false;
    }

    if(frm.fone.value == ''){
        frm.fone.focus();
        return false;
    }

    if(frm.sexo[0].checked == false && frm.sexo[1].checked == false){
        alert('Selecione o sexo')
            return false;
        
    }

    if(frm.soft1.checked == false && frm.soft2.checked == false && frm.soft3.checked == false){
        alert('Selecione pelo menos um software');
        return false;
    }

    if(frm.navegador.value == 'Selecione'){
        alert('Selecione um navegador');
        frm.navegador.focus();
        return false;
    }

    if(frm.comentario.value == ''){
        alert('Campo obirgatorio');
        frm.comentario.focus();
        return false;
    }
    return true;
}