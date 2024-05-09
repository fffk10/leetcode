function addedInteger(nums1: number[], nums2: number[]): number {
  const min1 = nums1.reduce((acc, cur) => (acc > cur ? cur : acc))
  const min2 = nums2.reduce((acc, cur) => (acc > cur ? cur : acc))

  return min2 - min1
}

console.log(addedInteger([2, 6, 4], [9, 7, 5]))
