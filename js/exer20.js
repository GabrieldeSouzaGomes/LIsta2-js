function q20() {
    let a = Number(prompt("Número 1:"));
    let b = Number(prompt("Número 2:"));
    let c = Number(prompt("Número 3:"));
    let media = (a + b + c) / 3;

    alert("Média: " + media.toFixed(2) + "\n" +
          (media >= 7 ? "Aprovado" : "Reprovado"));
}