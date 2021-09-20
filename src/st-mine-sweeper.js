import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  return matrix.map((arr, arrIndex, arrArray) => arr.map((mine, mineIndex, mineArray) => {
    if (mine) {
      return 1;
    }

    if (!mine) {
      let count = 0;

      if (arrArray[arrIndex - 1] && arrArray[arrIndex - 1][mineIndex]) {
        count += 1;
      }

      if (arrArray[arrIndex - 1] && arrArray[arrIndex - 1][mineIndex + 1]) {
        count += 1;
      }

      if (mineArray[mineIndex + 1]) {
        count += 1;
      }

      if (arrArray[arrIndex + 1] && arrArray[arrIndex + 1][mineIndex + 1]) {
        count += 1;
      }

      if (arrArray[arrIndex + 1] && arrArray[arrIndex + 1][mineIndex]) {
        count += 1;
      }

      if (arrArray[arrIndex + 1] && arrArray[arrIndex + 1][mineIndex - 1]) {
        count += 1;
      }

      if (mineArray[mineIndex - 1]) {
        count += 1;
      }

      if (arrArray[arrIndex - 1] && arrArray[arrIndex - 1][mineIndex - 1]) {
        count += 1;
      }

      return count;
    }
  }))
}
