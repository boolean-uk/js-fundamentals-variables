//
// Variable types
//
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#javascript_types
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//

// Update the answers below the numbered questions below

// An array of choices to pick answers from
const CHOICES = [
  'Pick me!', // choose this with pick(0)
  null, // choose this with pick(1)
  undefined, // choose this with pick(2) etc ...
  -12,
  3.14,
  10000000n,
  'hey',
  [1, 2, 3],
  { i: 'object!' },
  2 > 1, // HINT: Is this true or false?
  3 === 4 // HINT: Is this true or false?
]

// Use the following function to 'pick' an answer to the questions below
// NOTE: Answers are numbered from 0

// examples
let pickMe = pick(0) // to pick the 1st answer use 0
pickMe = pick(4) // to pick the 4th answer use 3 etc
pickMe = pick(0) // Back to the correct sample answer

function pick(n) {
  return CHOICES[n]
}

// 1. Pick true using the pick function - by changing 0 to pick your answer
const imTrue = pick(CHOICES.findIndex(choice => choice == true))

// 2. Pick a real number
const aReal = pick(CHOICES.findIndex(choice => typeof choice === 'number' && Number.isFinite(choice) && choice != -12))

// 3. Pick a string
const aString = pick(CHOICES.findIndex(choice => typeof choice === 'string' && choice != "Pick me!"))

// 4. Pick an array
const anArray = pick(CHOICES.findIndex(choice => Array.isArray(choice)))

// 5. Pick a (simple) number
const aNumber = pick(CHOICES.findIndex(choice => typeof choice === 'number'))

// 6. Pick an object
const anObject = pick(CHOICES.findIndex(choice => typeof choice === 'object' && !Array.isArray(choice) && choice != null))

// 7. Pick false
const imFalse = pick(CHOICES.findIndex(choice => choice == false))

// 8. Pick a BigInt
const imBigInt = pick(CHOICES.findIndex(choice => choice > 99))

// 9. Pick undefined
const imUndefined = pick(CHOICES.findIndex(choice => choice === undefined))

// 10. Pick null
const imNull = pick(CHOICES.findIndex(choice => choice == null))

// Do not edit below this line
module.exports = {
  pickMe,
  imTrue,
  aReal,
  aString,
  anArray,
  aNumber,
  anObject,
  imFalse,
  imBigInt,
  imNull,
  imUndefined
}
