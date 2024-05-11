function numberOfSpecialChars(word: string): number {
  let count = 0
  const searched: string[] = []
  const letters = word.split('')

  letters.map((letter) => {
    if (searched.includes(letter.toLowerCase())) {
      return
    }

    const isUpper = letter == letter.toUpperCase()

    if (isUpper) {
      searched.push(letter.toLowerCase())
      return
    }

    const targets: string[] = letters.filter(
      (ele) => ele === letter || ele === letter.toUpperCase()
    )

    if (!targets.includes(letter) || !targets.includes(letter.toUpperCase())) {
      searched.push(letter)
      return
    }

    const separeteFirstIndex = targets.findIndex(
      (target) => target === letter.toUpperCase()
    )

    const children = targets.slice(0, separeteFirstIndex)
    const parents = targets.slice(separeteFirstIndex)

    const isChild = children.every((char) => char === char.toLowerCase())
    const isParent = parents.every((char) => char === char.toUpperCase())

    if (isChild && isParent) {
      count++
    }

    searched.push(letter)
  })

  return count
}

console.log(numberOfSpecialChars('bEbdBbc'))
