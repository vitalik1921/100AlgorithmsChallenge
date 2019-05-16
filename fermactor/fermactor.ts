function fermactor(n: number): number[] {
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < i; j++) {
            if (i ** 2 - j ** 2 === n) {
                return [i, j];
            }
        }
    } 

    return null;
}

console.log(fermactor(15));