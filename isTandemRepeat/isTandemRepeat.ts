function isTandemRepeat(inputString: string): boolean {
    const wordLength = inputString.length;

    if (wordLength % 2 === 0) {
        if (inputString.slice(0, wordLength) === inputString.slice(-wordLength)) {
            return true;
        }
    }

    return false;
}

console.log(isTandemRepeat('tandemtandem'))
console.log(isTandemRepeat('qqq'))
console.log(isTandemRepeat('2w2ww'))
