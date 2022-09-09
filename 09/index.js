const nota = 11;

if (nota > 10) {
    console.log("Nota Invalida");

} else if (nota <= 10 && nota >= 9) {
    console.log("O estudando obteve conceito A");

} else if (nota < 9 && nota >= 8) {
    console.log("O estudando obteve conceito B");

} else if (nota < 8 && nota >= 6) {
    console.log("O estudando obteve conceito C");

} else if (nota < 6 && nota >= 4) {
    console.log("O estudando obteve conceito D");

} else if (nota < 4 && nota >= 0) {
    console.log("O estudando obteve conceito E");

} else {
    console.log("Nota Invalida");
}
