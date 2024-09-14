//Faça um programa para calcular o valor de uma viagem.
//  Você terá 5 variaiveis. Sendo elas:
//  1 - Preço do etanol;
//  2 - Preço da gasolina;
//  3 - O tipó de combustivel que está no seu carro; 
//  4 - Gasto médio de combustivel do carro por KM;
//  5 - Distancia em Km da viagem;

//  Imprima no console o valor que será gasto para realizar esta viagem.

const precoEtanol = 3.99;
const precoGasolina = 5.99
const KmPorLitros = 15;
const distanciaEmKm = 100;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKm / KmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}





