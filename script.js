"use strict";

//first
const first = (function () {
  let x = "this is console";
  console.log(x);
})();

//second
const add = function (a, b) {
  return a + b;
};
console.log(add(3, 4));

//third
const multiply = (a, b) => a * b;
const result = multiply(12, 5);
console.log(result);

//forth
var x = 21;
var girl = function () {
  console.log(x);
  var x = 20;
};
girl();

//fifth
var x = 21;
boy();
console.log(x);
function boy() {
  console.log(x);
  var x = 900;
}

//sixth
var x = 21;
one();
two();

function one() {
  x = 1;
  console.log(x);
}

function two() {
  x = 2;
  console.log(x);
}

//seventh
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(7));

//Next Day

//first
function sum(a, b) {
  return a + b;
}

function displayData(data, batch) {
  console.log(`i am from ${data} and My batch is EA${batch}`);
}

displayData("PrepBytes", sum(10, 9));

//third
var a = 10;
(function () {
  console.log(a);
  var a = 20;
})();

//forth
const greetings = function (name) {
  return function (m) {
    console.log(`Hi!! ${name}, ${m}`);
  };
};

const greet_message = greetings("EA19");
greet_message("Welcome To PrepBytes");
