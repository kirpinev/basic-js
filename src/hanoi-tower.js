import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
// export default function calculateHanoi(disks, turnsSpeed) {
//   const turns = Math.pow(2, disks) - 1;
//   let seconds = (turns / (turnsSpeed / 60)) * 60;
//
//   if (String(seconds).split(".")[1].match(/9/g) && String(seconds).split(".")[1].match(/9/g).length
//       === String(seconds).split(".")[1].length) {
//     seconds = Math.ceil(seconds)
//   } else {
//     seconds = Math.floor(seconds);
//   }
//
//   return {
//     turns,
//     seconds,
//   }
// }

export default function calculateHanoi(disks, turnsSpeed) {
  const turns = Math.pow(2, disks) - 1;
  const seconds = Math.floor((turns / (turnsSpeed / 60)) * 60);

  return {
    turns,
    seconds,
  }
}
