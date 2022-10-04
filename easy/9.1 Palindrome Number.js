// https://leetcode.com/problems/palindrome-number/

function isPalindrome(num) {
    if (num < 0) 
        return false;
    let reversed = 0, remainder, original = num;
    while (num != 0) {
        remainder = num % 10;
        reversed = reversed * 10 + remainder;
        num = Math.floor(num/10);
    }
    return original === reversed;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));

