document.querySelector("#botaoUm").addEventListener("click", subtrair);

function subtrair() {
    let valorSubUm = document.querySelector("#subUm").value;
    let valorSubDois = document.querySelector("#subDois").value;

    let resultSub = Number(valorSubUm) - Number(valorSubDois);
    alert("Resultado da subtração: " + resultSub);
}


document.querySelector("#botaoDois").addEventListener("click", multiplicar);

function multiplicar() {
    let valorMultUm = document.querySelector("#multUm").value;
    let valorMultDois = document.querySelector("#multDois").value;
    let valorMultTres = document.querySelector("#multTres").value;

    let resultMult = Number(valorMultUm) * Number(valorMultDois) * Number(valorMultTres);
    alert("Resultado da multiplicação: " + resultMult);
}