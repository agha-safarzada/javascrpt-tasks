function sameLetter(arr, letter) {
    let result = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i][0] === letter) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(sameLetter(['hello', 'world', 'how', 'are', 'you?'], 'h'));