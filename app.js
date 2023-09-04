function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * (3));

    switch (computerSelection) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "Out of Range";
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === "rock"){
        switch (computerSelection) {
            case "rock":
                return "Tie Match! You both chose Rock.";
            case "paper":
                return "You Lose! Paper beats Rock.";
            case "scissors":
                return "You Win! Rock beats Scissors.";
            default:
                return "Invalid Computer Selection";
        }
    }else if(playerSelection === "paper"){
        switch (computerSelection) {
            case "rock":
                return "You Win! Paper beats Rock.";
            case "paper":
                return "Tie Match! You both chose Paper.";
            case "scissors":
                return "You Lose! Scissors beats Paper.";
            default:
                return "Invalid Computer Selection";
        }
    }else if(playerSelection === "scissors"){
        switch (computerSelection) {
            case "rock":
                return "You Lose! Rock beats Scissors.";
            case "paper":
                return "You Win! Scissors beats Paper.";
            case "scissors":
                return "Tie Match! You both chose Scissors.";
            default:
                return "Invalid Computer Selection";
        }
    }
    return "Invalid Player Selection Chosen";
}

console.log(playRound("scissors", getComputerChoice()));


