document.querySelector("button").addEventListener("click", comer);



// let contador = 0;
// function comer(){
//     let valor = document.getElementById("numUm").value;
//     while (contador < Number(valor)){
//         contador++;
//         document.querySelector("#snack").innerText += " , " + contador;
//     } 
// }  


// function comer() {
//     let valor = document.getElementById("numUm").value;
//     for (let i = 0; i < valor; i++) {
//         document.querySelector("#snack").innerText += " , " + (i + 1);
//     }
// }


function comer() {
    let valor = document.getElementById("#textUm");
    for (let i = 0; i < 366; i++) {
        console.log(valor + " " + i);
        document.querySelector("#snack").innerText += " , " + (i + 1);
    }
}