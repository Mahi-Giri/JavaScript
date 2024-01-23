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
const description = document.querySelector('#description');

let currIndex = 0;
let score = 0;
let sec = 30;

function displayEmoji() {
    description.textContent = EmojiDetails[currIndex].emoji;
    document.querySelector('.timer').textContent = `Remaining Game Time: ${sec}`;
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

guess_input.addEventListener('keyup', (event) => {
    if (event.key == 'Enter') {
        checkGuess();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    displayEmoji();
    timer();
});
function timer() {
    const timer = setInterval(() => {
        sec--;
        document.querySelector('.timer').textContent = `Remaining Game Time: ${sec}`;

        if (sec <= 0) {
            document.querySelector('#heading').textContent = `Game Over`;
            score_div.textContent = `Your Score: ${score}`
            description.style.display = 'none';
            result.style.display = 'none';
            guess_input.style.display = 'none';
            clearInterval(timer);
        };
    }, 1000);
}