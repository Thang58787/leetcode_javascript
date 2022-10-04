// https://leetcode.com/problems/roman-to-integer/

function romanToInt(s) {
    var obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let array = s.split("");
    let start = 0;
    let end = array.length - 1;
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        array[i] = obj[array[i]];
    }
    for (let i = 1; i < array.length; i++) {
        if(array[i - 1] >= array[i]) {
            result += array[i - 1];
        } else {
            result -= array[i - 1];
        }       
    }
    return result + array[end];
}

console.log(romanToInt("III") === 3);
console.log(romanToInt("LVIII") === 58);
console.log(romanToInt("MCMXCIV") === 1994);
