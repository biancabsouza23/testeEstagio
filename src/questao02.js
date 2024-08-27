/**
 * Verifica se um produto está disponível no estoque.
 * @param {*} estoque Estoque atual de produtos
 * @param {*} skuProduto SKU do produto a ser verificado
 * @returns true se o produto está disponível, false caso contrário
 */
function verificarDisponibilidadeEstoque(estoque, skuProduto) {
    const produto = estoque.find(produto => produto.sku === skuProduto);
    if (produto) {
        return produto.quantidade > 0;
    }
    return false;
}


// Exemplo de uso:
const estoque = [
    { sku: 1001, quantidade: 5 },
    { sku: 1002, quantidade: 2 },
    { sku: 1003, quantidade: 5 }
];
const skuProduto = 1002;
const disponibilidade = verificarDisponibilidadeEstoque(estoque, skuProduto);
console.log(`Produto ${skuProduto} está disponível? ${disponibilidade ? 'Sim' : 'Não'}`);


module.exports = verificarDisponibilidadeEstoque;