/*
let js = 'AMAZING'
console.log(1 + 1 + " kebaby NA cienkim");

let first_name = "Matilda";

console.log(first_name);

let myFirstJob = "Programmer";
console.log(myFirstJob)


// console.log(javascriptIsFun);
let javascriptIsFun = true;
// console.log(javascriptIsFun)

console.log(typeof javascriptIsFun)

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun)

let year;
console.log(year)

year = 1991;
console.log(typeof year);



let age = 30;
age = 31;

const birthYear = 1991;


// math operators
const currentYear = 2023;
const ageMichal = currentYear - 1998;
const ageKaczynski = currentYear - 1949;
console.log(ageMichal * 2, ageKaczynski / 2, ageKaczynski ** 2)

const first_name = 'Jonas';
const lastName = 'Shmedtman'
console.log(first_name + ' ' +  lastName)

// asignment operators
let x = 10 + 5; // 15
x += 15; // x = x + 15  = 30
x++; // x = x + 1
x--; // x= x -1
console.log(x)

//comparision operators

console.log(ageMichal > ageKaczynski); // >, < >=, <=

console.log(ageMichal >= 18)

const isFullAge = ageKaczynski >= 18;
console.log()
console.log()
const avarageAge = (ageKaczynski + ageMichal) / 2
console.log(avarageAge);


// CODING CHALLENGE 1

const markWeight = 95;
const markHeight = 1.88; //in cm
const johnWeight = 85;
const johnHeight = 1.76; //in cm

const markBMi = markWeight / (markHeight * markHeight);
const johnBMI = johnWeight / (johnHeight * johnHeight);
console.log("Mark BMI is: "+ markBMi);
console.log("John BMI is: "+ johnBMI);

const markHigherBMI = markBMi > johnBMI;
console.log("Does Mark has a higher BMI than John? The answer is: " + markHigherBMI);



const first_name = 'Jonas';
const job = "teacher";
const birthYear = 1991;
const year= 2037

const jonas = "I am " + first_name + ", a " + (year - birthYear) + " years old guy " + job
console.log(jonas)

const jonasNew = `I'm ${first_name}, a ${year - birthYear} years old ${job}`;
console.log(jonasNew)

const phone = 6942052.2
const color = "kurwa zielony XD"


const michalNew = `Siema jestem Michał i mój numer telefonu to ${phone} a obudowa ma kolor ${color}`
console.log(michalNew)


console.log("String with \n\multiple lines ");

console.log(`string 
done as
templeta 
litereal`);

const sentence = `My name is ${first_name} and i am a ${job}, my father was born in ${birthYear} 
and i was born in ${year}, my head color is ${color}`
console.log(sentence)



const age = 17;
const is_old_enough = age >= 18;

if (is_old_enough) {
    console.log("Sarah can start her driving license 🚌")


} else {

    const years_left = 18 - age
    const spelling = years_left % 2 != 1

    console.log(`Sarah has to wait ${years_left} years till she can start her driving license `)

}

let century;
const birthYear = 2001
if (birthYear <= 2000) {
    century = 20;

} else {
    century = 21
}

console.log(century)



const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 15)

console.log(String(12))
// if we use + then the string concatinate, everything else will convert to number
console.log('20' - '10' - 3)
console.log("23" * "2");


console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean("Jonas"))
console.log(Boolean({}))


const money = 20;

if (money) {
    console.log("Dont spend it all bro");
} else {
    console.log("You should get a job");
}

let height = ''
if (height) {
    console.log("Wow your height is defined brother")
} else {
    console.log("Your height IS NOT DEFINED brother")
}


const age = "18";

if (age === 18) { console.log("The person is an adult (strict)") }

if (age == 18) { console.log("The person is an adult (loose)") }



const favourite = Number(prompt("What is your favourite number?"))
console.log(favourite)


if (favourite === 23) {
    console.log('Cool 23 is an amazing number!')
}



const hasDrivingLicense = true;
const hasGoodVision = false;

console.log(hasDrivingLicense && hasGoodVision)
console.log(hasDrivingLicense || hasGoodVision)
console.log(!hasDrivingLicense)

*/

const day = "Sunday"
switch(day) {
    case "Monday":
    console.log("Plan course structure");
    console.log("Go to coding meet-up");
    break;
    case "Tuesday":
        console.log('Prepare theory videos');
        break;
    case "Wednesday":
    case "Thursday":
        console.log("Write code examples")
        break;
    case "Friday":
        console.log("Record videos")
        break;
    case "Saturday":
    case "Sunday":
        console.log("I am resting");
        break;
    default:
        console.log("Not a valid day!")
}