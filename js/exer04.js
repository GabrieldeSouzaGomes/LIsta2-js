function q4() {
    let idade = Number(prompt("Digite a idade:"));
    let msg = "";

    if (idade <= 12) msg = "Criança";
    else if (idade <= 17) msg = "Adolescente";
    else if (idade <= 59) msg = "Adulto";
    else msg = "Idoso";

    alert(msg);
}