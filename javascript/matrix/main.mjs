import { printMatrix } from './modules/matrix-print.mjs';
import { rotateMatrix } from './modules/rotate-matrix.mjs';
import { spiralPrint } from './modules/spiral-print.mjs';

/** Consts */
const matrix = [[]];

let index = 1;
for(let i = 0; i < 5; i++) {
  matrix[i] = [];
  for (let j = 0; j < 5; j++) {
    matrix[i][j] = index;
    index++;
  }
}
printMatrix(matrix);

/** Rotate Matrix */
// rotateMatrix(matrix);
// console.log('------- Result Rotate ------');
// printMatrix(matrix);

/** Spiral print */
console.log('------- Result Spiral Print ------');
spiralPrint(matrix);

