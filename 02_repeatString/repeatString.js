const repeatString = function(string, num) {
    let repeatedString = "";

    while (num > 0) {
        repeatedString += string
        num--
    }

    if (num < 0) {
        return "ERROR"
    }

    return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
