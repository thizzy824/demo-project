console.log('YESSIRRREEE')


/*----- constants -----*/

// Grab elements need for game using querySelector

// buttons needed
let foodButton = document.querySelector('.food')

let sleepButton = document.querySelector('.sleep')

let playButton = document.querySelector('.play')
// input elements need for DOM
let hungerInput = document.querySelector('#hunger')

let ageInput = document.querySelector('#age')

let boredInput = document.querySelector('#bored')

let sleepInput = document.querySelector('#snooze')

/*----- app's state (variables) -----*/







/*----- cached element references -----*/






/*----- event listeners -----*/

// Add event listeners to buttons

foodButton.addEventListener('click', changeHunger)

sleepButton.addEventListener('click', changeSleep)

playButton.addEventListener('click', changeBored)







/*----- functions -----*/

// create functions that will change Stat values

function changeHunger() {
    hungerInput.value-=1
}

function changeSleep() {
    sleepInput.value-=1
}

function changeBored() {
    boredInput.value-=1
}

// create setInterval functions

setInterval(function () {
    hungerInput.value++
}, 2000);

setInterval(function () {
    ageInput.value++
}, 7000);

setInterval(function () {
    boredInput.value++
}, 4000);

setInterval(function () {
    sleepInput.value++
}, 3000);


// create a render function

function render() {

}