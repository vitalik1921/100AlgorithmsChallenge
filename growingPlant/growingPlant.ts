function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {
    if (downSpeed >= upSpeed) {
        return null;
    }

    let curHeight = 0;
    let curDay = 0;

    while(curHeight < desiredHeight) {
        curHeight += upSpeed;
        if (curHeight < desiredHeight) {
            curHeight -= downSpeed;
        }
        curDay++;
    }

    return curDay;
}

console.log(growingPlant(100, 10, 910))