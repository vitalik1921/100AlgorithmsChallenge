function firstNotRepeatingCharacter(s: string): string {
    const uMap = {};

    for (let c of s) {
        if (uMap.hasOwnProperty(c)) {
            uMap[c] += 1;
        } else {
            uMap[c] = 1;
        }
    }

    for (let [key, value] of Object.entries(uMap)) {
        if (value === 1) {
            return key;
        }
    }

    return "_";
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
