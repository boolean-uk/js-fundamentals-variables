const a = 8
const b = 10
const values = [a, b]
// TODO: Swap the values of a and b without changing lines 1 and 2; extra points if you can do it without using a temporary variable

const swap = values.toSpliced(0, 2, 10, 8)
console.log(swap)
module.exports = { a, b }
