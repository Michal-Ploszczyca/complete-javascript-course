/*
// assignment 1

// let country = 'Poland'
// let continent = "Europe"
let population = 39000000

// console.log(country, continent, population)

// asignment 2

let isIsland = false;
let language = null

console.log(typeof isIsland)
console.log(typeof language)
console.log(typeof population)


// let const var exercise

const language = 'Polish';
console.log(typeof language)


const population = 39000000 
const country = 'Poland'
const language = 'Polish'

const description = 
country + 
" is in Europe, and its " + 
population + 
" million people speak " + 
language;

console.log(description)

Write your code below. Good luck! 🙂 

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);



if (BMIJohn > BMIMark) {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's! ${BMIMark}`)

} else {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's! (${BMIJohn})`)

}

const scoreDolphins = 96 + 108 + 90 / 3
const scoreKoalas = 88 + 91 + 110 / 3





console.log(scoreDolphins, scoreKoalas)

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy")
}else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy")
}else if (scoreDolphins === scoreKoalas) {
    console.log("Both scores are equal")
}


// CHALLANGE 4
*/

const bill = 30;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2

console.log(`The bill is ${bill} and the tip is ${tip}, togheter it is ${bill + tip}`)