/**
 * Função que gera um relatório de vendas com base em uma lista de vendas e um intervalo de datas.
 * @param {*} listaVendas Lista de todas as vendas realizadas
 * @param {*} dataInicial Data inicial do intervalo a ser considerado
 * @param {*} dataFinal Data final do intervalo a ser considerado
 * @returns Lista de informação de SKUs, informando a quantidade total vendida e o valor total vendido para o produto
 */
function relatorioVendas(listaVendas, dataInicial, dataFinal) {
    const inicio = new Date(dataInicial);
    const fim = new Date(dataFinal);
    const vendas = listaVendas.filter(venda => {
        const data = new Date(venda.data);
        return data >= inicio && data <= fim;
    });
    let skuVendas = {};
    for (const venda of vendas) {
        if (!skuVendas[venda.sku]) {
            skuVendas[venda.sku] = { quantidade: 0, valorTotal: 0 };
        }
        skuVendas[venda.sku].quantidade += venda.quantidade;
        skuVendas[venda.sku].valorTotal += venda.valorTotal;
    }
    let relatorio = [];
    for (const sku of Object.keys(skuVendas)) {
        relatorio.push({ sku, ...skuVendas[sku] });
    }
    return relatorio;
};


// Exemplo de uso:
const vendas = [
    { sku: 1001, quantidade: 2, valorTotal: 50.00, data: '2021-01-01' },
    { sku: 1002, quantidade: 1, valorTotal: 20.00, data: '2021-01-01' },
    { sku: 1003, quantidade: 5, valorTotal: 100.00, data: '2021-01-02' },
    { sku: 1001, quantidade: 1, valorTotal: 25.00, data: '2021-01-02' }
];
const dataInicio = '2021-01-01';
const dataFim = '2021-01-02';
const relatorio = gerarRelatorio(vendas, dataInicio, dataFim);
console.log('Relatório de Vendas:', relatorio);


module.exports = relatorioVendas;
