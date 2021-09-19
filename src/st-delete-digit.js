import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const arr = [];
  const splited = String(n).split("");

  for (let i = 0; i < splited.length; i += 1) {
    arr.push(Number([...splited.slice(0, i), ...splited.slice(i + 1)]
        .join("")))
  }

  return Math.max(...arr);
}
