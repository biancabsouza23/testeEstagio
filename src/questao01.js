/**
 * Calcula o valor total a ser pago ao final de um financiamento.
 * @param {*} valorParcela      Valor da parcela mensal
 * @param {*} taxaJurosMensal   Taxa de juros mensal (em porcentagem)
 * @param {*} numeroParcelas    Número total de parcelas
 * @returns O valor total a ser pago ao final do financiamento
 */
function calcularValorTotal(valorParcela, taxaJurosMensal, numeroParcelas) {
    const i = taxaJurosMensal / 100;
    const valorTotal = valorParcela * ((((Math.pow(1 + i, numeroParcelas) - 1) / i)));
    return valorTotal;
}


// Exemplo de uso:
const valorParcela = 200.0;
const taxaJurosMensal = 1.5; // Taxa de 1.5%
const numeroParcelas = 3;

const valorTotal = calcularValorTotal(valorParcela, taxaJurosMensal, numeroParcelas);
console.log(`Valor total a ser pago ao final do financiamento: R$ ${valorTotal.toFixed(2)}`);


module.exports = calcularValorTotal;