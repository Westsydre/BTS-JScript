'use strict';

/*
// Scoping
function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millennial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh , and you're a millennial, ${firstName}`;
      console.log(str);

      //  functions are block scoped in strict mode
      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millennial);
    // add(2, 3);
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Emmanuel';
calcAge(1996);
// printAge()

// Hoisting Examples

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Emmanuel';
let job = 'Engineer';
const year = 1996;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAge(1996);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAgeArrow(1996);

const emmanuel = {
  year: 1996,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};
emmanuel.calcAge();

const matilda = {
  year: 2000,
};

matilda.calcAge = emmanuel.calcAge;

matilda.calcAge();

const f = emmanuel.calcAge;
f();

const emmanuel = {
  firstName: 'Emmanuel',
  year: 1996,
  calcAge: function () {
    // console.log(this);
    console.log(2023 - this.year);

    // Solution 1
    // const self = this;  // self or that
    // const isMillennial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // Solution 2
    const isMillennial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillennial();
  },

  // Never use an arrow method in an object
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
emmanuel.greet();
emmanuel.calcAge();

// Argument keywords
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

// argument does not exist in arrow function
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);

// Primitive vs Objects
// Primitive
let age = 30;
let oldAge = age;
age = 31;
console.log(age, oldAge);

// Object
const me = {
  name: 'Emmanuel',
  age: 26,
};  

const friend = me;

friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);
*/

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
