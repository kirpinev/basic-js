import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  const arrCopy = [...names];

  for (let i = 0; i < arrCopy.length; i += 1) {
    const arr = arrCopy.slice(0, i);

    for (let j = 0; j < arr.length; j += 1) {
      if (arrCopy[i] === arr[j] && arrCopy[i] === names[i] && arrCopy[i].match(/\(\d\)/g)) {
        arrCopy[i] = `${arrCopy[i]}(1)`;
      }

      if (arrCopy[i] === arr[j] && arrCopy[i] !== names[i] && arrCopy[i].match(/\(\d\)/g)) {
        arrCopy[i] = arrCopy[i].replace(/\(\d\)$/, (n) => {
          return `(${Number(n.split("")[1]) + 1})`;
        })
      }

      if (arrCopy[i] === arr[j]) {
        arrCopy[i] = `${arrCopy[i]}(1)`;
      }
    }
  }

  return arrCopy;
}
