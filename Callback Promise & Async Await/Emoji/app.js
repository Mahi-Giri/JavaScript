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

displayEmoji();

function checkGuess() {
    const guess = guess_input.value.trim().toLowerCase();
    const correctEmoji = EmojiDetails[currIndex].description.trim().toLowerCase();

    if (guess == correctEmoji) {
        score++;
        guess_input.value = '';
        result.textContent = 'Correct!';
        currIndex++;
        displayEmoji();
    } else {
        guess_input.value = '';
        result.textContent = 'Wrong!';
        currIndex++;
        displayEmoji();
    }

    if (currIndex == EmojiDetails.length) {
        // clearInterval(timer);
        result.textContent = 'You Win!';
    }
    score_div.textContent = `Score: ${score}/${EmojiDetails.length}`;
}
