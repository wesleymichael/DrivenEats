
/**** Função para permitir a escolha de apenas um item em cada categoria ****/
function selecionarItem(item, itemEscolhido) {
    const itemAnterior = document.querySelector(item + ' .selecionado');
    if (itemAnterior !== null){
        itemAnterior.classList.remove('selecionado');
    }

    const pratoSelecionado = document.querySelector(itemEscolhido);
    pratoSelecionado.classList.add('selecionado'); 

    ativaConfirmarPedido();
}


/**** Função para a ativação do botão de confirmar pedido ****/
function ativaConfirmarPedido(){
    if (document.querySelector('.prato .selecionado') !== null){
        if (document.querySelector('.bebida .selecionado') !== null){
            if (document.querySelector('.sobremesa .selecionado') !== null){
                const botao = document.querySelector('.barra-inferior button');
                botao.innerHTML = 'Fechar pedido';
                botao.style.backgroundColor = '#32B72F';
                botao.style.cursor = 'pointer';
            }   
        }    
    }
}


/**** Função que seleciona os itens escolhidos ****/
function itensEscolhidos (){
    produtos = Array();
    let opcoes = Array('.prato', '.bebida', '.sobremesa');

    for (let i=0; i<opcoes.length; i++){
        produtos[i]=Array();
        produtos[i][0]=document.querySelector(opcoes[i]+' .selecionado figcaption').innerHTML;
        produtos[i][1]=document.querySelector(opcoes[i]+' .selecionado div>h3').innerHTML.slice(3,8);
    }
    produtos[3]=Array('TOTAL');
    calculaValor();
}


/**** Função que calcula o valor total do pedido ****/
function calculaValor(){
    let soma = 0;

    for(let i=0; i<produtos.length-1; i++){
        soma += Number(produtos[i][1].replace(',','.'));   
    }
    produtos[3][1] = soma.toString().replace('.',',');
}


/**** Função para ativar a tela olhar os pedidos selecionados e confirmar ****/
function telaConfirma(){
    alteraTelaConfirma();
    document.querySelector('.backgroundNovo').style.display = 'block';
}

function alteraTelaConfirma(){
    for (let i=0; i<3; i++){
        const seletor = '.tela-confirma div:nth-of-type('+(i+1)+')';
        document.querySelector(seletor).innerHTML = `<h3>${produtos[i][0]}</h3><p>${produtos[i][1]}</p>`;
    }
    document.querySelector('.tela-confirma strong p').innerHTML = 'R$ '+produtos[3][1];
}


/**** Função acionada no botão de cancelar pedido, caso queira alterar algum item ****/
function cancelarPedido (){
    document.querySelector('.backgroundNovo').style.display='none';
}


/*** Função chamada quando o pedido está correto ****/
function pedidoVerificado(){
    const name = prompt('Insira seu nome:');
    const address = prompt('Insira seu endereço:');
    const numero = 9999999999999;

    const message = `Olá, gostaria de fazer o pedido:
    - Prato: ${produtos[0][0]}
    - Bebida: ${produtos[1][0]}
    - Sobremesa: ${produtos[2][0]}
    Total: R$ ${produtos[3][1]}

    Nome: ${name}
    Endereço: ${address}              
    `;

    const link = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;
    document.querySelector('.tela-confirma a').href = link;
}


