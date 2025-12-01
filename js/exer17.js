function q17() {
    let salMin = Number(prompt("Salário mínimo:"));
    let salario = Number(prompt("Salário do funcionário:"));
    alert("Recebe " + (salario / salMin).toFixed(2) + " salários mínimos");
}