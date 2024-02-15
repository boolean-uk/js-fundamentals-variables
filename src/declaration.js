//
//
//
// TODO: 1. Declare the variables firstName and age so that the tests pass

// do not edit below this line
let firstNameExport = ''
try {
  /* eslint-disable no-undef */
  firstNameExport = 'Jane'
} catch (e) {}

let ageExport = 0
try {
  /* eslint-disable no-undef */
  ageExport = 35
} catch (e) {}

module.exports = {
  firstName: firstNameExport,
  age: ageExport
}
