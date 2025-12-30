const convertToCelsius = function(deg_f) {
  res = (deg_f-32)*(5/9)
  return Math.round(res*10)/10;
};

const convertToFahrenheit = function(deg_c) {
  res = deg_c*9/5+32
  return Math.round(res*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
