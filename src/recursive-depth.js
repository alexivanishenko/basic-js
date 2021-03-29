const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (arr.filter((element) => Array.isArray(element)).length === 0) return 1;
    return (
      1 +
      this.calculateDepth(
        arr.flat().filter((element) => Array.isArray(element))
      )
    );
  }
};
