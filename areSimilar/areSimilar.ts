function areSimilar(a: number[], b: number[]): boolean {
    const notEqual: number[] = [];

    if (a.toString() === b.toString()) {
        return true;
    }

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            notEqual.push(i);
        }
    } 

    if (notEqual.length === 0) {
        return true;
    } else if (notEqual.length === 2) {
        if (a[notEqual[0]] === b[notEqual[1]] && a[notEqual[1]] === b[notEqual[0]]) {
            return true;
        }
    }

    return false;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
