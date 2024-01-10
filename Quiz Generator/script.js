function main() {

    const Subject1 = [
        "Question1",
        "Question2",
        "Question3",
        "Question4",
        "Question5"
    ];

    function shuffle(array) {
        return function shuffledArray() {
            let currentIndex = array.length, randomIndex;
            
            while (currentIndex !== 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
            }
            return array.slice();
        };
    }

    const func = shuffle(Subject1);
    console.log(func());
    return shuffle;
}

main();

