//
//
//
// TODO: 1. Declare the variables firstName and age so that the tests pass

// do not edit below this line
let firstNameExport = 'Jane'
try {
  /* eslint-disable no-undef */
  firstNameExport = firstName
} catch (e) {}

let ageExport = 35
try {
  /* eslint-disable no-undef */
  ageExport = age
} catch (e) {}

module.exports = {
  firstName: firstNameExport,
  age: ageExport
}
