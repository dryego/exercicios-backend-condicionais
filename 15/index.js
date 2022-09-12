const primeiroNome = "";
const sobrenome = "broz";
const apelido = "";

if (primeiroNome != false) {
    if (primeiroNome != false && apelido != false) {
        console.log(apelido);

    } else if (primeiroNome != false && sobrenome != false) {
        console.log(primeiroNome, sobrenome);

    } else {
        console.log(primeiroNome)

    }
} else {
    console.log("Declare o primeiro nome.")
}