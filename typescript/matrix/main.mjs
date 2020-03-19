import { printMatrix } from './modules/matrix-print.mjs';
import { rotateMatrix } from './modules/rotate-matrix.mjs';

/** Consts */
const matrix = [[]];
for(let i = 0; i < 5; i++) {
  matrix[i] = [];
  let index = 1;
  for (let j = 0; j < 5; j++) {
    matrix[i][j] = index;
    index++;
  }
}
printMatrix(matrix);

/** Rotate Matrix */
rotateMatrix(matrix);
console.log('------- Result Rotate ------');
printMatrix(matrix);


