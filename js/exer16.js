function q16() {
    let qtd = Number(prompt("Quantidade de maçãs:"));
    let preco = qtd < 12 ? 0.50 : 0.40;
    alert("Total: R$ " + (preco * qtd).toFixed(2));
}