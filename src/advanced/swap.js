let a = 8
let b = 10

// TODO: Swap the values of a and b without changing lines 1 and 2; extra points if you can do it without using a temporary variable
/* V1 (not very scalable, but uses no aditional temporary variables). Three operations
a = a + b
b = a - b
a = a - b
*/

// V2
b = [a, (a = b)][0]

module.exports = { a, b }
