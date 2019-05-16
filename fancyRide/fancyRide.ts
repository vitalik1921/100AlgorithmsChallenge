function fancyRide(l: number, fares: number[]): string {
    const cars = ['UberX', 'UberXL', 'UberPlus', 'UberBlack', 'UberSUV'];
    let yourCar = null;

    for (let i = 0; i < fares.length; i++) {
        if (fares[i] * l < 20) {
            yourCar = cars[i];
        } else {
            return yourCar;
        }
    }

    return yourCar;
}

console.log(fancyRide(30, [0.3, 0.4, 0.7, 1, 1.3]));