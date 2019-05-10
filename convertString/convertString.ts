function convertString(s: string, t: string): boolean {
    const sMap = new Map();
    let lastIdx = -1;
    for (let i = 0; i < s.length; i++) {
        if (sMap.has(s[i])) {
            const idxs = sMap.get(s[i]);
            idxs.push(i);
            sMap.set(s[i], idxs);
        } else {
            sMap.set(s[i], [i]);
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (sMap.has(t[i])) {
            const idxs = sMap.get(t[i]);
            const next = idxs.filter((item) => item > lastIdx);
            if (next.length) {
                lastIdx = next[0];
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    return true;
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
