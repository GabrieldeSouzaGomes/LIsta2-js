function q19() {
    let idade = Number(prompt("Idade:"));
    let msg = "";

    if (idade >= 18 && idade <= 70) msg = "Voto obrigatório";
    else if (idade >= 16) msg = "Voto facultativo";
    else msg = "Não pode votar";

    alert(msg);
}