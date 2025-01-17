'use strict';


/*

const calcAverage = (score1, score2, score3) => (score1 + score2 +  score3) / 3;

let scoreDolphins = calcAverage(44,23,71);
let scoreKoalas = calcAverage(65,54,49);



function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if (avgKoalas  >=avgDolphins * 2) {
         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
    else {
         console.log('No team wins...');
    }
};


checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,34,27);

checkWinner(scoreDolphins, scoreKoalas);



Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.





function calcTip(bill) {
     if (bill >= 50 && bill <= 300) {
          return bill * 0.15
     } else {
          return bill * 0.2
     }
}


const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

console.log(tips)
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]


console.log(bills, tips, totals);


const mark = {
     fullName: "Mark Miller",
     mass: 78,
     height: 1.69,
     calcBMI: function () {
          return this.bmi = this.mass / (this.height * this.height)
     }
 }
 
 const john = {
     fullName: "John Smith",
     mass: 90,
     height: 1.95,
     calcBMI: function () {
          return this.bmi = this.mass / (this.height * this.height)
     }
 }

// console.log(mark.calcBMI())
// console.log(john.calcBMI())
console.log(`${mark.calcBMI() > john.calcBMI() ? `Mark Miller's BMI (${mark.calcBMI()}) is higher than John Smith's BMI (${john.calcBMI()})` : 'John ma wyzsze i chuj'}`)

*/

const calcTip = function (bill) {
     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tips = []
let totals = []

for (let i = 0; i < bills.length; i++) {
     let onlyTips = (calcTip(bills[i]))
     tips.push(onlyTips)
     totals.push(bills[i] + onlyTips)
}

console.log(tips)
console.log(totals)

// BONUS


let sum = 0
let avg = null
const calcAverag = function (arr) {

     for (let i = 0; i < arr.length; i++) {
          sum = sum + arr[i]
          avg = sum / arr.length

     }
     return avg
}

console.log(calcAverag([2, 5, 3, 8, 10]))
// console.log(sum)
// console.log(avg)