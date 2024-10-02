const prompt = require('prompt-sync')();
let playerScore = 0
let computerScore = 0
document.getElementById('rock').addEventListener('clilck', function(){
    playGame('rock')
})
document.getElementById('paper').addEventListener('clilck', function(){
    playGame('paper')
})
document.getElementById('scissors').addEventListener('clilck', function(){
    playGame('scissors')
})
function gameStart(playerOption){
    const computerChoice = computerOption()
    const winner = chickenDinner(playerChoice, computerChoice)
    newScore(winner, playerChoice, computerChoice)
}

function chickenDinner(player, computer){
    if(player === computer){
        return "brake even"
}
else if ((player=== "rock" && computer === "scissors" ) || (player ==="paper" && computer === "rock") || (player=== "scissors" && computer=== "paper")){
    return player
}
else{
    return computer
}
}
function computerOption(){
    const choices = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * 3)
    return choices[randomIndex]
}
function newScore(winner, playerChoice, computerChoice){
    let resultText = `You - ${playerChoice}, Computer - ${computerChoice}`
    if(winner === "player"){
        playerScore++
        resultText += " (you won yay)"
    }
    else if ( winner === "computer"){
        computerScore++
        resultText += " (ai wins)"
    }
    else{
        resultText += "(you brok even)"
    }
    document.getElementById('resultText').textContent = resultText
    document.getElementById('scoreText').textContent = `Score: You - ${playerScore}, Computer - ${computerScore}
}