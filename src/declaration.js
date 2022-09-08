//
//
//
// TODO: 1. Declare the variables firstName and age so that the tests pass

const firstName = 'Jane'
console.log(firstName)
const age = 35
console.log(age)


// do not edit below this line
let firstNameExport = ''
try {
  firstNameExport = firstName
} catch (e) {}

let ageExport = 0
try {
  ageExport = age
} catch (e) {}

module.exports = {
  firstName: firstNameExport,
  age: ageExport
}
