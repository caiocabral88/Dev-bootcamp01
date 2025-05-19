document.querySelector('#enviar').addEventListener('click', enviado);

function enviado() {
    const dia = document.querySelector('#dia').value.toLowerCase();


    if (dia === "terça" || dia === "quinta") {
            document.querySelector("#texto").innerText = "Hoje você tem aula";
    }else if (dia === "segunda" || dia === "quarta") {
            document.querySelector("#texto").innerText = "Hoje é foga bb";
    }else {
            document.querySelector("#texto").innerText = "Estudo no Silêncio";
    }

}
