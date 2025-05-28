document.querySelector("#button").addEventListener("click", movies);

function movies() {
    let movie = ["Lord of the Rings", "Star Wars", "Black Swan", "Interestellar"];
    let i = 0;
    while (i < movie.length) {
        document.querySelector("#movies").innerHTML += movie[i] + "<br>";
        console.log(movie[i]);
        i++;
    }
}

//Array de Números
let number = ["1", "2", "3", "4", "5"];
function numbers() {
    for (let i = 0; i < number.length; i++) {
        number[i] = Number[i] + 3;
    }
}

number.forEach((item, i) => {
    number[i] = Number(item) + 3;
});


//média
let soma = 0;

for (let i = 0; i < number.length; i++){
    soma += number[i];
}

let result = soma / number.length;

//Create a function that takes two numbers, divide de first by the second number and multiply the result by the third number. Console the result.
function numFois(n1,n2,n3) {
    let resulta = Number(n1) / Number(n2);
    let resultaDois = Number(resulta) * Number(n3);
    console.log(resultaDois);
}

//Create a function that takes one number and returns the square root of that.

function raizUm(n1) {
    let raizNum = Math.sqrt(n2);
    console.log(raizNum);
}

//Cube root
function raizUm(n1) {
    let raizNum = Math.cbrt(n2);
    console.log(raizNum);
}

//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function pulaNumber(n1) {
    for (let i =1; i <= n1; i++) {
        if (i % 5 !== 0) {
            console.log(i);
        }
    }
}

//Review Array - Accessing elements by the index

function reviewArray(n1,n2,n3,n4,n5) {
    let sequence = [n1,n2,n3,n4,n5]
    if (sequence[n1] < sequence[n5]){
        alert("Hi!");
    } else if (sequence[n1] > sequence[n2]) {
        alert("Bye")
    } else {
        alert("We close soon");
    }
}