function findKthSmallest(coins: number[], k: number): number {
  const set = new Set<number>()

  coins.map((coin) => {
    for (let i = 1; i <= k; i++) {
      set.add(coin * i)
    }
  })

  const result = [...set].sort((a, b) => a - b)

  return result[k - 1]
}

console.log(findKthSmallest([6, 5], 1435065516))
