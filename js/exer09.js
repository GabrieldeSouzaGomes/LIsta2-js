function q9() {
    let mes = prompt("Digite o nome do mês:").toLowerCase();
    let dias = {
        janeiro:31, fevereiro:28, março:31, abril:30, maio:31, junho:30,
        julho:31, agosto:31, setembro:30, outubro:31, novembro:30, dezembro:31
    };

    alert(dias[mes] ? dias[mes] + " dias" : "Mês inválido!");
}