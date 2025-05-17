document.querySelector('#txt').addEventListener('click', converter);


function converter() {
    let input = document.querySelector('#number1').value;
    

    if (input % 2 === 0) {
        document.querySelector('#saida').innerText = "O número " + input + " é par";
    }else {
        document.querySelector('#saida').innerText = "O número " + input + " é ímpar";
    }

}