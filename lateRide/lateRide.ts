function lateRide(n: number): number {
    const hours = parseInt(String(n / 60));
    const minuses = n % 60;
    const time = hours.toString() + minuses.toString();
    return time
        .split('')
        .reduce((acc, cur) => acc + parseInt(cur), 0);
}

console.log(lateRide(240));
console.log(lateRide(808));
