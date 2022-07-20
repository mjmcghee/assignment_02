// ********** “Hitchhiker’s Guide to the Galaxy” **********

function gameStart() {
    if (confirm("Are you ready to play the game?") != true) {
        alert("Thank you for playing. Please play again sometime~!");
    } else {
        // return;
        playGame();
        rateGame();
    }
}

function playGame() {
    alert("You are in a dark, dingy, and humid cave searching for the "
    + "lost treasure of Captain Chingadera. You are disoriented, lost, "
    + "hungry and extremely thirsty. You see a speck of light in the "
    + "distance ahead of you, something shimmering to your right, and "
    + "the sound of running water to your left. Your back is against the "
    + "wall.");
    moveDir = prompt("Which direction would you like to head (please enter forward, left, or right).");
    switch(moveDir.toLowerCase()) {
        case "forward":
            alert("Your thirst has gotten the better of you. "
            + "You trip on a rock, hit your head, and fall "
            + "into a pool of water and drown!");
            break;
        case "left":
            alert("You walk 100 yards and safely make "
            + "your way out of the cave.");
            break;
        case "right":
            alert("You found the gold! You walk into a small "
            + "room and see thousands of gold coins, jewels, chalices, "
            + "and more. You jump into the pile of gold in celebration "
            + "and immediately a hidden door slams down and traps you in "
            + "the room forever!");
            break;
        default:
            alert("The ghost of Captain Chingadera has condemned you "
            + "to eternal damnation and you shall now burn in the "
            + "hot excoriation for lifeless lowlifes for not choosing the correct option.");
    }
    alert("Game over man! GAME OVER!");
    // break;
}

function rateGame() {
    rating = parseInt(prompt("Please rate the game between 1 (bad) "
    + "and 10 (great!)"))
    if (isNaN(rating)) {
        alert("Please select a number between 1-10!");
        rateGame()
    } else if (+rating < 1 || +rating > 10) {
        alert("Thanks for playing!");
    } else if (+rating >= 6 && +rating <= 10) {
        alert("Thanks for the rating! Please play again soon!");
    } else if (+rating < 6 && +rating > 0) {
        alert("Thank you for being honest. We are working hard to "
        + "improve the game.");
    } 
}

gameStart();