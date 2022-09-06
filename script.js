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

// create functions that will change/interact DOM

function changeHunger() {
    hungerInput.value= '-=1'
}

function changeSleep() {
    sleepInput.value= '-=1'
}

function changeBored() {
    boredInput.value= '-=1'
}