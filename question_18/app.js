var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Seeing the World
var favPlace = ["Lahore", "Islamabad", "Quetta", "Peshawar", "Murree"];
console.log("Original order:", favPlace); // original order
console.log("Alphabetic order:", __spreadArray([], favPlace, true).sort()); //alphabetical order
console.log("Original order:", favPlace); // original order
console.log("Reverse order:", __spreadArray([], favPlace, true).sort().reverse()); //reverse order
console.log("original order:", favPlace); // original order
favPlace.reverse();
console.log("Reverse order:", favPlace); //reverse order
favPlace.reverse();
console.log("Original order:", favPlace); //original orders
favPlace.sort();
console.log("Alphabetic order:", favPlace);
favPlace.reverse();
console.log("Reverse alphabatic order:", favPlace);
