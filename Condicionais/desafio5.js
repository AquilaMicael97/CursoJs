/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escola da condição de pagamento.
Utilize os codigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

Código Condição de Pagamento:
    1 - A vista debito, recebe 10% de desconto;
    2 - A vista no dinheiro ou Pix, recebe 15% de desconto;
    3 - Em duas vrezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal da etiqueta mais juros de 10%
*/
const precoEtiqueta = 100;
const formaPagamento = 3;

if (formaPagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.10));
} else if (formaPagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (formaPagamento === 3) {
    console.log(precoEtiqueta);
} else if (formaPagamento === 4)
    console.log(precoEtiqueta + (precoEtiqueta * 0.10));








