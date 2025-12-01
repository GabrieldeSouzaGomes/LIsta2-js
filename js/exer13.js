function q13() {
    let idade = Number(prompt("Idade:"));
    let sexo = prompt("Sexo (M/F):").toUpperCase();

    if ((sexo === "M" && idade >= 65) || (sexo === "F" && idade >= 60))
        alert("Pode se aposentar");
    else
        alert("Não pode se aposentar");
}