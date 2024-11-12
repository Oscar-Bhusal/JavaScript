const prompt = require("prompt-sync")();
var again = "y";
while(again==="y"){
    const character = prompt("What do you want the pyramid to be made of: ");
    const count = parseInt(prompt("How many rows do u want in the pyramid: "));
    const rows = [];
    let inverted = prompt("Do you want the pyramid inverted(y or n): ");

    function padRow(rowNumber, rowCount) {
      return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
    }

    for (let i = 1; i <= count; i++) {
      if (inverted == "y") {
        rows.unshift(padRow(i, count));
      } else {
        rows.push(padRow(i, count));
      }
    }

    /*while (rows.length < count) {
      rows.push(padRow(rows.length + 1, count));
    }*/

    /*for (let i = count; i > 0; i--) {
      rows.push(padRow(i, count));
    }*/

    let result = ""

    for (const row of rows) {
      result = result + "\n" + row;b
    }

    console.log(result);

    again = prompt("Do you want to continue(y or n): ");
}
