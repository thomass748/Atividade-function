function verificarAcesso(idade) {
    if (idade >= 16) {
        console.log("Acesso permitido");
    } else {
        console.log("Acesso negado");
    }
}

verificarAcesso(20);