let numbers = [11, 4, -10, 3, 77, 81, 15];
for (let i = 0; i < numbers.length; i++) {
    for (let j = i; j < numbers.length; j++) {
        if (numbers[i] > numbers[j]) {
            // swap two numbers in an array
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}
console.log(numbers);