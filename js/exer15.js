function q15() {
    let nome = prompt("Nome do aluno:");
    let nota = Number(prompt("Nota:"));
    alert(nome + " está " + (nota >= 7 ? "Aprovado" : "Em recuperação"));
}