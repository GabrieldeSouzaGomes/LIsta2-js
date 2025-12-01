function q12() {
    let codigo = prompt("Código do produto (1,2,3):");
    let qtd = Number(prompt("Quantidade:"));

    let preco = {1: 10, 2: 20, 3: 30};

    if (preco[codigo]) {
        alert("Total: R$ " + (preco[codigo] * qtd).toFixed(2));
    } else alert("Código inválido!");
}