function verificarTemperatura(temperatura) {
    if (temperatura >= 30) {
        console.log("Quente");
    } else if (temperatura <= 18) {
        console.log("Frio");
    } else {
        console.log("Agradável");
    }
}

verificarTemperatura(25);