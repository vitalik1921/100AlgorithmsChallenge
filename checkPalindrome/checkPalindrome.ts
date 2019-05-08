function checkPalindrome(inputString: string): boolean {
    const reversedString = inputString.split('').reverse().join('');
    return inputString === reversedString;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
