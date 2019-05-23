function htmlEndTagByStartTag(startTag: string): string {
    const attrs = startTag.replace(/<(.*)>/, '$1').split(' ');
    return `</${attrs[0]}>`'

}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'))