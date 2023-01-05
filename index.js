
function selecionarItem(item, itemEscolhido) {
    const itemAnterior = document.querySelector(item + ' .selecionado');
    if (itemAnterior !== null){
        itemAnterior.classList.remove('selecionado');
    }

    const pratoSelecionado = document.querySelector(itemEscolhido);
    pratoSelecionado.classList.add('selecionado'); 
}



