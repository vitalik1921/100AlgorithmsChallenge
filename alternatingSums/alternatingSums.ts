function alternatingSums(a: number[]): number[] {
    const sums = [0, 0];
    for (let i = 0; i < a.length; i++) {
        const isEven = (i % 2) === 0;
        if (isEven) {
            sums[0] += a[i];
        } else {
            sums[1] += a[i];
        }
    }
    return sums;
}

console.log(alternatingSums([50, 60, 60, 45, 70]))