// Given an array of ints, return the number of 9's in the array.
// How to spot a reducing problem:
// Given an array, get ONE value from the array
// 1. average of [3,4,5]
// 2. find the sum of [11, 22, 33]
// 3. find the smallest number in an array

function arrayCount9(nums) {

    // 1. define an accumulator (which will hold the correct answer AFTER the loop)
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        // 2. for each round of the loop, find a way to change `ans`
        // so that when the loop ends `ans` will hold correct answer
        let currentNumber = nums[i];
        if (currentNumber == 9) {
            ans = ans + 1;
        }
        
    }
    // when the for loop, `ans` will hold the current count
    return ans;
}

console.log(arrayCount9([1, 2, 9, 3, 9]));