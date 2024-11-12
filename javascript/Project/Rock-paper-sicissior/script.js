const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

const playerChoosed = document.querySelector("#player-choosed-option");
const computerChoosed = document.querySelector("#computer-choosed-option");
const pointTo = document.querySelector("#point-to");

const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");

let playerPoint = 0;
let computerPoint = 0;

const computerChoice = ()=>{
  const choices = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random()*3);
  const randomChoice = choices[randomNumber];
  computerChoosed.textContent = randomChoice;
}

btnRock.addEventListener("click", ()=>{
  const choosedPlayer = "Rock";
  playerChoosed.textContent = choosedPlayer;
  computerChoice();
  compare(computerChoosed.textContent,playerChoosed.textContent);
  playerScore.textContent = playerPoint;
  computerScore.textContent = computerPoint;
  checkWinner(Number(playerScore.textContent),Number(computerScore.textContent));
});

btnPaper.addEventListener("click", ()=>{
  const choosedPlayer = "Paper";
  playerChoosed.textContent = choosedPlayer;
  computerChoice();
  compare(computerChoosed.textContent,playerChoosed.textContent);
  playerScore.textContent = playerPoint;
  computerScore.textContent = computerPoint;
  checkWinner(Number(playerScore.textContent),Number(computerScore.textContent));
});

btnScissors.addEventListener("click", ()=>{
  const choosedPlayer = "Scissors";
  playerChoosed.textContent = choosedPlayer;
  computerChoice();
  compare(computerChoosed.textContent,playerChoosed.textContent);
  playerScore.textContent = playerPoint;
  computerScore.textContent = computerPoint;
  checkWinner(Number(playerScore.textContent),Number(computerScore.textContent));
});

const compare = (randomChoice,choosedPlayer)=>{
  if(randomChoice === "Rock" && choosedPlayer === "Paper" || 
  randomChoice === "Paper" && choosedPlayer === "Scissors" ||
  randomChoice === "Scissors" && choosedPlayer === "Rock"){
    pointTo.textContent = "Player got a point!!";
    playerPoint++;
  }
  else if(randomChoice === "Paper" && choosedPlayer === "Rock" ||
    randomChoice === "Scissors" && choosedPlayer === "Paper" ||
    randomChoice === "Rock" && choosedPlayer === "Scissors"){
    pointTo.textContent = "Computer got a point!!";
    computerPoint++;
  }
  else if(randomChoice === choosedPlayer){
    pointTo.textContent = "It's a tie, So no one gets a point!!";
  }
}

const checkWinner = (playerPoint,computerPoint)=>{
  if(playerPoint === 3){
    alert("Player has won!");
    location.reload();
  }
  else if(computerPoint === 3){
    alert("Computer has won!");
    location.reload();
  }
}
