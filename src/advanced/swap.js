let a = 8
let b = 10

// TODO: Swap the values of a and b without changing lines 1 and 2; extra points if you can do it without using a temporary variable
a = a ^ b // 8 ^ 10 = 2
b = a ^ b // 2 ^ 10 = 8
a = a ^ b // 2 ^ 8 = 10

module.exports = { a, b }