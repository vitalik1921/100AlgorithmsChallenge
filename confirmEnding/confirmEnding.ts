function confirmEnding(str: string, target: string) {
    return str.slice(str.length - target.length) === target;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "same"));
console.log(confirmEnding("hello", "llo"));