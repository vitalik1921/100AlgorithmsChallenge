function houseOfCats(legs: number): number[] {
    const possiblePeoples = legs / 2;
    const res = [];

    for(let p = 1; p <= possiblePeoples; p++) {
        if ((legs - p*2) % 4 === 0) {
            res.push(p);
        }
    }

    return res;
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));
