/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variaiveis. Sendo elas:
1 - Preço do combustivel; 
2 - Gasto médio de combustivel do carro por KM;
3 - Distancia em Km da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const PrecoCombustivel = 5.93;
const GastoMedio = 15;
const Distancia = 290;

const litrosGasto = Distancia / GastoMedio;
const valorGasto = litrosGasto * PrecoCombustivel;

console.log(valorGasto.toFixed(2));



