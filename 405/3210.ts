function getEncryptedString(s: string, k: number): string {

    if (k > s.length) {
        k = k % s.length 
    }

    const split = s.split("") 
    const before = split.splice(0,k)

    return `${split.join('')}${before.join('')}`
};

console.log(getEncryptedString("aaa", 1))