const aposentada = true;
const portadoraDeDoenca = true;
const totalDeRendimentos = 2855970; //emCentavos

if (aposentada === false && portadoraDeDoenca === false && totalDeRendimentos > 2855970) {
    console.log("**PEGA LEAO**")
} else if (aposentada === true && portadoraDeDoenca === false && totalDeRendimentos > 2855970) {
    console.log("**ISENTA**")
} else if (aposentada === true && portadoraDeDoenca === true && totalDeRendimentos > 2855970) {
    console.log("**ISENTA**")
} else if (aposentada === false && portadoraDeDoenca === true && totalDeRendimentos > 2855970) {
    console.log("**ISENTA**")
} else if (aposentada === false && portadoraDeDoenca === false && totalDeRendimentos <= 2855970) {
    console.log("**VAZA LEAO! JA TA DIFICIL SEM VOCE**")
} else {
    console.log("**ISENTA**");
}