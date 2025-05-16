document.getElementById("red1").onclick = partyRed;
document.getElementById("green1").onclick = partyGreen;
document.getElementById("blue1").onclick = partyBlue;
document.getElementById("yellow1").onclick = partyYellow;
document.getElementById("gray1").onclick = partyGray;
document.getElementById("reset1").onclick = partyReset;

function partyRed() {
    document.querySelector(".container1").style.backgroundColor = "red";
    document.querySelector("body").style.color = "black";
    document.querySelector("h1").style.color = "white";
}

function partyGreen() {
    document.querySelector(".container1").style.backgroundColor = "green";
    document.querySelector("h1").style.color = "white";
}

function partyBlue() {
    document.querySelector(".container1").style.backgroundColor = "blue";
    document.querySelector(".container1").style.color = "white";
}

function partyYellow() {
    document.querySelector(".container1").style.backgroundColor = "yellow";
    document.querySelector("body").style.color = "white";
}

function partyGray() {
    document.querySelector(".container1").style.backgroundColor = "gray";
    document.querySelector("body").style.color = "white";
}

function partyReset() {
    document.querySelector(".container1").style.backgroundColor = "lightsalmon";
}

/*Calculadora Simples*/

let total = 0

document.querySelector('#maisTres').addEventListener('click', tresMais)
document.querySelector('#menosQuatro').addEventListener('click', quatroMenos)
document.querySelector('#maisNove').addEventListener('click', noveMais)
document.querySelector('#maisCinco').addEventListener('click', cincoMais)
document.querySelector('#totZero').addEventListener ('click', zeroTot)


function tresMais() {
    total = total +3
    document.querySelector('#total1').innerText = total
}

function quatroMenos() {
    total = total -4
    document.querySelector('#total1').innerText = total
}
    
function noveMais() {
    total = total + 9
    document.querySelector('#total1').innerText = total

}

function cincoMais() {
    total = total + 5
    document.querySelector('#total1').innerText = total
}

function zeroTot() {
    total = 0
    document.querySelector('#total1').innerText = total
}

