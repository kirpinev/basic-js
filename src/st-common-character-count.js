import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let counter = 0;

  for (let i = 0; i < s1.length; i += 1) {
    if (s2.length !== 0 && s2.includes(s1[i])) {
      let letter = s1[i];

      s2 = s2.replace(letter, '');
      s1 = s1.replace(letter, '');

      counter += 1;

      i = -1;
    }
  }

  return counter;
}
