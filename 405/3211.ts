function validStrings(n: number): string[] {
    const results: string[] = []
    const size = 2 ** n - 1
    let a  = 0b0

    if (n == 1) {
        return ["0", "1"]
    }

    for (let i = 0; i < size; i++) {
        a++
        const temp = (a).toString(2).padStart(n, "0")

        if (!temp.includes("00")) {
            results.push(temp)
        }
    }

    return results
};

console.log(validStrings(3))