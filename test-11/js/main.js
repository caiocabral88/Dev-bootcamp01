document.querySelector("#checkAgeButton").addEventListener("click", contador);





function contador() {
    let valor = document.querySelector("#age").value;

    if (valor < 16) {
        document.querySelector("#result").innerText = "Tu não pode dirigir";
    } else if (valor > 16 && valor < 18) {
        document.querySelector("#result").innerText = "Tu pode dirigir com um adulto";
    } else if (valor > 18 && valor < 21) {
        document.querySelector("#result").innerText = "Tu pode dirigir com um adulto ou sozinho";
    } else if (valor > 21 && valor < 25) {
        document.querySelector("#result").innerText = "Tu pode dirigir sozinho";
    } else if (valor > 25 && valor < 30) {
        document.querySelector("#result").innerText = "Tu pode dirigir sozinho e tem direito a desconto";
    } else {
        document.querySelector("#result").innerText = "Tu pode dirigir sozinho e tem direito a desconto e bônus";
    }
    



}