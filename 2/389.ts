function findTheDifference(s: string, t: string): string {
  const S = s.split('')
  const T = t.split('')

  if (S.length === 0) return T[0]

  for (let i = 0; i < S.length; i++) {
    const index = T.findIndex((char) => char === S[i])
    if (index !== -1) {
      T.splice(index, 1)
    }
  }

  return T[0]
}

console.log(findTheDifference('abcd', 'abcde'))
