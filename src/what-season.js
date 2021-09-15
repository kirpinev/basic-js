import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
  const SEASONS = {
    winter: [11, 0, 1],
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10]
  }

  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  try {
    if (!(date instanceof Date) || date.getDate() !== new Date(date.toString()).getDate()) {
      throw new Error('Invalid date!');
    }

      for (const season in SEASONS) {
        if (SEASONS[season].find(s => s === date.getMonth()) !== undefined) {
          return season;
        }
      }
  } catch (e) {
    throw new Error('Invalid date!')
  }
}
