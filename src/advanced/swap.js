let a = 8
let b = 10

// TODO: Swap the values of a and b without changing lines 1 and 2; extra points if you can do it without using a temporary variable

const c = a
a = b
b = c
// [a, b] = [b, a]; // when attempting destructuring it just complains that the variables haven't been initialized

module.exports = { a, b }
