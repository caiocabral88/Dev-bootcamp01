// Somador

document.querySelector("#btnSomar").addEventListener("click", suma);

let numero1 = document.getElementById("num1");
let numero2 = document.getElementById("num2");

function suma() {
    let numero3 = Number(numero1.value) + Number(numero2.value);
    alert("A sma é:" + numero3);
}

// Multiplicador de 3 Numeros
document.querySelector("#btnMultiplicar").addEventListener("click", multiplicar);

let multiplicar1 = document.getElementById("mult1");
let multiplicar2 = document.getElementById("mult2");
let multiplicar3 = document.getElementById("mult3");

function multiplicar() {
    let multiplicar4 = Number(multiplicar1.value) * Number(multiplicar2.value) * Number(multiplicar3.value);

    document.querySelector("#resultMult").innerText = multiplicar4;
}

// Resto da Divisão
document.querySelector("#btnDividir").addEventListener("click", divisao);

let dividir1 = document.getElementById("div1");
let dividir2 = document.getElementById("div2");


function divisao() {
    let dividir3 = Number(dividir1.value) % Number(dividir2.value);

    document.querySelector("#resultDiv").innerText = dividir3;

}