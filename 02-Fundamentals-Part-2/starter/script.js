'use strict';
/*
let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDrivesLicense = true;
if (hasDriverLicense) console.log('I cant driver :D')



function logger() {
    console.log(`My name is Michal`);
}

// calling / running /invoking the functioin
logger();
logger();

function fruitProcessor(apples, oranges) {

    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice
}


const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);



function AreaOfTriagnle (a, h, division = 2) {
    const calculation = (a * h) / division
    return console.log(`The area of the triangle is ${calculation}`);

}

AreaOfTriagnle(4, 10)

const num = Number('23')



// function declaration
function calcAge1(birthYear) {
    return 2023 - birthYear;

}

const age1 = calcAge1(1998);
console.log(age1)

//funcation expression
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;

}
const age2 = calcAge2(1998)

console.log(age1, age2)


// ARROW FUNCTIONS

const calcAge3 = birthYear => 2023 - birthYear;
const ag3 = calcAge3(1998);
console.log(ag3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    // return retirement
    if (retirement <= 0) {
        return (`${firstName} is already on retirement`)
    }
    else {
        return (`${firstName} retires in ${retirement} years`);
    }

}
console.log(yearsUntilRetirement(1930, 'Witek'))


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and  ${orangePieces} pieces of orange`;
    return juice
}

console.log(fruitProcessor(2,3))


const calcAge = function(birthYear) {
    return 2027  - birthYear;
}
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement
    } else {
        console.log(``)
        return -1

    }

}
yearsUntilRetirement(1970, 'Michal')




function calcAge(birthYear) {
    return 2023 - birthYear;
}

const calcAge = function(birthYear) {
    return 20237 - birthYear;
};

const calcAge = birthYear => 20237 -birthYear;

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

console.log(friends[friends.length - 1]) // to extract the last value form the list

friends[1] = 'Adolf';
console.log(friends);

const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtman', 2037 - 1991, 'teacher', friends]

console.log(jonas)

// Exercise

const calcAge = function (birthYear) {
    return 2023 - birthYear
}

const years = [1991, 1960, 2002, 2028, 2018, 2023]

const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length - 1])

console.log(age1, age2, age3)


// ADD Elements
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Amber')
console.log(friends);
console.log(newLength);

friends.unshift('John')
console.log(friends);

// remove elemets

friends.pop();
const popped = friends.pop();
console.log(popped)
console.log(friends);

friends.shift();
console.log(friends)

friends.push(23)
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Steven'))
console.log(friends.includes('Bob'));

if (friends.includes('Peter')) {
    console.log("YOu have a friend call Peter")
}



const michaelArray = [
    'Michael',
    'Ploszczi',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter']
];


const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    age: 2037 - 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Arnold', 'Michael', 'Peter', 'Arnold']
};

const nameKey = 'Name';
console.log(jonas['first' + nameKey])
console.log(jonas['last' + nameKey])


// console.log(jonas.firstName)

// const interestedIn = prompt('What do you whant to know about Jonas? Choose between firstName, lastName, age, job, and friends')

// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn])
// } else {
//     console.log('Wrong request. Choose between firstName, lastName, age, job, and friends')
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';

// console.log(jonas)

// challange
// 'Jonas has 3 friends, and his best friens is called Michael'


const sentence = {
    name: 'Jonas',
    verb: 'has',
    number: 3,
    people: 'friends',
    separator: 'and',


}



console.log(`${sentence.name} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)



const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    birthYear: 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter'],
    hasDriverLicense: false,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear
    // }

    // calcAge: function () {
    //     console.log(this)
    //     return 2037 - this.birthYear;
    // }
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    hasLicense: function () {
        if (jonas.hasDriverLicense) {
            this.hasDriverLicense = 'has driving license'
            return this.hasDriverLicense
        }
        else {
            return TouchList.hasDriverLicense = 'Has NOT Driving license'
        }
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriverLicense ? "a" : "no"} driver's license`
    }


}


console.log(jonas.calcAge())

// console.log(jonas.age())
console.log(jonas.hasLicense())
// console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and ${jonas.hasLicense()}`)
console.log(jonas.getSummary())
// "Jonas is a 46 old teacher and he has a dricer license"



// for loop keeps runnning while condition is TRUE

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

const jonas = [
    'Jonas',
    'Schmedtman',
    2037 - 1991,
    'Teacher',
    ['Michael', 'Peter', 'Arnold', 'Michael', 'Peter', 'Arnold'],
    true
];
const types = [];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);

    types.push(typeof jonas[i])
}

console.log(types)

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    let calc = 2037 - years[i];
    ages.push(calc);

}

console.log(ages);

// continue and break
console.log('--- ONLY STRINGS----')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i])
}

console.log('--- BREAK WITHY NUMBER----')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}



// backword loops
const jonas = [
    'Jonas',
    'Schmedtman',
    2037 - 1991,
    'Teacher',
    ['Michael', 'Peter', 'Arnold', 'Michael', 'Peter', 'Arnold'],
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i])
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-----Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep}`);
    }
}



let rep = 1
while (rep <= 10) {
    console.log(`Lifiting weights repetition ${rep}`)
    rep++;

}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end');
}

*/
