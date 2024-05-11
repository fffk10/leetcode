function minEnd(n: number, x: number): number {
  const bitX = x.toString(2)

  const f = (left: string, right: string) => {}

  // 4 100
  // 5 101
  // 6 110

  // 4 , 5  100 && 101 100
  // 5 , 6  101 && 110 100

  // 7  0111
  // 15 1111
  // 7 , 15 0111 && 1111 0111

  return 5
}

console.log(minEnd(3, 4))
