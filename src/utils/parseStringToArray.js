module.exports = function parseStringToArray(string) {
  return string.split(",").map(tech => tech.trim());
};
