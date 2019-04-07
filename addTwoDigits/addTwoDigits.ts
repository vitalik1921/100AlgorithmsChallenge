function addTwoDigits(n: any): number {
    return n
        .toString()
        .split()
        .reduce(
            (acc, curr) => acc + parseInt(curr)
            , 0
        );
}

console.log(addTwoDigits(29));