import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length - i; j += 1) {
      if (arr[j] !== -1 && arr[j + 1] === -1) {
        let count = j + 1;
        let a = arr[j];
        let b = arr[j + 1];

        while (b === -1 && b !== undefined) {
          count += 1;
          b = arr[count];
        }

        if (arr[j] > arr[count]) {
          arr[j] = b;
          arr[count] = a;
        }
      } else if (arr[j] !== -1 && arr[j] > arr[j + 1]) {
        let count = j + 1;
        let a = arr[j];
        let b = arr[j + 1];

        if (b === -1) {
          while (b === -1 && b !== undefined) {
            count += 1;
            b = arr[count];
          }

          arr[j] = b;
          arr[count] = a;
        } else {
          arr[j]  = b;
          arr[j + 1] = a;
        }
      }
    }
  }

  return arr;
}
