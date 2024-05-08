function findKthSmallest(coins: number[], k: number): number {
  const results: number[][] = []

  coins.map((coin) => {
    const sums: number[] = []
    for (let i = 1; i <= k; i++) {
      sums.push(coin * i)
    }
    results.push(sums)
  })

  const set = new Set<number>()
  results.map((result) => set.add([...result]))

  return set[k - 1]
}

console.log(findKthSmallest([6, 5], 1435065516))
