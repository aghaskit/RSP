// let rock = document.querySelector('#rock')
// let scissors = document.querySelector('#scissors')
// let paper = document.querySelector('#paper')
// let rock1 = document.getElementById('rock')
// let paper1 = document.getElementById('paper')
// let scissors1 = document.getElementById('scissors')
// let users = document.getElementsByClassName('buttons__btn')
// let h2 = document.getElementsByTagName('h2')


let userChoice = document.querySelector('.user__choice')
let computerChoice = document.querySelector('.computer__choice')
let result = document.querySelector('.result')
let comp;
let user;

let btns = document.querySelectorAll('.buttons__btn')


function generateComputerChoice(){
    let random = Math.floor(Math.random()*3)
    if( random === 0){
        comp = 'rock'
    }else if( random === 1){
        comp = 'paper'
    } else if( random === 2){
        comp = 'scissors'
    }
    computerChoice.textContent = comp
}


function compareChoices(){
    if(user === comp){
        result.textContent = 'Tie'
    }else if(user === 'rock' && comp === 'scissors'){
        result.textContent = 'You won'
    }else if(user === 'rock' && comp === 'paper'){
        result.textContent = 'You lost'
    }else if(user === 'scissors' && comp === 'rock'){
        result.textContent = 'You won'
    }else if(user === 'scissors' && comp === 'paper'){
    result.textContent = 'You won'
    }else if(user === 'paper' && comp === 'rock'){
    result.textContent = 'You won'
    }else if(user === 'paper' && comp === 'scissors'){
    result.textContent = 'You lost'
}
}

for( let btn of btns ){
    btn.addEventListener('click', function() {
      user = btn.id
      userChoice.textContent = user
      generateComputerChoice()
      compareChoices()
    })
}