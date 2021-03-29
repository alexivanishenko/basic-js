const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let resultStr = "";

  options.separator = options.separator || "+";
  options.additionSeparator = options.additionSeparator || "|";
  options.repeatTimes = options.repeatTimes || 1;
  options.additionRepeatTimes = options.additionRepeatTimes || 1;

  for (let i = 0; i < options.repeatTimes; i++) {
    if (i !== 0) resultStr += options.separator;
    resultStr += str;

    if (options.addition !== undefined) {
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        if (j !== 0) resultStr += options.additionSeparator;
        resultStr += options.addition;
      }
    }
  }

  return resultStr;
};
