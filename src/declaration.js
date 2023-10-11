const name='Jane'
let otherName='Jane'

//We can now assign a new value to name
otherName='Bob'
const age = 10
const firstName = 'Jane'
// TODO: 1. Declare the variables firstName and age so that the tests pass
// do not edit below this line
let firstNameExport = ''
let firstNameExport = 'Jane'
try {
  /* eslint-disable no-undef */
  firstNameExport = firstName
} catch (e) {}

let ageExport = 0
let ageExport = 35
try {
  /* eslint-disable no-undef */
  ageExport = age
}
module.exports = {
  firstName: firstNameExport,
  age: ageExport
}
