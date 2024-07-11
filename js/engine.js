let humanScore = 0, computerScore = 0

console.log("Ready Player One")

/*
   A Choice is one of:
   - "rock"
   - "paper"
   - "scissors"
   INTERPRETATION: Represents the decision made in the game
   WHERE: Choice is a String
 */

// getComputerChoice : Choice
// Randomly returns "rock", "paper", or "scissors"
function getComputerChoice() {
    
    const signal = (Math.random() * 10)

    if (signal >= 0 && signal < 4) {
	return "rock"
    } else if (signal >= 4 && signal < 7) {
	return "paper"
    } else if (signal >= 7 && signal <= 10) {
	return "scissors"
    }
	
}

// getHumanChoice : Choice
// Returns one of the valid choices based on the user input
function getHumanChoice() {

    const handSignal = 
	prompt("Rock, Paper, or Scissors?").toLowerCase()

    if (handSignal === "rock" || handSignal === "paper" ||
	handSignal === "scissors") {
	return handSignal
    } else {
	alert("Bad sign, go again")
	getHumanChoice()
    }
}

function convertChoice (c) {
    return (c == "rock") ? 1 : (c == "paper") ? 2 : 3
}

// playRound : Choice Choice -> IO
// Takes the human and computer player choices and determines the
// winner of the round via a string message.
function playRound(humanChoice, computerChoice) {

    let hc = 0
    let cc = 0
    
    if (computerChoice === "scissors" &&
	humanChoice === "rock") {
	hc = convertChoice(computerChoice)
	cc = convertChoice(humanChoice)
    } else if (humanChoice === "scissors" &&
	       computerChoice === "rock"){
	cc = convertChoice(humanChoice)
	hc = convertChoice(computerChoice)
    } else {
	hc = convertChoice(humanChoice)
	cc = convertChoice(computerChoice)
    }

    if (hc > cc) {
	humanScore += 1
	console.log( `You win! ${humanChoice} beats ${computerChoice}` )
    } else if (cc > hc) {
	computerScore += 1
	console.log( `You lose! ${computerChoice} beats ${humanChoice}` )
    } else {
	console.log( `Tied! ${humanChoice} and ${computerChoice}` )
    }

}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound( humanSelection, computerSelection )
