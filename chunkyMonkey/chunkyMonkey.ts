function chunkyMonkey(arr: any[], size: number): any[][] {
    const result = [];
    let pointer = 0;

    while(pointer < arr.length) {
        result.push(arr.slice(pointer, pointer += size));
    }

    return result;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));