function findEmailDomain(address: string): string {
    const lastIndex = address.lastIndexOf('@');
    return address.slice(lastIndex + 1);
}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org'));
