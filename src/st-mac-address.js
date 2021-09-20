import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(inputString) {
  const splitedString = inputString.split("-");

  if (splitedString.length !== 6) {
    return false;
  }

  for (let i = 0; i < splitedString.length; i += 1) {
    const string = splitedString[i].split("");

    if (string.length !== 2) {
      return false;
    }

    if (isNaN(+string[0]) && string[0].charCodeAt(0) > 70
        || isNaN(+string[1]) && string[1].charCodeAt(0) > 70) {
      return false;
    }
  }

  return true;
}
