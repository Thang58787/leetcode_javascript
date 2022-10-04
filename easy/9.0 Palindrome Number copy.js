// https://leetcode.com/problems/palindrome-number/

function isPalindrome(num) {
    let original = String(num);
    let reversed = String(original).split("").reverse().join("");
    return original === reversed;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));

