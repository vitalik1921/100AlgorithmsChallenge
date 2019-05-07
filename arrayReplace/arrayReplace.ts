function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
    return inputArray.map((item) => item === elemToReplace ? substitutionElem : item);
}

console.log(arrayReplace([1, 2, 1], 1, 3));