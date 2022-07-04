'use strict';

//Task#1

const obj = {};
obj.name = 'Jonh';
obj.surname = 'Smith';
obj.name = 'Pete';

delete obj.name;

console.log(obj)

//Task#2

const user = {
   name: 'Jonh',
};

user.name = 'Pete';

console.log(user.name) // Pete


//Task #3


let salaries = {
   John: 100,
   Ann: 160,
   Pete: 130,
};

let sum = salaries.John + salaries.Ann + salaries.Pete;
console.log(sum);


let sum2 = 0;

for (let key in salaries) {
   sum2 += salaries[key];
};

console.log(sum2);