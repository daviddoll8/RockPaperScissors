
function initEvents(){
    const buttons = document.querySelectorAll(".playBtn");

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let computerSelection = getComputerChoice();
            let playerSelection = 
            playRound(playerSelection, computerSelection);
        });
    });
}

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
                return "invalid computer selection";
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
                return "invalid computer selection";
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
                return "invalid computer selection";
        }
    }
    return "invalid player selection";
}

function generateGameOutcome(playerWins, computerWins, tieRounds){
    let matchStats = "Player Wins: " + playerWins + " Computer Wins: " + computerWins + " Tie Rounds in Match: " + tieRounds;
    if(playerWins > computerWins){
        return "You Win the Best of 5! \n" + matchStats;
    }else{
        return "You Lost the Best of 5! \n" + matchStats;
    }
}

initEvents();

// function game(){
//     let playerWins = 0;
//     let computerWins = 0;
//     let tieRounds = 0;

//     while(playerWins < 3 && computerWins < 3){
//         let playerSelection = prompt("Please enter your choice for rock, paper, scissors: ").toLowerCase();
//         let computerSelection = getComputerChoice();
//         let roundOutcomeMsg = playRound(playerSelection, computerSelection);
//         let roundOutcome = roundOutcomeMsg.substring(0, 8);
//         if(roundOutcomeMsg === "invalid player selection" || roundOutcomeMsg === "invalid computer selection"){
//             continue; 
//         }
//         if(roundOutcome == "You Win!"){
//             playerWins++;
//         }else if(roundOutcome == "You Lose"){
//             computerWins++;
//         }else{
//             tieRounds++;
//         }
//         console.log(roundOutcomeMsg);
//     }
//     console.log(generateGameOutcome(playerWins, computerWins, tieRounds));
//     let playAgainChoice = "";
//     while(playAgainChoice !== "y" && playAgainChoice !== "n"){
//         playAgainChoice = prompt(generateGameOutcome(playerWins, computerWins, tieRounds) + " \nWould you like to play again y/n?").toLowerCase();
//     }
//     if(playAgainChoice === "y"){
//         game();
//     }
//     return;
// }

//game();


