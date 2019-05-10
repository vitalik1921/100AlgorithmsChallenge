function containsDuplicates(a: number[]): boolean {
    a.sort((a, b) => a - b);
    for (let n = 1; n < a.length; n++) {
        if (a[n] === a[n-1]) {
            return true;
        }
    }
    return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
