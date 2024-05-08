function isValid(word: string): boolean {
  const chars = word.split('')

  if (chars.length < 3) return false

  if (!chars.every((char) => char.match(/[0-9a-z]/i))) return false

  if (!chars.some((char) => char.match(/[aiueo]/i))) return false

  if (!chars.some((char) => char.match(/[bcdfghjklmnpqrstvwxyz]/i)))
    return false

  return true
}

console.log(isValid('IMG'))
