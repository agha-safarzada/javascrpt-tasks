function averageNum() {
    let numberList = prompt('Enter a list of numbers');
    let number = numberList.split(' ');
    let arr_numbers = [];
    let sum = 0;
    for (i = 0; i < number.length; i++) {
        arr_numbers.push(Number(number[i]));
        sum += arr_numbers[i];
    }
    console.log(sum / arr_numbers.length);
}
averageNum();