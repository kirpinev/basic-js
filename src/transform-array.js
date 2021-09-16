import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const arrCopy = [...arr];

  for (let i = 0; i < arrCopy.length; i += 1) {
    switch (arrCopy[i]) {
      case '--discard-next':
        if (arrCopy[i + 1] !== undefined && arrCopy[i + 1] === arr[i + 1]) {
          arrCopy[i] = null;
          arrCopy[i + 1] = null;
        } else {
          arrCopy[i] = null;
        }

        break;
      case '--discard-prev':
        if (arrCopy[i - 1] !== undefined && arrCopy[i - 1] === arr[i - 1]) {
          arrCopy[i] = null;
          arrCopy[i - 1] = null;
        } else {
          arrCopy[i] = null;
        }

        break;
      case '--double-next':
        if (arrCopy[i + 1] !== undefined && arrCopy[i + 1] === arr[i + 1]) {
          arrCopy[i] = arrCopy[i + 1];
        } else {
          arrCopy[i] = null;
        }

        break;
      case '--double-prev':
        if (arrCopy[i - 1] !== undefined && arrCopy[i - 1] === arr[i - 1]) {
          arrCopy[i] = arrCopy[i - 1];
        } else {
          arrCopy[i] = null;
        }

        break;
    }
  }

  return arrCopy.filter(number => number !== null);
}
