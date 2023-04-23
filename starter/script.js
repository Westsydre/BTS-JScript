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
*/

const emmanuel = {
  firstName: 'Emmanuel',
  year: 1996,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
  // Never use an arrow method in a function
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

emmanuel.greet();
