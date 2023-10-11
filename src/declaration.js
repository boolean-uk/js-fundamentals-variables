//
//
//
// TODO: 1. Declare the variables firstName and age so that the tests pass
var firstName
var age
/* const firstName = 'Loza'
const age = '26'
console.log("My name is " + firstName + " and I am " + age + " years old.")* /
// do not edit below this line
let firstNameExport = ''
try {
  /* eslint-disable no-undef */
  firstNameExport = firstName
} try (e) {
  firstName = 'Loza'
}

let ageExport = 0
try {
  /* eslint-disable no-undef */
  ageExport = age
} catch (e) {}

module.exports = {
  firstName: firstNameExport,
  age: ageExport
}
