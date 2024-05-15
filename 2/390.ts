const left = (arr: number[]) => {
  let result: number[] = []
  let size = arr.length
  for (let i = 1; i < size; i = i + 2) {
    result.push(arr[i])
  }

  return result
}

const right = (arr: number[]) => {
  let result: number[] = []
  for (let i = arr.length - 2; i >= 0; i = i - 2) {
    result.unshift(arr[i])
  }

  return result
}

function lastRemaining(n: number): number {
  let arr: number[] = Array.from({ length: n }, (_, index) => index + 1)

  let oddFlag = true
  while (arr.length > 1) {
    if (oddFlag) {
      arr = left(arr)
    } else {
      arr = right(arr)
    }

    if (arr.length == 2) {
      if (!oddFlag) {
        arr.shift()
        break
      } else {
        arr.pop()
        break
      }
    }

    oddFlag = !oddFlag
  }

  return arr[0]
}

console.log(lastRemaining(12))
// [1,2,3,4,5,6,7,8,9,10,11,12]
// [2,4,6,8,10,12]
