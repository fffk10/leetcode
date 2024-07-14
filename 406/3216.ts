const sameParity = (left: string, right: string) => {
  if (Number(left) % 2 == 1 && Number(right) % 2 == 1) return true;
  if (Number(left) % 2 == 0 && Number(right) % 2 == 0) return true;

  return false;
};

function getSmallestString(s: string): string {
  let ans = BigInt(s);
  const split = s.split("");
  const length = split.length;

  for (let i = 0; i < split.length - 1; i++) {
    if (sameParity(split[i], split[i + 1])) {
      const temp = [...split];
      [temp[i], temp[i + 1]] = [temp[i + 1], temp[i]];
      const result = BigInt(temp.join(""));
      if (ans == 0n || ans > result) {
        ans = result;
      }
    }
  }

    const str = ans.toString()
    const strAns =  str.length == length ? str : str.padStart(length, '0')
  
  return strAns
}

console.log(getSmallestString("13"));
