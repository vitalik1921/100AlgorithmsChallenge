function bishopAndPawn(bishop: string, pawn: string): boolean {
    const chessX = 'abcdefgh'.split('');

    function getXIndex(crd) {
        return chessX.findIndex((item) => item === crd[0]) + 1;
    }

    const bishopX = getXIndex(bishop);
    const bishopY = parseInt(bishop[1]);
    const pawnX = getXIndex(pawn);
    const pawnY = parseInt(pawn[1]);

    return Math.abs(bishopX - pawnX) === Math.abs(bishopY - pawnY);
}

console.log(bishopAndPawn('a1', 'c3'));
console.log(bishopAndPawn('e4', 'h1'));
console.log(bishopAndPawn('h1', 'a8'));