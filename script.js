function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if(choice === 0)
    {
        return "rock"
    }
    else if(choice === 1)
    {
        return "paper"
    }
    else
    {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection)
    {
        return "It's a Tie!"
    }
    else if(playerSelection === "rock" && computerSelection == "paper")
    {
        return "You Lose! Paper beats Rock"
    }
    else if(playerSelection === "paper" && computerSelection === "scissors")
    {
        return "You Lose! Scissors beats Paper"
    }
    else if(playerSelection === "scissors" && computerSelection === "rock")
    {
        return "You Lose! Rock beats Scissors"
    }
    else if(playerSelection === "rock" && computerSelection === "scissors")
    {
        return "You Win! Rock beats Scissors"
    }
    else if(playerSelection === "paper" && computerSelection === "rock")
    {
        return "You Win! Paper beats Rock"
    }
    else if(playerSelection === "scissors" && computerSelection === "paper")
    {
        return "You Win! Scissors beats Paper"
    }
}
function game()
{
    playerWins = 0
    computerWins = 0
    while(playerWins != 5 && computerWins != 5)
    {
        let playerChoice = prompt("rock, paper, or scissors?")
        playerChoice = playerChoice.toLowerCase()
        computerChoice = getComputerChoice()
        result = playRound(playerChoice, computerChoice)
        if(result.includes("Win"))
        {
            playerWins = playerWins + 1
        }
        else if(result.includes("Lose"))
        {
            computerWins = computerWins + 1
        }
        console.log(result)
    }
    if(playerWins == 5)
    {
        console.log("Congratulations! You Won!")
    }
    else
    {
        console.log("Sorry. You Lost.")
    }
    
}
console.log("hi")
game()