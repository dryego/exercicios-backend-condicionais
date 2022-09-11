//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "pix";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

const descontoCredito = (valorDoProduto - (valorDoProduto * 5 / 100)) / 100;
const descontoCheque = (valorDoProduto - (valorDoProduto * 3 / 100)) / 100;
const descontoDebitoDinheiro = (valorDoProduto - (valorDoProduto * 10 / 100)) / 100;

if (tipoDePagamento === "credito") {
    console.log(`valor a ser pago R$${descontoCredito.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`);

} else if (tipoDePagamento === "cheque") {
    console.log(`valor a ser pago R$${descontoCheque.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`);

} else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
    console.log(`valor a ser pago R$${descontoDebitoDinheiro.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`);

} else {
    console.log("Tipo de pagamento Invalido");
}