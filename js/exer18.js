function q18() {
    let nome = prompt("Nome do aluno:");
    let turno = prompt("Turno (M/V):").toUpperCase();
    let msg = turno === "M" ? "Bom dia, aluno" : "Boa tarde, aluno";
    alert(msg + " " + nome);
}