function numOfLetters() {
    let word = prompt('Enter a word');
    for (j = 0; j < word.length; j++) {
        let count = 0;
        for (i = 0; i < word.length; i++) {
            if (word[j] === word[i] && j > i) {
                break;
            } else if (word[j] === word[i]) {
                count++;
            }
        }
        if (count > 0) {
            console.log(`The letter ${word[j]} is repeated ${count} times.`);
        }
    }
}
numOfLetters();