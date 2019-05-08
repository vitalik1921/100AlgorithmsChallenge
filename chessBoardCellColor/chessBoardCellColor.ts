function chessBoardCellColor(cell1: string, cell2: string): boolean {

    const xAxis = {
        'A': 1,
        'B': 2,
        'C': 3,
        'D': 4,
        'E': 5,
        'F': 6,
        'G': 7,
        'H': 8
    };

    const getColor = (x, y) => {
        const xEven = x % 2 === 0;
        const yEven = y % 2 === 0;

        if (!xEven && !yEven || xEven && yEven) {
            return 'black';
        } else {
            return 'white';
        } 
    }

    const cell1X = xAxis[cell1[0]]
    const cell1Y = parseInt(cell1[1]);
    const cell2X = xAxis[cell2[0]]
    const cell2Y = parseInt(cell2[1]);

    return getColor(cell1X, cell1Y) === getColor(cell2X, cell2Y);
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
console.log(chessBoardCellColor('D4', 'F7'));
console.log(chessBoardCellColor('D4', 'F8'));
