import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const obj = {};

  domains.forEach(domain1 => {
    const splitedDomains1 = domain1.split(".").reverse();

    splitedDomains1.forEach((splitedDomain, index) => {
      obj[`.${splitedDomains1.slice(0, index + 1).join(".")}`] = 0;

      domains.forEach(domain2 => {
        const splitedDomains2 = domain2.split(".").reverse();

        if (`.${splitedDomains1.slice(0, index + 1).join(".")}` === `.${splitedDomains2.slice(0, index + 1).join(".")}`) {
          obj[`.${splitedDomains1.slice(0, index + 1).join(".")}`] += 1;
        }
      })
    })
  })

  return obj;
}
