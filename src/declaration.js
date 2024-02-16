//
//
//
// TODO: 1. Declare the variables firstName and age so that the tests pass
const firstName = 'Jane'
const age = 35
// do not edit below this line
let firstNameExport = ''
try {
  /* eslint-disable no-undef */
  firstNameExport = firstName
} catch (e) {}

let ageExport = 0
try {
  /* eslint-disable no-undef */
  ageExport = age
} catch (e) {}
console.log(firstNameExport)
console.log(ageExport)
module.exports = {
  firstName: firstNameExport,
  age: ageExport
}
