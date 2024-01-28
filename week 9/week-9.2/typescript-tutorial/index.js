"use strict";
const x = 101;
console.log(x);
//  functions
function greet(name) {
    console.log(`Welcome ${name}!`);
}
greet('Anoop');
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(10, 24));
function runAfter1s(fn) {
    setTimeout(fn, 1000);
}
runAfter1s(function () {
    console.log('Hi there!');
});
