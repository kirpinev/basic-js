import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  const arr = [];
  let newL = "";
  let count = 0;

  [...str].forEach(letter => {
    if (letter === newL) {
      count += 1;
    }

    if (newL.length !== 0 && newL !== letter) {
      arr.push(`${count > 1 ? count : ""}${newL}`);

      newL = letter;
      count = 1;
    }

    if (newL.length === 0 && newL !== letter) {
      newL = letter;
      count += 1;
    }
  })

  arr.push(`${count > 1 ? count : ""}${newL}`);

  return arr.join("");
}
