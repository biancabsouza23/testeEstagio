const questao01 = require("./questao01");
const questao02 = require("./questao02");
const questao03 = require("./questao03");
const questao04 = require("./questao04");
const questao05 = require("./questao05");

/**
 * Questão 01: Exemplo
 */
const valorParcela = 100.0;
const numeroParcelas = 3;
const taxaJuros = 5; // 5%
const valorFinanciado = questao01(valorParcela, numeroParcelas, taxaJuros);
console.log(`Questão 01:`);
console.log(`Valor da Parcela: R$ ${valorParcela.toFixed(2)}`);
console.log(`Número de Parcelas: ${numeroParcelas}`);
console.log(`Taxa de Juros: ${taxaJuros * 100}%`);
console.log(`Valor Financiado: R$ ${valorFinanciado.toFixed(2)}`); //

/**
 * Questão 02: Exemplo
 */
const produtos = [
  { sku: 1001, nome: "Camiseta", quantidade: 5 },
  { sku: 1002, nome: "Calça", quantidade: 10 },
  { sku: 1003, nome: "Vestido", quantidade: 3 },
];
const sku = 1001;
const isDisponivel = questao02(produtos, sku);
console.log(`Questão 02: Produto ${sku} disponível: ${isDisponivel}`);

/**
 * Questão 03: Exemplo
 */
const tabelaPrecos = {
  "0-1,0-5": 10.0, // Até 1 kg e até 5 km: R$ 10.00
  "0-1,6-10": 15.0, // Até 1 kg e 6-10 km: R$ 15.00
  "1-5,0-5": 20.0, // 1-5 kg e até 5 km: R$ 20.00
  "1-5,6-10": 25.0, // 1-5 kg e 6-10 km: R$ 25.00
  "5-10,0-5": 30.0, // 5-10 kg e até 5 km: R$ 30.00
  "5-10,6-10": 35.0, // 5-10 kg e 6-10 km: R$ 35.00
};
const peso = 5;
const distancia = 2;
const valorFrete = questao03(tabelaPrecos, peso, distancia);
console.log(
  `Questão 03:\nFrete para peso ${peso} e distância ${distancia}: R$ ${valorFrete.toFixed(2)}`
);

/**
 * Questão 04: Exemplo
 */
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
const novoEstoque = questao04(estoque, itensVendidos);
console.log("Questão 04:");
console.log(novoEstoque);

/**
 * Questão 05: Exemplo
 */
const vendas = [
  { sku: 1001, quantidade: 2, valorTotal: 50.0, data: "2021-01-01" },
  { sku: 1002, quantidade: 1, valorTotal: 20.0, data: "2021-01-01" },
  { sku: 1003, quantidade: 5, valorTotal: 100.0, data: "2021-01-02" },
  { sku: 1001, quantidade: 1, valorTotal: 25.0, data: "2021-01-02" },
];

const dataInicial = "2021-01-01";
const dataFinal = "2021-01-02";
const relatorio = questao05(vendas, dataInicial, dataFinal);
console.log("Questão 05:");
console.log(relatorio);
