document.querySelector('#enviar').addEventListener('click', enviado);

function enviado() {
    const dia = document.querySelector('#dia').value;


    if (dia === "terça" || dia === "Terça" || dia === "quinta" || dia ==="Quinta") {
            document.querySelector("#texto").innerText = "Hoje você tem aula";
    }else if (dia === "segunda" || dia === "Segunda" || dia === "quarta" || dia === "Quarta") {
            document.querySelector("#texto").innerText = "Hoje é foga bb";
    }else {
            document.querySelector("#texto").innerText = "Estudo no Silêncio";
    }

}
