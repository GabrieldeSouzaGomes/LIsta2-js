function q8() {
    let s = Number(prompt("Digite o salário:"));
    let bonus = s > 2000 ? s * 0.10 : s * 0.05;
    alert("Bônus: R$ " + bonus.toFixed(2));
}