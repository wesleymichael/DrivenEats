
function selecionarPrato(pratoEscolhido) {
    const pratoAnterior = document.querySelector('.prato .selecionado');
    if (pratoAnterior !== null){
        pratoAnterior.classList.remove('selecionado');
    }

    const pratoSelecionado = document.querySelector(pratoEscolhido);
    pratoSelecionado.classList.add('selecionado'); 
}

function selecionarBebida (bebidaEscolhida){
    const bebidaAnterior = document.querySelector('.bebida .selecionado');
    if (bebidaAnterior !== null){
        bebidaAnterior.classList.remove('selecionado');
    }

    const bebidaSelecionada = document.querySelector(bebidaEscolhida);
    bebidaSelecionada.classList.add('selecionado');
}

function selecionarSobremesa (sobremesaEscolhida){
    const sobremesaAnterior = document.querySelector('.sobremesa .selecionado');
    if (sobremesaAnterior !== null){
        sobremesaAnterior.classList.remove('selecionado');
    }

    const sobremesaSelecionada = document.querySelector(sobremesaEscolhida);
    sobremesaSelecionada.classList.add('selecionado')
}

