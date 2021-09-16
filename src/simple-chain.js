import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  getLength() {
    return this.string.length;
  },
  addLink(value = '') {
    this.string.push(String(value));

    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) && (this.string[position - 1] !== undefined)) {
      this.string = this.string.filter((_, index) => index !== position - 1);

      return this;
    } else {
      this.string = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.string = this.string.reverse();

    return this;
  },
  finishChain() {
    const finishedChain = this.string.map(item => `( ${item} )`).join("~~");
    this.string = [];

    return finishedChain;
  },
  string: [],
};
