
// Etapa Um
document.querySelector("#botaoUm").addEventListener("click", subtrair);

function subtrair() {
    let valorSubUm = document.querySelector("#subUm").value;
    let valorSubDois = document.querySelector("#subDois").value;

    let resultSub = Number(valorSubUm) - Number(valorSubDois);
    alert("Resultado da subtração: " + resultSub);
}


// Etapa Dois
document.querySelector("#botaoDois").addEventListener("click", multiplicar);

function multiplicar() {
    let valorMultUm = document.querySelector("#multUm").value;
    let valorMultDois = document.querySelector("#multDois").value;
    let valorMultTres = document.querySelector("#multTres").value;

    let resultMult = Number(valorMultUm) * Number(valorMultDois) * Number(valorMultTres);
    alert("Resultado da multiplicação: " + resultMult);
}

// Etapa Três

document.querySelector("#botaoTres").addEventListener("click", dividir);

function dividir() {
    let valDivUm = document.querySelector("#dividUm").value;
    let valDivDois = document.querySelector("#dividDois").value;
    let valDivTres = document.querySelector("#dividTres").value;

    let resultDiv = Number(valDivUm) / Number(valDivDois) / Number(valDivTres);
    alert("Resultado da divisão: " + resultDiv);
}