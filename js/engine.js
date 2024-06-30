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
let getComputerChoice = () => {
    
    const signal = (Math.random() * 10)

    if (signal >= 0 && signal < 4) {
	return "rock"
    } else if (signal >= 4 && signal < 7) {
	return "paper"
    } else if (signal >= 7 && signal <= 10) {
	return "scissors"
    }
	
}
