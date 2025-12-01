 function q2() {
    let nome1 = prompt("Nome da primeira pessoa:");
    let idade1 = Number(prompt("Idade de " + nome1));
    let nome2 = prompt("Nome da segunda pessoa:");
    let idade2 = Number(prompt("Idade de " + nome2));

    if (idade1 > idade2) alert(nome1 + " é mais velho(a).");
    else if (idade2 > idade1) alert(nome2 + " é mais velho(a).");
    else alert("Ambos têm a mesma idade.");
}