const id_do_formulario = document.querySelector("#id_form");

id_do_formulario.addEventListener("submit", function(e){
    e.preventDefault(); {
        
        const numeroA = document.getElementById("input_id1").value;
        const numeroB= document.getElementById("input_id2").value;
        const mensagemMaior = `Não é possivel validar o formulario pois o numero ${numeroA} é menor que o numero ${numeroB}`;
        const mensagemMenor = `Formulario validaddo com Sucesso.`;

        if(numeroA < numeroB)
        {
            const containerMensagemErro = document.querySelector(".mensagem2");
            containerMensagemErro.innerHTML = mensagemMenor;
            containerMensagemErro.style.display = 'block';   
        } else{
            const containerMensagemSucesso = document.querySelector(".mensagem");
            containerMensagemSucesso.innerHTML = mensagemMaior;
            containerMensagemSucesso.style.display = 'block';
        }

    }
})