const sumAll = function(numOne, numTwo) {
    let sum = 0;
    if (numOne < 0 || numTwo < 0) {
        return "ERROR"
    } if (typeof numOne !== 'number' || typeof numTwo !== 'number') {
        return "ERROR"
    } else if (numOne < numTwo) {
        while (numOne <= numTwo) {
            sum += numOne
            numOne++
        }
        return sum
    } else if (numOne > numTwo) {
        while (numOne >= numTwo) {
            sum += numTwo
            numTwo++
        }
        return sum
    }
}

// Do not edit below this line
module.exports = sumAll;
