let a = 8
let b = 10

// Swapping using array destructuring
b = [a, (a = b)][0]

module.exports = { a, b }
