function flattenArray(arr: any[]): any[] {
    return arr.reduce((acc, cur) => {
        if (typeof cur === 'object') {
            acc = acc.concat(flattenArray(cur))
        } else {
            acc.push(cur);
        }
        return acc;
    }, []);
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
