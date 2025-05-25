document.querySelector("button").addEventListener("click", comer);



let contador = 0;
function comer(){
    let valor = document.getElementById("numUm").value;
    while (contador < Number(valor)){
        contador++;
        document.querySelector("#snack").innerText += " , " + contador;
    } 
}