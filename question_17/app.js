//Shrinking Guest List:
console.log("Unfortunately,I cann't invite you.");
var guestList = ["Ali", "Abdullah", "Wahab", "Gulfam", "Waleed"];
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry,".concat(removedGuest, " you is not invited to dinner"));
}
for (var i = 0; i < guestList.length; i++) {
    console.log("".concat(guestList[i], ", you are invited"));
}
guestList.splice(0, 2);
console.log(guestList);
