

function contar(){

    var txtinicio = document.querySelector('input#txtinicio');
    var txtfim = document.querySelector('input#txtfim');
    var txtpasso = document.querySelector('input#txtpasso');
    var res = document.querySelector('#res')
    
    if (txtinicio.value.length == 0 || txtfim.value.length ==0 || txtpasso.value.length == 0) {
        window.alert('Por favor, preencha todos os campos!')
        res.innerHTML = 'Não é possível contar'
    }else{
        res.innerHTML = 'contando:'
        var inicio = Number(txtinicio.value);
        var fim = Number(txtfim.value);
        var passo = Number(txtpasso.value);
    }

    for (let c = inicio; c <= fim; c+= passo){
        
        res.innerHTML += `${c}`
    }
    
    
}