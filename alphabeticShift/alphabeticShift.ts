function alphabeticShift(inputString: string): string {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return inputString
        .split('')
        .map((char) => {
            const newIndex = alphabet.findIndex((item) => item === char) + 1;
            return newIndex > (alphabet.length - 1)
                ? alphabet[0]
                : alphabet[newIndex];
        })
        .join();
}

console.log(alphabeticShift('crazy'));