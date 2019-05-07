function boxBlur(image: number[][]): number[][] {
    const allValues = [...image[0], ...image[1], ...image[2]];
    const pixelValue = Math.floor(
        allValues.reduce((acc, cur) => acc + cur) / allValues.length
    );

    for (let n = 0; n < image.length; n++) {
        const row = image[n];
        for (let i = 0; i < row.length; i++) {
            row[i] = pixelValue;
        }
    }

    return image;
}

console.log(boxBlur([[1, 1, 1],
[1, 7, 1],
[1, 1, 1]]));