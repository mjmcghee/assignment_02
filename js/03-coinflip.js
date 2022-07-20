function whatSide(coinFlip,choice) {
    if (coinFlip <= 100 && choice.toLowerCase() === "heads") {
        document.write("The flip was heads and you chose heads...you win!");
    } else if (coinFlip <= 100 && choice.toLowerCase() === ("tails")) {
        document.write("The flip was heads and you chose tails...you lose!");
    } else if (coinFlip >= 100 && choice.toLowerCase() === ("heads")) {
        document.write("The flip was tails and you chose heads...you lose!");
    } else if (coinFlip >= 100 && choice.toLowerCase() === ("tails")) {
        document.write("The flip was tails and you chose tails...you win!");
    } else {
            randomNum = coinFlip
            userInput = prompt("Please type either Heads or Tails!");
            whatSide(randomNum,userInput)
    }
}

let randomNum = Math.round(Math.random());
let userInput = prompt("Heads or Tails?");

whatSide(randomNum,userInput)