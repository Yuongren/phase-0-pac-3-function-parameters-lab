global.expect = require('expect');

const babel = require('babel-core');
const jsdom = require('jsdom');
const path = require('path');

Function 
function logTwoValues(value1, value2) {
    console.log(`The two values are ${value1} and ${value2}.`);
  }
function sayHelloTo(firstName) {
    console.log(`Hello, ${"Aki"}!`);
  }
function sayHelloTo(firstName = "User") {
    console.log(`Hello, ${firstName}!`);
  }  