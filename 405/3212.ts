function numberOfSubmatrices(grid: string[][]): number {
  let count = 0;

  grid.map((row) => {
    let xCount = 0;
    let yCount = 0;
    row.map((char) => {
      if (char == "X") xCount++;
      if (char == "Y") yCount++;
    });

    if (xCount < 1) return 
    if (xCount != yCount) return

    count += row.length
  });

  return count;
}

console.log(
  numberOfSubmatrices([
    ["X", "Y", "."],
    ["Y", ".", "."],
  ])
);
