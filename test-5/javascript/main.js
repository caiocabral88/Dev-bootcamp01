document.querySelector('#enviar').addEventListener('click', rodar);


function rodar() {
    const nome1 = document.querySelector('#pnome').value;
    const nome2 = document.querySelector('#snome').value;
    const nome3 = document.querySelector('#tnome').value;
    const nome4 = document.querySelector('#qnome').value;

    document.querySelector('#grito').innerText = nome1 + '' + nome2 + '' + nome3 + '' + nome4;
}