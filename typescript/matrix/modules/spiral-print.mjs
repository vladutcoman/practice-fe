export const spiralPrint = (m, start = 0, result = '') => {
  const length = m.length;
  let indexCol;
  let indexRow;
  const i = start;
  // for (let i = 0; i < length/2; i++) {
  indexCol = i;
  indexRow = i;
  while (indexCol < length - i) {
    result += `${m[indexRow][indexCol]}, `;
    indexCol++;
  }
  indexCol = indexCol - 1;
  indexRow = i + 1;
  while (indexRow < length - i) {
    result += `${m[indexRow][indexCol]}, `;
    indexRow++;
  }
  indexCol = indexCol - 1;
  indexRow = indexRow - 1;
  while (indexCol >= i) {
    result += `${m[indexRow][indexCol]}, `;
    indexCol--;
  }
  indexCol++;
  indexRow = indexRow - 1;
  while (indexRow >= i + 1) {
    while (indexRow > i) {
      result += `${m[indexRow][indexCol]}, `;
      indexRow--;
    }
  }
  // }
  // console.log(result);
  if (start <= length/2) {
    spiralPrint(m, start+1, result);
  } else {
    console.log(result);
  }
  
}
