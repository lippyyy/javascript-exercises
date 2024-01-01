const convertToCelsius = function(num) {
  convertedNum = ((5/9) * (num - 32))
  return Math.round(convertedNum * 10) / 10
}

const convertToFahrenheit = function(num) {
  convertedNum = ((num * (9/5)) + 32)
  return Math.round(convertedNum * 10) / 10
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
