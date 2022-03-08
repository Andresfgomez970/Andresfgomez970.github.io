const options = ["Rock", "Paper", "Scissors"];

// chose value of the computer
function computerPlay(){
    let index = Math.floor(Math.random() * options.length);
    return options.at(index);
}

function firstToUpperCase(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// This gives the result of a round given the selection of the computer
//   and the selection of the player.
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    
    if (playerSelection == "rock" && playerSelection != computerSelection){
        if (computerSelection == "scissors"){
            playerSelection = firstToUpperCase(playerSelection);
            return "You win! " + playerSelection + " beats " + computerSelection;
        }
        else if (computerSelection == "paper"){
            computerSelection = firstToUpperCase(computerSelection);
            return "You lose! " + computerSelection + " beats " + playerSelection;
        }
    }

    else if (playerSelection == "paper" && playerSelection != computerSelection){
        if (computerSelection == "rock"){
            playerSelection = firstToUpperCase(playerSelection);
            return "You win! " + playerSelection + " beats " + computerSelection;
        }
        else if (computerSelection == "scissors"){
            computerSelection = firstToUpperCase(computerSelection);
            return "You lose! " + computerSelection + " beats " + playerSelection;
        }
    }

    else if (playerSelection == "scissors" && playerSelection != computerSelection){
        if (computerSelection == "paper"){
            playerSelection = firstToUpperCase(playerSelection);
            return "You win! " + playerSelection + " beats " + computerSelection;
        }
        else if (computerSelection == "rock"){
            computerSelection = firstToUpperCase(computerSelection);
            return "You lose! " + computerSelection + " beats " + playerSelection;
        }
    }

    else if (playerSelection == computerSelection){
        return "This is tied! Both of you chose " + playerSelection;
    }

    else{
        return "Player selection is undefined"
    }
}

// This makes the user select an option from ther terminal
function game(){
    let wantToPlay = prompt("Wanna play rock, paper, scissors?");
    wantToPlay = wantToPlay.toLowerCase().replace(/\s+/g, ' ').trim();

    let maxAskingTimes = 5;
    let c = 0;
    while (wantToPlay != "yes" && wantToPlay != "no" && c < maxAskingTimes){
        wantToPlay = prompt("Please enter a valid option. Wanna play? Yes or no?");
        wantToPlay = wantToPlay.toLowerCase().replace(/\s+/g, ' ').trim();
        c++;
    }

    if (wantToPlay == "yes"){
        let playerSelection;
        let computerSelection;
        let count_win = 0;
        let result; 
        let totalRounds = 5;

        console.log("Welcome to the game my friend");
        for (let i = 0; i < totalRounds; i++) {
            playerSelection = prompt("Please select an option (rock, paper, scissors)");
            computerSelection = computerPlay();
            result = playRound(playerSelection, computerSelection);
            console.log(result);    
            if (result.includes("win")){
                count_win++;
            }
        }
        console.log(playRound(playerSelection, computerSelection));        
        if (count_win / totalRounds > 0.5){
            console.log("You have won!! Thanks for playing");
        }
        else if (count_win / totalRounds < 0.5){
            console.log("You have lose!! Thanks for playing anyway")
        }

    }
    else{
        console.log("It is a shame, you lost a good moment");
    }
}


function playRoundInteractive(e){
    console.log(this);
    computerSelection = computerPlay();
    playerSelection = String(e.target.classList[0]);
    result = playRound(playerSelection, computerSelection);
    
    let h2 = document.querySelector(".result h2");
    h2.textContent = result;

    let userh2 = document.querySelector(".user-score");
    let computerh2 = document.querySelector(".computer-score");

    if (Number(computerh2.textContent) == 5 || Number(userh2.textContent) == 5){
        computerh2.textContent = 0;
        userh2.textContent = 0;
        h2.style.color = "black";
        h2.textContent = "New Game, please select an option";
    }

    if (result.includes("win")){
        console.log(userh2.textContent);
        userh2.textContent = Number(userh2.textContent) + 1;    
    }
    else if (result.includes("lose")){
        computerh2.textContent = Number(computerh2.textContent) + 1;        
    }

    if (Number(computerh2.textContent) == 5 || Number(userh2.textContent) == 5){
        if (Number(userh2.textContent) == 5){
            h2.textContent = "You have won!! Thanks for playing";
        }
        else if (Number(computerh2.textContent) == 5){
            h2.textContent = "You have lose!! Thanks for playing anyway";
        }
        h2.style.color = "red";
    }

}


// Create a listener to veign playig based in user selection
const buttons = document.querySelectorAll(".options button");

//playRoundInteractive(e);
buttons.forEach(button => button.addEventListener("click", (e) => playRoundInteractive(e)));
