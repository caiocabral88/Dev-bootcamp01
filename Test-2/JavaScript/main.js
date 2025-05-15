/*
Variáveis
*/
let total = 0


/*
Declaração de funções
*/
document.querySelector('#zeroUm').addEventListener('click', umZero)
document.querySelector('#zeroDois').addEventListener('click', doisZero)
document.querySelector('#zeroTres').addEventListener('click', tresZero)
document.querySelector('#zeroQuatro').addEventListener('click', quatroZero)




/*
Funções
*/
function umZero () {
    total = total + 2
    document.querySelector('#total1').innerText = total
}
function doisZero () {
    total = total + 5
    document.querySelector('#total1').innerText = total
}
function tresZero () {
    total = total - 3
    document.querySelector('#total1').innerText = total
}
function quatroZero () {
    total = total - 1
    document.querySelector('#total1').innerText = total
}