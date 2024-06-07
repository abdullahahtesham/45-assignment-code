//Changing guest list
let guestList: string[] = ["Ali", "Abdullah", "Wahab"];
for (let i = 0; i < guestList.length; i++) {
  console.log(
    `Hello ${guestList[i]}, I would like to invite in a dinner at my home`
  );
}
guestList.pop();
guestList.push("Waleed");

for (let i = 0; i < guestList.length; i++) {
  console.log(
    `Hello ${guestList[i]}, I would like to invite in a dinner at my home`
  );
}
