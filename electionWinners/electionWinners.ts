function electionsWinners(votes: number[], k: number): number {
    const curWinner = Math.max(...votes);
    return votes
        .filter((item) => (item + k) > curWinner).length;
}

console.log(electionsWinners([2, 3, 5, 2], 3));