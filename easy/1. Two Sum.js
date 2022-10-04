// https://leetcode.com/problems/two-sum/

// !FIX ME
function twoSum(nums, target) {
    let output = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) 
                output.push(i, j);
                return output;
        }
    }
    return false;
}

nums = [3, 2, 4];
target = 6;
console.log(twoSum(nums, target));
