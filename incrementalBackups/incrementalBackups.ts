function incrementalBackups(lastBackupTime: number, changes: number[][]): number[] {
    const res = new Set();

    for (const c = 0; c < changes.length; c++) {
        if (changes[c][0] > lastBackupTime) {
            res.add(changes[c][1]);
        }
    }

    return Array.from(res);
}

console.log(incrementalBackups(461620205, [[461620203, 1], 
    [461620204, 2], 
    [461620205, 6],
    [461620206, 5], 
    [461620207, 3], 
    [461620207, 5], 
    [461620208, 1]]));
