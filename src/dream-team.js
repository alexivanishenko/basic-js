const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === false) {
    return false;
  }
  let result = members
    .filter((item) => typeof item === "string")
    .map((item) => item.toUpperCase().trim())
    .map((item) => item.slice(0, 1))
    .sort()
    .join("");

  return result;
};
