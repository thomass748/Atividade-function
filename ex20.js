function calcularSubtotal(preco, quantidade) {
    return preco * quantidade;
}

function calcularDesconto(valor, percentual) {
    return valor * (percentual / 100);
}

function calcularTotal(subtotal, desconto) {
    return subtotal - desconto;
}

let subtotal = calcularSubtotal(40, 4);
let desconto = calcularDesconto(subtotal, 15);
let total = calcularTotal(subtotal, desconto);

console.log("Subtotal:", subtotal);
console.log("Desconto:", desconto);
console.log("Total:", total);