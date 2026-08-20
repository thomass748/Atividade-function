function calcularMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    return media;
}
let media = calcularMedia(7, 8, 9);
let resultado = classificarMedia(media);

console.log("Média:", media);
console.log("Resultado:", resultado);

