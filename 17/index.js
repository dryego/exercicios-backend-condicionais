//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 5;

//valor pago
const valorPago = 60000;

const valorRestante = valorDoProduto - valorPago;
const parcelasRestantes = (valorRestante / 1000) - quantidadeDoParcelamento;

console.log(valorRestante, parcelasRestantes);