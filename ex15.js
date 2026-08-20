function classificarProduto(nota) {
    if (nota === 9 || nota === 10) {
        console.log("Produto excelente");  
    }else if (nota === 7 || nota === 8) {
        console.log("Produto bom");
    } else if (nota === 5 || nota === 6) {
        console.log("Produto regular");
    } else{
        console.log("Produto ruim");
    }
}

classificarProduto(9);