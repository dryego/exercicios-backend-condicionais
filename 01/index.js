const jogador1 = "pedra";
const jogador2 = "tesoura";

if (jogador1 == "pedra") {
    if (jogador2 == "tesoura") {
        console.log("Pedra.");
    } else if (jogador2 == "papel") {
        console.log("papel");
    } else if (jogador2 == "pedra") {
        console.log("empate");
    }
} else if (jogador1 == "tesoura") {
    if (jogador2 == "tesoura") {
        console.log("Empate");
    } else if (jogador2 == "papel") {
        console.log("Tesoura");
    } else if (jogador2 == "pedra") {
        console.log("Pedra");
    }
} else if (jogador1 == "papel") {
    if (jogador2 == "tesoura") {
        console.log("Tesoura");
    } else if (jogador2 == "papel") {
        console.log("Empate");
    } else if (jogador2 == "pedra") {
        console.log("Papel");
    }
} else if (jogador1 == "" || jogador2 == "") {
    console.log("Um dos jogadores esta disarmado.");
}