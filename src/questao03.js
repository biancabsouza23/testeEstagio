function calcularFreteEntrega(tabelaPrecos, peso, distancia) {
    for (const chave of Object.keys(tabelaPrecos)) {
        const [pesoStr, distanciaStr] = chave.split(',');
        const [pesoMin, pesoMax] = pesoStr.split('-').map(Number);
        const [distanciaMin, distanciaMax] = distanciaStr.split('-').map(Number);
        const precoFrete = tabelaPrecos[chave];
        if (peso >= pesoMin && peso < pesoMax)
            if (distancia >= distanciaMin && distancia <= distanciaMax) {
                return precoFrete;
            }
    }
    console.warn(`Não foi possível calcular o frete para peso ${peso} e distância ${distancia}`);
    // throw new Error(`Peso e Distância Inválidos`);
    return 0.0;
}


// Exemplo de uso:
const tabelaPrecos = {
    '0-1,0-5': 10.0,    // Até 1 kg e até 5 km: R$ 10.00
    '0-1,6-10': 15.0,   // Até 1 kg e 6-10 km: R$ 15.00
    '1-5,0-5': 20.0,    // 1-5 kg e até 5 km: R$ 20.00
    '1-5,6-10': 25.0,   // 1-5 kg e 6-10 km: R$ 25.00
    '5-10,0-5': 30.0,   // 5-10 kg e até 5 km: R$ 30.00
    '5-10,6-10': 35.0   // 5-10 kg e 6-10 km: R$ 35.00
};
const peso = 3;
const distancia = 4;
const precoFrete = calcularFreteEntrega(tabelaPrecos, peso, distancia);
console.log(`Preço do frete para um pacote de ${peso} kg e distância de ${distancia} km: R$ ${precoFrete.toFixed(2)}`);


module.exports = calcularFreteEntrega;