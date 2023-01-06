
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
    let cont = 0;

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
        botao.style.backgroundColor = '#32B72F';
        botao.style.cursor = 'pointer';

        itensEscolhidos();
        //Alterar para chamar essa função quando clicar no 'CONFIRMAR PEDIDO'

        //botao.classList.remove('pedidoDesativado');
        //botao.classList.add('pedidoAtivo');
        //botao.removeAttribute("disabled");
    }
}


/**** Função que seleciona os itens escolhidos ****/
function itensEscolhidos (){
    produtos = Array(); //Declaração de variável global para armazenar itens escolhidos e preços
    let opcoes = Array('.prato', '.bebida', '.sobremesa');

    for (let i=0; i<opcoes.length; i++){
        produtos[i]=Array();
        produtos[i][0]=document.querySelector(opcoes[i]+' .selecionado figcaption').innerHTML;
        produtos[i][1]=document.querySelector(opcoes[i]+' .selecionado div>h3').innerHTML.slice(3,8);
    }
    produtos[3]=Array('TOTAL');

    calculaValor(produtos);
    console.log(produtos);
}



/**** Função que calcula o valor total do pedido ****/
function calculaValor(){
    let soma = 0;

    for(let i=0; i<produtos.length-1; i++){
        soma += Number(produtos[i][1].replace(',','.'));   
    }
    produtos[3][1] = soma.toString().replace('.',',');
}



