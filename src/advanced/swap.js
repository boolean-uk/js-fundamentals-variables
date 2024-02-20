let a = 8
let b = 10

// TODO: Swap the values of a and b without changing lines 1 and 2; extra points if you can do it without using a temporary variable

// a now becomes 18 (8 + 10)
a = a + b;
// b becomes 8 (18 - 10)
b = a - b;
// a becomes 10 (18 - 8)
a = a - b;

module.exports = { a, b }
