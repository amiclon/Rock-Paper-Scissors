
const rpsAnswer = ['Rock','Paper','Scissors']
var computerSelection;
var playerRock = document.getElementById("rockButton")
var playerPaper = document.getElementById("paperButton")
var playerScissors = document.getElementById("scissorsButton");
var playerSelection = [playerRock, playerPaper, playerScissors]
var computerScore = 0;
var playerScore = 0;

document.getElementById("rockButton").onclick = alert("Rock")

function computerPlay() {
return rpsAnswer[Math.floor(Math.random()*rpsAnswer.length)]
} 

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase()
    if (computerSelection == playerSelection) {
        return "Tie game!"
    } else if (
        computerSelection == "rock" && playerSelection == playerSelection[2] ||
        computerSelection == "scissors" && playerSelection == playerSelection[1] ||
        computerSelection == "paper" && playerSelection == playerSelection[0]
    )   {return "You lost!"} 
    else if (
        computerSelection == "scissors" && playerSelection == playerSelection[0] ||
        computerSelection == "paper" && playerSelection == playerSelection[2] ||
        computerSelection == "rock" && playerSelection == playerSelection[1]
    )   {return "You won!"}
}
playerSelection.addEventListener(onclick , playRound(playerSelection, computerSelection))
function game() {
    playRound(playerSelection, computerSelection)
    if (playRound("Tie game"))
    if (playRound("You lost!")) {
        ++computerScore
    }
    if (playRound("You won!")) {
        ++playerScore
    }
for (playerScore <= 4; computerScore <= 4;) {
    return "Try again!"
} 
if (computerScore = 5) {
    return "Failure!"
}
if (playerScore = 5) {
    return "Success!"
}
}

console.log(playRound())