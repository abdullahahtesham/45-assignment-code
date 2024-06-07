//Changing guest list
var guestList = ["Ali", "Abdullah", "Wahab"];
for (var i = 0; i < guestList.length; i++) {
    console.log("Hello ".concat(guestList[i], ", I would like to invite in a dinner at my home"));
}
guestList.pop();
guestList.push("Waleed");
for (var i = 0; i < guestList.length; i++) {
    console.log("Hello ".concat(guestList[i], ", I would like to invite in a dinner at my home"));
}
