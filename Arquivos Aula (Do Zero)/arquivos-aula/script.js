
const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');
const nomeCor =  document.getElementById('nome-cor-selecionada');
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura');
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura');
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura');

const verdeCipreste = {
    nome: 'verde-cipreste',
    pasta: 'imagens-verde-cipreste'
}


const azulInverno = {
    nome: 'Azul-inverno',
    pasta: 'imagens-azul-inverno'
};

const meiaNoite = {
    nome: 'Meia-noite',
    pasta: 'imagens-meia-noite'
};

const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
};

const rosaClaro = {
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'
};

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ['41 mm', '45 mm'];

let corSelecionada = 1 ;
let tamanhoSelecionado = 1;
let imagemSelecionada =  1;
//volor da variavel por padrão em 1 , para fica essa imagem selecionada .

function trocarImagem(){
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
                                                //selecionamos atraves do querySelector , verificamos os estado do radio selicionado atraves de : e selicionamos o id . 

    imagemSelecionada = idOpcaoSelecionada.charAt(0); //charAt = char se refere a   CARACTER e at como NA , e entre parenteses fica a POSIÇÂO  
    //imagem selecionada q o valor inicial era igual a 1 , vai ser alterada para a character na posição 0 , que se refere ao character do id 

    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';
    //Aqui contatenamos a url , com a posiçaõ da imagem selicionada. No caso 1 , 2 ou 3 ;
}

function trocarTamanho(){
     
    const opcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id
    tamanhoSelecionado = opcaoSelecionada.charAt(0)
    tituloProduto.innerText = "pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado];


    if(opcoesTamanho[tamanhoSelecionado] === '41 mm'){
        imagemVisualizacao.classList.add('caixa-pequena');

    }else{
        imagemVisualizacao.classList.remove('caixa-pequena');
    }
    
}

function trocarCor(){
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);
    tituloProduto.innerText = "pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado];
    //alterando o titulo do produto  de acordo com a imagem que foi selecionada. no caso a opcão de cores onde tem todas as cores disponivel no site, mais corSelecionada onde tem o id com o premeiro caracter , mais nome que esta dentro de um objeto , referente ao nome de cada cor selecionada. contatenou com o text padrão e com opções de tamanho no tamanho selecionado.

    nomeCor.innerText = 'Cor - ' + opcoesCores[corSelecionada].nome

    miniaturaImagem0.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-0.jpeg';    
                                // opcões de cores onde tem todas as cores selecionadas em variavel , corSelecionada onde esta e uma variavel let com valor 1 que é a cor de inicio , mais a pasta que contem o caminho de cada  imagem , mais o final do caminho que é padrão de todas imagem .
    miniaturaImagem1.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-1.jpeg';
    miniaturaImagem2.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-2.jpeg';

    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';
    

}