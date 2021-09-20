import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  return matrix.map((arr, arrIndex) => arr.reduce((acc, curr, numIndex) => {
    if (matrix[arrIndex - 1] === undefined) {
      return acc + curr
    } else if (matrix[arrIndex - 1] !== undefined && matrix[arrIndex - 1][numIndex] !== 0) {
      return  acc + curr
    } else {
      return acc + 0;
    }
  }, 0)).reduce((acc, curr) => acc + curr, 0)
}
