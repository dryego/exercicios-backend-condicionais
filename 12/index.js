const diaDaSemana = 10;

const dia1 = "Segunda-feira";
const dia2 = "Terça-feira";
const dia3 = "Quarta-feira";
const dia4 = "Quinta-feira";
const dia5 = "Sexta_feira";
const dia6 = "Sabádo"
const dia7 = "Domingo";

if (diaDaSemana == 1) {
    console.log(dia1);
} else if (diaDaSemana == 2) {
    console.log(dia2);
} else if (diaDaSemana == 3) {
    console.log(dia3);
} else if (diaDaSemana == 4) {
    console.log(dia4);
} else if (diaDaSemana == 5) {
    console.log(dia5);
} else if (diaDaSemana == 6) {
    console.log(dia6);
} else if (diaDaSemana == 7) {
    console.log(dia7);
} else if (diaDaSemana < 1 || diaDaSemana > 7) {
    console.log("O dia da semana informado não é válido.")
} else {
    console.log("Dia da semana invalido.")
}



