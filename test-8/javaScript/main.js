const azaleia = document.querySelector("#azaleia");
const rosa = document.querySelector("#rosa");
const lotus = document.querySelector("#lotus");


document.querySelector("#azaleira").addEventListener("click", flor1);
document.querySelector("#roseira").addEventListener("click", flor2);
document.querySelector("#loteira").addEventListener("click", flor3);


function flor1() {
    azaleia.classList.toggle('flores');
    rosa.classList.add('flores');
    lotus.classList.add('flores');
}

function flor2() {
    azaleia.classList.add('flores');
    rosa.classList.toggle('flores');
    lotus.classList.add('flores');
}

function flor3() {
    azaleia.classList.add('flores');
    rosa.classList.add('flores');
    lotus.classList.toggle('flores');
}