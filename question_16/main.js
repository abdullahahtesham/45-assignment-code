//More guest
var guestList = ["Ali", "Abdullah", "Wahab"];
for (var i = 0; i < guestList.length; i++) {
    console.log("Hello ".concat(guestList[i], ", I would like to invite in a dinner at my home"));
}
guestList.unshift("Waleed");
guestList.splice(2, 0, "Asad");
guestList.push("Gulfam");
for (var i = 0; i < guestList.length; i++) {
    console.log("Hello ".concat(guestList[i], ",  we found a bigger dinner table."));
}
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ",  I would like to invite you in the dinner party."));
}
