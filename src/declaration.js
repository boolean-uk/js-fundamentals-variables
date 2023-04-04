//
//
//
// TODO: 1. Declare the variables firstName and age so that the tests pass
// do some work here

const firstName = 'Jane'

const age = 35

console.log(firstName)

console.log(age)

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

module.exports = {
  firstName: firstNameExport,
  age: ageExport
}
