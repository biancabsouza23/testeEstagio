/**
 * Atualiza o estoque de produtos com base nos itens vendidos, e retorna o estoque atualizado.
 * @param {*} estoque Estoque atual de produtos
 * @param {*} itensVendidos Itens vendidos
 * @returns Estoque atualizado
 */
const atualizarEstoque = (estoque, itensVendidos) => {
    for (const item of itensVendidos) {
        const produto = estoque.find((produto) => produto.sku === item.sku);
        if (produto) {
            produto.quantidade -= item.quantidade;
        }
    }
    return estoque;
};


// Exemplo de uso:
const estoque = [
    { sku: 1001, quantidade: 5 },
    { sku: 1002, quantidade: 2 },
    { sku: 1003, quantidade: 5 },
];
const itensVendidos = [
    { sku: 1001, quantidade: 2 },
    { sku: 1002, quantidade: 1 },
    { sku: 1003, quantidade: 5 },
];
const estoqueAtualizado = atualizarEstoque(estoque, itensVendidos);
console.log('Estoque Inicial:', estoque);
console.log('Itens Vendidos:', itensVendidos);
console.log('Estoque Atualizado:', estoqueAtualizado);


module.exports = atualizarEstoque;
