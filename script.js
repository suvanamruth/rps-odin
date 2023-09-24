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
function game(plchoice)
{
    
    playerChoice = plchoice
    computerChoice = getComputerChoice()
    result = playRound(playerChoice, computerChoice)
    resultBox = document.querySelector('.result')
    resultBox.textContent = result

    
}
function playScissors()
{
    game("scissors")
}
function playPaper()
{
    game("paper")
}
function playRock()
{
    game("rock")
}