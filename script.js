// Global variables
let humanScore = 0;
let computerScore = 0;

// Generates a random computer choice ("rock", "paper", or "scissors")
function getComputerChoice() 
{
    // Converts computer-generated int choice to corresponding string
    function convertIntChoice(computerChoice) 
    {
        switch (computerChoice) 
        {
            case 0:
                return "rock";
            case 1:
                return "paper";
            case 2:
                return "scissors";
        }
    }

    let intChoice = Math.floor(Math.random() * 3);
    return convertIntChoice(intChoice);
}

// Gets the user choice 
function getHumanChoice() 
{
    let choice = prompt("Enter choice (rock, paper, or scissors): ");
    let lowerCaseChoice = choice.toLowerCase();

    return lowerCaseChoice;
}

// Plays a single round of the game, adjusting score at the end
function playRound(humanChoice, computerChoice)
{
    // Displays round end message and updates score
    function endRound(playerStatus, playerChoice, computerChoice) 
    {
        switch (playerStatus)
        {
            case "draw":
                console.log(`Draw! You both chose ${playerChoice}.\n`);
                break;
            
            case "win":
                ++humanScore;
                console.log(`You win! ${playerChoice} beats ${computerChoice}.\n`);
                break;
            
            case "lose":
                ++computerScore;
                console.log(`You lose! ${computerChoice} beats ${playerChoice}.\n`);
                break;
        }
    }

    if (humanChoice === computerChoice) {
        endRound("draw", humanChoice, computerChoice);
    }
    else if ( (humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper") ) {
        endRound("win", humanChoice, computerChoice);
    }
    else {
        endRound("lose", humanChoice, computerChoice);
    }
}

// Plays a game of five rounds, declaring the winner at the end
function playGame()
{
    // Displays game end message
    function endGame()
    {
        let winner;

        if (humanScore > computerScore) {
            winner = "Player";
        }
        else if (computerScore > humanScore) {
            winner = "Computer";
        }
        else {
            winner = "draw";
        }

        if (winner !== "draw") {
            console.log(`Game complete! ${winner} wins.\n`);
        }
        else {
            console.log("Game complete! No winner.");
        }
    }

    for (let i = 0; i < 5; ++i)
    {
        console.log(`Round ${i}...`);

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        console.log(`Player choice: ${humanChoice}`);
        console.log(`Computer choice: ${computerChoice}`);
        console.log("Playing round...");

        playRound(humanChoice, computerChoice);
    }

    endGame();
}

playGame();
