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

let number = ["1", "2", "3", "4", "5"];
function numbers() {
    for (let i = 0; i < number.length; i++) {
        number[i] = Number[i] + 3;
    }
}