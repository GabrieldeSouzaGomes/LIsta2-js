function q14() {
    let peso = Number(prompt("Peso (kg):"));
    let altura = Number(prompt("Altura (m):"));
    let imc = peso / (altura * altura);

    let classificacao = "";
    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 25) classificacao = "Peso normal";
    else if (imc < 30) classificacao = "Sobrepeso";
    else classificacao = "Obesidade";

    alert("IMC: " + imc.toFixed(2) + "\n" + classificacao);
}