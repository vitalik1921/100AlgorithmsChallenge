function incorrectPasscodeAttempts(passcode: string, attempts: string[]): boolean {
    let attemptsCount = 0;
    for (const n = 0; n < attempts.length; n++) {
        if (attemptsCount > 9) {
            return true;
        }
        attemptsCount = attempts[n] !== passcode
            ? attemptsCount + 1
            : 0;
    }

    return false;
}

console.log(incorrectPasscodeAttempts('1111', ["1111", "4444", "9999", "3333", "8888", "2222", "7777", "0000", "6666", "7285", "5555", "1111"]));
console.log(incorrectPasscodeAttempts('1111', ["1111", "4444", "9999", "3333", "8888","7777", "0000", "6666", "7285", "5555", "1111"]));