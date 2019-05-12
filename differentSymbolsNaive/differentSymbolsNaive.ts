function differentSymbolsNaive(s: string): number {
    const sSet = new Set();
    s.split('').forEach((item) => sSet.add(item));
    return sSet.size;
}

console.log(differentSymbolsNaive('cabca'));
