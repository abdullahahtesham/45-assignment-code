//Shrinking Guest List:
console.log(`Unfortunately,I cann't invite you.`);

let guestList: string[] = ["Ali", "Abdullah", "Wahab", "Gulfam", "Waleed"];
while (guestList.length > 2) {
  let removedGuest = guestList.pop();
  console.log(`Sorry,${removedGuest} you is not invited to dinner`);
}
for (let i = 0; i < guestList.length; i++) {
  console.log(`${guestList[i]}, you are invited`);
}
guestList.splice(0, 2);
console.log(guestList);
