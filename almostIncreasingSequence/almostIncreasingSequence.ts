function almostIncreasingSequence(sequence: number[]): boolean {
    let skipped = 0;
    let wasSkippedOnce = false;
    return sequence.every((val, index) => {
        if (index === 0 || val > sequence[index - 1 - skipped]) {
            skipped = 0;
            return true;
        } else {
            if (wasSkippedOnce) {
                return false;
            } else {
                skipped = 1;
                wasSkippedOnce = true;
                return true;
            }
        }
    });

}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 