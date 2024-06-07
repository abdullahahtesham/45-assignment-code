//More guest
let guestList: string[] = ["Ali", "Abdullah", "Wahab"];
for (let i = 0; i < guestList.length; i++) {
  console.log(
    `Hello ${guestList[i]}, I would like to invite in a dinner at my home`
  );
}
guestList.unshift("Waleed");
guestList.splice(2, 0, "Asad");
guestList.push("Gulfam");
for (let i = 0; i < guestList.length; i++) {
  console.log(`Hello ${guestList[i]},  we found a bigger dinner table.`);
}
for (let i = 0; i < guestList.length; i++) {
  console.log(
    `Dear ${guestList[i]},  I would like to invite you in the dinner party.`
  );
}
