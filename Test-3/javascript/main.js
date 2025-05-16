document.getElementById("red1").onclick = partyRed;
document.getElementById("green1").onclick = partyGreen;
document.getElementById("blue1").onclick = partyBlue;
document.getElementById("yellow1").onclick = partyYellow;
document.getElementById("gray1").onclick = partyGray;
document.getElementById("reset1").onclick = partyReset;

function partyRed() {
    document.querySelector("body").style.backgroundColor = "red";
    document.querySelector("body").style.color = "black";
    document.querySelector("h1").style.color = "white";
}

function partyGreen() {
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector("h1").style.color = "white";
}

function partyBlue() {
    document.querySelector("body").style.backgroundColor = "blue";
    document.querySelector("body").style.color = "white";
}

function partyYellow() {
    document.querySelector("body").style.backgroundColor = "yellow";
    document.querySelector("body").style.color = "white";
}

function partyGray() {
    document.querySelector("body").style.backgroundColor = "gray";
    document.querySelector("body").style.color = "white";
}

function partyReset() {
    document.querySelector("body").style.backgroundColor = "lightcoral";
}

