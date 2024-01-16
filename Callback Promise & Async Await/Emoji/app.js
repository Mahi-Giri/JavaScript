const EmojiDetails = [
    {
        description: "Attitude",
        emoji: '😎',
    },
    {
        description: "Thumbsup",
        emoji: '👍',
    },
    {
        description: "Heart Eyes",
        emoji: '😍',
    },
    {
        description: "Crying Face",
        emoji: '😢',
    },
    {
        description: "Party Popper",
        emoji: '🎉',
    },
];

const guess_input = document.querySelector('#guess-input');
const result = document.querySelector('#result');
const score_div = document.querySelector('#score');

let currIndex = 0;
let score = 0;

function displayEmoji() {
    const description = document.querySelector('#description');
    description.textContent = EmojiDetails[currIndex].emoji;
}

function checkGuess() {
    const guess = guess_input.value.trim().toLowerCase();
    const correctEmoji = EmojiDetails[currIndex].description.trim().toLowerCase();

    if (guess == correctEmoji) {
        result.textContent = 'Correct!';
        score++;
    } else {
        result.textContent = 'Wrong!';
    }

    score_div.textContent = `Score: ${score}/${EmojiDetails.length}`;
    guess_input.value = '';
    guess_input.focus();
    nextEmoji();
}

function nextEmoji() {
    currIndex++;

    if (currIndex === EmojiDetails.length) {
        currIndex = 0;
    }

    displayEmoji();
}

guess_input.addEventListener('keyup', (event) =>{
    if (event.key == 'Enter') {
        checkGuess();
    }
});

document.addEventListener('DOMContentLoaded',() =>{
    displayEmoji();
});