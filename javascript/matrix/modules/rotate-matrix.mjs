export const rotateMatrix = m => {
  const length = m.length - 1;
  // const ll = m.length-1;
  for (let i = 0; i < length/2; i++) {
    for (let j = i; j < length - i; j++) {
      
      const temp = m[i][j];
      m[i][j] = m[j][length-i];
      m[j][length-i] = m[length-i][length-j];
      m[length-i][length-j] = m[length-j][i];
      m[length-j][i] = temp;
    }
  }
}