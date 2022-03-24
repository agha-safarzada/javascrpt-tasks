function reverseSentence(sentence) {
    let arr = sentence.split(' ')
    let newSentence = arr.reverse();

    // for (let i = arr.length - 1; i >= 0; i--) {
    //     newSentence.push(arr[i]);
    // }
    return newSentence
}
console.log(reverseSentence('This is a sample text!'));