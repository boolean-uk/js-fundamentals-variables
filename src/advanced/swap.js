let a = 8
let b = 10

// TODO: Swap the values of a and b without changing lines 1 and 2; extra points if you can do it without using a temporary variable
function valueswap(primaryValue, secondaryValue){
    
    [primaryValue ,secondaryValue] = [secondaryValue, primaryValue]
    let outputValues = [primaryValue, secondaryValue]
    return outputValues
}
let arrDeconstruction = valueswap(a,b)
a = arrDeconstruction[0]
b = arrDeconstruction[1]
module.exports = { a, b }
