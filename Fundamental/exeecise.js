const randomNum = Math.floor(Math.random() * 10);
console.log(randomNum);

let guessNo = Number(prompt("Enter Guess No between 0-10"));
console.log(guessNo);
let attempts = 0;

while (true) {
    if (randomNum === guessNo) {
        console.log("Congratulations! You guessed the correct number.");
        break;
    } else if (randomNum > guessNo) {
        console.log("Your guess is too low.");
    } else {
        console.log("Your guess is too high.");
    }

    guessNo = Number(prompt("Enter your guess (0-9):"));
    attempts++;
}

console.log("You used attempt = ", attempts);
