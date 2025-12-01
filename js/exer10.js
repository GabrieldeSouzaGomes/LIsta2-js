function q10() {
    let a = Number(prompt("Número 1:"));
    let b = Number(prompt("Número 2:"));
    let c = Number(prompt("Número 3:"));
    let lista = [a, b, c];
    lista.sort((x, y) => x - y);
    alert("Ordem crescente: " + lista.join(", "));
}