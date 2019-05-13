const domainsMap = {
    com: 'commercial',
    org: 'organization',
    net: 'network',
    info: 'information',
};

function domainType(domains: string[]): string[] {
    return domains.map((domain) => {
        const parts = domain.split('.');
        const topLevel = parts[parts.length - 1];
        return domainsMap[topLevel];
    });
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));