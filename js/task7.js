function sameWords() {
    let arr1 = ["Salam", "Hello", "Merhaba", "Konichiwa"];
    let arr2 = ["Sagol", "Bye", "Merhaba", "Konichiwa"];
    let result = [];
    for (let j = 0; j < arr2.length; j++) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr2[j] === arr1[i]) {
                result.push(arr2[i]);
            }
        }
    }
    return result;
}
console.log(sameWords());