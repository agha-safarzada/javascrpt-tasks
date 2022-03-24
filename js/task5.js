function commaJoin(sentence) {
    let arr = sentence.split(' ')
    let newSentence = ""
    for (let i = 0; i < arr.length; i++) {
        newSentence += arr[i]
        if (i < arr.length - 1) {
            newSentence += ","
        }
    }
    return newSentence
}
console.log(commaJoin('This is a sample text!'));