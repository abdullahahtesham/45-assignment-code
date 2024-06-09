//Ordinal Numbers:
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (number1) {
    var suffix = "th";
    if (number1 === 1) {
        suffix = "st";
    }
    else if (number1 === 2) {
        suffix = "nd";
    }
    else if (number1 === 3) {
        suffix = "rd";
    }
    else {
        suffix = "th";
    }
    console.log("".concat(number1).concat(suffix));
});
