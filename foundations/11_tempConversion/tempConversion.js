const convertToCelsius = function(fahernheit) {
  var convertedToCelsius = (fahernheit -32 ) * (5/9);
  return Math.round(convertedToCelsius * 10) / 10;
  }
const convertToFahrenheit = function(celsius) {
  var convertedToFahrenheit = (celsius * 1.8) +32;
  return Math.round(convertedToFahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
