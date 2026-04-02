/*
Given an array of ints, return true if one of the first 4 elements in the array is a 9.
 The array length may be less than 4.
*/

function arrayFront9(nums){
  let ans = false;
  for (let i = 0; i < Math.min(nums.length, 4); i++) {
    let currentNumber = nums[i];
    if (currentNumber == 9) {
        ans = true;
        break;
    }
  }

  return ans;
}

console.log(arrayFront9([0,0,9,9]));
console.log(arrayFront9([0,0,0,0]));
console.log(arrayFront9([0,1,1]));