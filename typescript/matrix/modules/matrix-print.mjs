

export const printMatrix = (m) => {

  for (let i = 0; i < m.length; i++) {
    let row = ''
    for (let j = 0; j < m[0].length; j ++) {
      row = m[i][j] < 10 ? `${row} ${m[i][j]}  ` : `${row} ${m[i][j]} `;
    }
    console.log(row);
  }
}