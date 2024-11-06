document.getElementById("imcForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(altura) || altura <= 0) {
        resultado.textContent = "Insira sua altura";
        return;
    }

    if (isNaN(peso) || peso <= 0) {
        resultado.textContent = "Insira o seu peso.";
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao;

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc < 34.9) {
        classificacao = "Obesidade Grau I";
    } else if (imc < 39.9) {
        classificacao = "Obesidade Grau II";
    } else {
        classificacao = "Obesidade Grau III";
    }

    resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
});