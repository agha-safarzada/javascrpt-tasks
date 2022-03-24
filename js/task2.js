function averageNum() {
    let numberList = prompt('Enter a list of numbers');
    let number = numberList.split(' ');
    let arr_numbers = [];
    let sum = 0;
    let result;
    for (i = 0; i < number.length; i++) {
        arr_numbers.push(Number(number[i]));
        sum += arr_numbers[i];
    }
    result = sum / arr_numbers.length
    console.log(result);
}
averageNum();