function add(...params: number[]): number {
    return params.reduce((acc, cur) => acc + cur, 0);
}

// function add2(param1: number[]): number {

// }
console.log(add(1, 2));
console.log(add(3, 2)); 

console.log(add(1,2,3,4,5));
console.log(add(2,3));
