
/**** Função para permitir a escolha de apenas um item em cada categoria ****/
function selecionarItem(item, itemEscolhido) {
    const itemAnterior = document.querySelector(item + ' .selecionado');
    if (itemAnterior !== null){
        itemAnterior.classList.remove('selecionado');
    }

    const pratoSelecionado = document.querySelector(itemEscolhido);
    pratoSelecionado.classList.add('selecionado'); 

    confirmaPedido();
}

/**** Função para a ativação do botão de confirmar pedido ****/

function confirmaPedido(){
    let cont = 0; //declaração de um contador para verificar das classes acima quantas possuem a classe '.selecionado'

    if (document.querySelector('.prato .selecionado') !== null){
        cont +=1;
    }
    if (document.querySelector('.bebida .selecionado') !== null){
        cont +=1;
    }
    if (document.querySelector('.sobremesa .selecionado') !== null){
        cont +=1;
    }
    if (cont === 3){
        const botao = document.querySelector('.barra-inferior button');
        botao.innerHTML = 'Fechar pedido';
        botao.classList.remove('pedidoDesativado');
        botao.classList.add('pedidoAtivo');
        //botao.removeAttribute("disabled");
    }
    console.log(cont)
}



