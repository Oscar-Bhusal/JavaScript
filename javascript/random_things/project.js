// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8
}

const SYMBOL_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2
}


const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, Try again");
    }
    else {
      return numberDepositAmount;
    }
  }
}

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on(1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines, Try again");
    }
    else {
      return numberOfLines;
    }
  }
}

function getBet(balance, numberOfLines) {
  while (true) {
    const bet = prompt("Enter the bet per line: ");
    const numberbet = parseFloat(bet);

    if (isNaN(numberbet) || numberbet <= 0 || numberbet > balance / numberOfLines) {
      console.log("Invalid bet amount, Try again");
    }
    else {
      return numberbet;
    }
  }
}

const spin = () => {
  const symbols = [];
  for (const[symbol,count] of Object.entries(SYMBOLS_COUNT)){
    for(let i = 0; i<count; i++){
      symbols.push(symbol);
    }
  }

  const reels=[[],[],[]];
  for (let i= 0 ; i<COLS; i++){
    const reelsSymbols = [...symbols];
    for (let j = 0; j, ROWS; j++) {

    }
  }
}

spin();

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);