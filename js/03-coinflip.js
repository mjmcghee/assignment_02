function whatSide(coinFlip,choice) {
    if (coinFlip == 1 && choice.toLowerCase() === "heads") {
        document.write("The flip was heads and you chose heads...you win!");
    } else if (coinFlip == 1 && choice.toLowerCase() === "tails") {
        document.write("The flip was heads and you chose tails...you lose!");
    } else if (coinFlip == 0 && choice.toLowerCase() === "heads") {
        document.write("The flip was tails and you chose heads...you lose!");
    } else if (coinFlip == 0 && choice.toLowerCase() === "tails") {
        document.write("The flip was tails and you chose tails...you win!");
    } else {
            randomNum = coinFlip
            userInput = prompt("Please type either Heads or Tails!");
            whatSide(randomNum,userInput)
    }
}

let randomNum = Math.round(Math.random());
let userInput = prompt("Heads or Tails?");
console.log(randomNum)

whatSide(randomNum,userInput)