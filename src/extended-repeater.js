import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  const objWithOptions = {
    separator: '+',
    addition: 'empty',
    additionSeparator: '|',
    repeatTimes: 1,
    additionRepeatTimes: 1,
    ...options
  }
  let addition = "";
  let res;

  if (objWithOptions.addition !== 'empty' && objWithOptions.additionRepeatTimes !== 'empty') {
    const arr = [];

    for (let i = 0; i < objWithOptions.additionRepeatTimes; i += 1) {
      arr.push(String(objWithOptions.addition));
    }

    addition = arr.join(objWithOptions.additionSeparator);
  }

  if (objWithOptions.repeatTimes !== 'empty') {
    const arr = [];

    for (let i = 0; i < objWithOptions.repeatTimes; i += 1) {
      arr.push(`${String(str)}${addition}`)
    }

    res = arr;
  }

  return res.join(objWithOptions.separator);
}
