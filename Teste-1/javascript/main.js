document.getElementById('red').onclick = partyRed
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('yellow').onclick = partyYellow

function partyRed() {
    document.querySelector('body').style.backgroundColor = 'red'
    document.querySelector('body').style.color = 'black'
}

function partyGreen() {
    document.querySelector('body').style.backgroundColor = 'green'
    document.querySelector('h1').style.color = 'lightgreen'
    document.querySelector('body').style.color = 'black'
}

function partyBlue () {
    document.querySelector('body').style.backgroundColor = 'blue'
    document.querySelector('body').style.color = 'black'
    }

    function partyYellow () {
        document.querySelector('body').style.backgroundColor = 'yellow'
        documento.querySelector('body').style.color = 'black'
    }