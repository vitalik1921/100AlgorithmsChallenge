function commonCharacterCount(s1: string, s2: string): number {
    const s1Set = new Map();
    s1.split('').forEach((item) => {
        s1Set.set(
            item,
            s1Set.has(item)
                ? s1Set.get(item) + 1
                : 1
        );
    });
    const commonLetters = s2.split('').filter((item) => {
        const count = s1Set.get(item);
        if (s1Set.has(item) && count > 0) {
            s1Set.set(item, count - 1);
            return true;
        } else {
            return false;
        }
    });
    return commonLetters.length;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));
console.log(commonCharacterCount('qwertyyy', 'qwertyyyyghjjk'));