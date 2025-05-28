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


// function comer() {
//     let valor = document.getElementById("#textUm");
//     for (let i = 0; i < 366; i++) {
//         console.log(valor + " " + i);
//         document.querySelector("#snack").innerText += " , " + (i + 1);
//     }
// }


//_________________________________________________________


function addThree(n1, n2, n3) {
    let value = Number(n1) + Number(n2) + Number(n3);
    if (value > 1000) {
        console.log("O valor é LINCOLN");
    }
}
function dividThreee(n1, n2, n3) {
    let result = Number(n1) / Number(n2) / Number(n3);
    if (result % 5 === 0) {
        alert("AE CARAI");
    }
}
//declare a variable, assign it a Boolean, and alert the value

let variavelBoolean = true;
alert(variavelBoolean);

//Create a function that takes four numbers, and divide the sum of three first numbers by th fourth number.

function numbersUm(n1,n2,n3,n4) {
    let resultUm = (Number(n1) + Number(n2) + Number(n3)) / Number(n4);
    console.log("O resultado da divisão dos três primeiros números somados pelo quato número é: " + resultUm);
}
//Create a function that takes two numbers and console log the first number raised to the power of the second number.

function powerOfNumber (n1, n2) {
    let resultPower = Math.pow(Number(n1), Number(n2));
    console.log("O resultado da potência é: " + resultPower);
}   
//FizzBuzz Challenge
function testIfQuatro(n1){
    for (let i = 0; i < n1; i++) {
        if (n1 % 3 === 0 && n1 % 5 === 0) {
            console.log(i + "fizz");
        }else if (n1 % 3 === 0) {
            console.log(i + "buzz");
        }else if (n1 % 5 === 0) {
            console.log(i + "fizzbuzz");
        }else {
            console.log(i + n1 + " não é divisível por 3 ou 5");
        }

    }
}

// ARRAYS test1 :
// 01 - 
let movies = ["star wars", "lord of the rings", "matrix"];
//02 - 
let movieUm = movies[0];
//03 - 
let movieSize = movies.length;
//04 - 
let lastMovie = movies[2];
// ----------------------------------------------------

//Basics Array Interation
function corSelectorQuatro() {
let coress = ["blue", "yellow", "green", "red"];
for (let i = 0; i < coress.length; i++){
    console.log(coress[i]);
    }
}

