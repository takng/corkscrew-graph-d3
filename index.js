// calulate the number of periods of the wave required given the length of the arc wave (years) and the amplitude (heightYears).
// for a triangle wave
var calcTrianglePeriods = function(years, heightYears) {
  if (heightYears > (years / 4)) {
    console.log("Specified height is too high for the years given.");
  }
  var periods; // full "waves"
  // var heightYears = 2.5; // max years / 4, otherwise it's a straight line
  periods = 4 * Math.sqrt(Math.pow(years / 4, 2) - Math.pow(heightYears, 2));
  return periods;
}

console.log(calcTrianglePeriods(10, 2))
