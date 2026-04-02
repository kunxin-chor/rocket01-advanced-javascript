/*
Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array 
somewhere.
*/
function array123(nums){
  let ans = false;
  for (let i =0; i < nums.length; i++) {
    // if i is at the last 2 index, break
    if (i == nums.length - 1) {
        break;
    }

    if (nums[i]==1 && nums[i+1] == 2 && nums[i+2] == 3 ) {
        ans = true;
        break;
    }
  }
  return ans;
}

let test1 = [1,2,3,4,5,6];
let test2 = [4,5,1,2,3,5,7];
let test3 = [4,5,6,1,2,3];
let test4 = [1,2,4,5,1,2,6];
let test5 = [4,5,6,1,2];

console.log(array123(test1));
console.log(array123(test2));
console.log(array123(test3));
console.log(array123(test4));
console.log(array123(test5));