const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArray: [],
  getLength() {
    return this.chainArray.length;
  },
  addLink(value) {
    this.chainArray.push(value);
    return this;
  },
  removeLink(position) {
    if (!position || typeof position !== "number" || position < 0) {
      this.chainArray = [];
      throw new Error();
    }
    this.chainArray.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainArray = this.chainArray.reverse();
    return this;
  },
  finishChain() {
    let chain = "";
    for (let link of this.chainArray) {
      chain += `( ${link} )~~`;
    }
    this.chainArray = [];
    return chain.slice(0, -2);
  },
};

module.exports = chainMaker;
