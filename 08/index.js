const idade = 18;
const possuiPatologia = true;
const altura = 180;
const ehEstudante = true;

if (idade < 18 && idade >= 65 && possuiPatologia === true && altura <= 150) {
    console.log("Você esta BARRADA");
} else if (idade >= 18) {
    if (possuiPatologia === true || altura <= 150) {
        console.log("Você esta BARRADA")
    } else if (ehEstudante === true) {
        console.log("Page R$10,00 (Meia Entrada)");
    } else if (idade >= 65) {
        console.log("Você esta BARRADA")
    }
} else {
    console.log("Pague R$20,00")
}

