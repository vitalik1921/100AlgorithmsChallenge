function depositProfit(deposit: number, rate: number, threshold: number): number {
    let sum = deposit;
    let years = 0;

    while(sum <= threshold) {
        sum += sum / 100 * 20;
        years++;
    }

    return years;
}

console.log(depositProfit(100, 20, 170))