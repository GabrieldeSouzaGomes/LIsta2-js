
function q6() {
    let n1 = Number(prompt("Nota 1:"));
    let n2 = Number(prompt("Nota 2:"));
    let n3 = Number(prompt("Nota 3:"));
    let media = (n1 + n2 + n3) / 3;
    alert("Média: " + media.toFixed(2) + "\n" + (media >= 7 ? "Aprovado" : "Reprovado"));
}