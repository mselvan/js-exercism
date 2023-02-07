//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (numRows) => {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];

  const triangle = [[1], [1, 1]];

  for (let i = 2; i < numRows; i++) {
    const prevRow = triangle[i - 1];
    const currentRow = [1];
    for (let j = 1; j < i; j++) {
      currentRow.push(prevRow[j - 1] + prevRow[j]);
    }
    currentRow.push(1);
    triangle.push(currentRow);
  }

  return triangle;
};
