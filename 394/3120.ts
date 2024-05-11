function numberOfSpecialChars(word: string): number {
  let count = 0
  let searched: string[] = []

  const letters = word.split('')
  letters.map((letter) => {
    if (searched.includes(letter.toLowerCase())) return
    const isUpper = letter == letter.toUpperCase()
    const searchTarget = isUpper
      ? letter.toLocaleLowerCase()
      : letter.toUpperCase()

    if (letters.includes(searchTarget)) {
      count++
      searched.push(searchTarget.toLowerCase())
    }
  })

  return count
}

console.log(numberOfSpecialChars('abBCab'))
