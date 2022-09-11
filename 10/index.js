const caractere = "10";

const maiuscula = "A, E, I, O, U";
const minuscula = "a, e, i, o, u";

if (maiuscula.includes(caractere)) {
    console.log("Vogal Maiúscula.");

} else if (minuscula.includes(caractere)) {
    console.log("Vogal Minúscula.");

} else if (caractere >= 0 || caractere <= 9) {
    console.log("caracter digitado é um numero.");

} else {
    console.log("caracter é um Vogal.")
}
