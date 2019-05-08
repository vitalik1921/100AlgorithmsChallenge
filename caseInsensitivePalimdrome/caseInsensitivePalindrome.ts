function isCaseInsensitivePalindrome(inputString: string): boolean {
    const lowerString = inputString.toLocaleLowerCase();
    const reversedString = lowerString.split('').reverse().join('');
    return lowerString === reversedString;
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));