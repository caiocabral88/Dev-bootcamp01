// let numero1 = 33;
let numero1 = 33;
let resultado2 = numero1 -10

console.log("O resultado é " + resultado2);


document.querySelector("#botao").addEventListener("click" , conta);
    let resultado66 = 0;
function conta() {
    let numero = document.querySelector("#numero").value;
    resultado66 = Number(numero) + Number(25);
    alert("O resultado é " + resultado66);
}

let titulo1 = document.querySelector("#titulo");
titulo1.addEventListener("click", teste);
function teste () {
    let resultado4 = Number(resultado66) + Number(resultado2);
    console.log(resultado4);
    document.querySelector("#final").innerText = ("O resultado final é " + resultado4);
}





