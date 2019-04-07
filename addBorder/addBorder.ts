function addBorder(picture: string[]): string[] {
    const imageWidth = picture[0].length + 2;
    const hrBorder = new Array(imageWidth).fill('*').join('');

    picture = picture.map((str) => `*${str}*`);

    picture.unshift(hrBorder);
    picture.push(hrBorder);
    
    return picture;
}

console.log(addBorder(["abc", "ded"]));