//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 100000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 10;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

const porcentagemDaParcela = rendaMensalEmCentavos * 18 / 10000; //porcentagem em centavos

//if (rendaMensalEmCentavos < 200000 && mesesDecorridos > 60) {
if (mesesDecorridos > 60) {
    console.log("Você esta isento do pagamento!");

} else if (rendaMensalEmCentavos < 200000) {
    console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`)

} else if (rendaMensalEmCentavos >= 200000 && mesesDecorridos <= 60 && totalJaPagoPeloAluno < 1800000) {
    console.log(`O valor da parcela desse mês é R$${porcentagemDaParcela.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);

} else if (totalJaPagoPeloAluno >= 1800000) {
    console.log("Você já quitou seu pagamento. Parabéns pelo sucesso!")
}