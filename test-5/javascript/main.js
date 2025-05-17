// document.querySelector('#enviar').addEventListener('click', rodar);


// function rodar() {
//     const nome1 = document.querySelector('#pnome').value;
//     const nome2 = document.querySelector('#snome').value;
//     const nome3 = document.querySelector('#tnome').value;
//     const nome4 = document.querySelector('#qnome').value;

//     document.querySelector('#grito').innerText = `${nome1} ${nome2} ${nome3} ${nome4}`;
// }




const sintese = window.speechSynthesis
document.querySelector('#enviar').addEventListener('click', rodar);


function rodar() {
    const nome1 = document.querySelector('#pnome').value;
    const nome2 = document.querySelector('#snome').value;
    const nome3 = document.querySelector('#tnome').value;
    const nome4 = document.querySelector('#qnome').value;

    const grito1 = `${nome1} ${nome2} ${nome3} ${nome4}`;

    document.querySelector('#grito').innerText = grito1;

    let grite = new SpeechSynthesisUtterance(grito1);
    grite.lang = 'pt-BR';  

    sintese.speak(grite); 
}

