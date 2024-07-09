//Checking Usernames: 
let current_users = ["Eric", "Ali", "Gulfam", "Abdullah", "Wahab"];
let new_users = ["Ali", "Waleed", "Gulfam"];
new_users.forEach((newuser) => {
  if (
    current_users.some(
      (currentuser) => currentuser.toLowerCase() === newuser.toLowerCase()
    )
  ) {
    console.log(`${newuser},username has already been used `);
  } else {
    console.log(`${newuser}, username is available. `);
  }
});
