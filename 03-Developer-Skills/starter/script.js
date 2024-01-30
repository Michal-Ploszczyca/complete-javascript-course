// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = 23;

const calcAge = birthYeara => 2037 - birthYeara;

if (x === 23) console.log(23);

console.log(calcAge(1991));
*/
const temperatures = [3, -2, 4, -1, 5, 'error', 9, 13, 17, 15, 14, 9, 5];

const CalcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let index = 0; index < temps.length; index++) {
    const curTemp = temps[index];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const aplitude = CalcTempAmplitude(temperatures);
console.log(aplitude);

// MERGE two arrays

const CalcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];

  for (let index = 0; index < temps.length; index++) {
    const curTemp = temps[index];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const aplitudeNew = CalcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(aplitudeNew);
