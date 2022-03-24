let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let overAverage = [];
let sum = 0;
let result;

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (i === arr.length - 1) {
        result = sum / (i + 1);
    }
}

for (let j = 0; j < arr.length; j++) {
    if (arr[j] > result) {
        overAverage.push(arr[j]);
    }
}

console.log(overAverage);