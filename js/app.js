let totalGeral;
let quantidadeTotal;

limpar();

function adicionar() {
    //recuperar valores do produto, quantidade e valor.
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitarioTexto = produto.split('R$')[1]; 
    let valorUnitarioNumero = Number(valorUnitarioTexto); 
    let quantidadeTexto = document.getElementById('quantidade').value;
    let quantidadeNumero = Number(quantidadeTexto);

    if (quantidadeNumero <= 0 || isNaN(quantidadeNumero)) {
        alert('Você deve escolher pelo menos 1 unidade de um produto');
        return;
    }

    //quantidade e produto devem ser válidos
    //calcular o preço, o nosso subtotal
    let preco = quantidadeNumero * valorUnitarioNumero;
    let carrinho = document.getElementById('lista-produtos');
    //adicionar no carrinho
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidadeNumero}x</span> ${nomeProduto} <span class="texto-azul">R$ ${preco}</span>
        </section>`;
    alert(preco);
    //atualizar o valor total
    totalGeral += preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    quantidadeTotal += quantidadeNumero;
    let unidadeTxt = quantidadeTotal === 1 ? 'unidade' : 'unidades'; 
    console.log(`A quantidade de produtos totais do carrinho é de ${quantidadeTotal} ${unidadeTxt}.`);
    document.getElementById('quantidade').value = 0;

    //exercício de split
    let texto = 'Mostrando que aprendi a usar split;Como pode ver essa virou outra frase;Essa é outra frase também'
    let frases = texto.split(';');
    frases.forEach((frase, index) => {
        console.log(`Frase ${index + 1} : ${frase}`);
    });

}    
    

function limpar () {
    //limpar o carrinho, total e total geral
    totalGeral = 0;
    quantidadeTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
}