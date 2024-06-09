//Checking Usernames: 
var current_users = ["Eric", "Ali", "Gulfam", "Abdullah", "Wahab"];
var new_users = ["Ali", "Waleed", "Gulfam"];
new_users.forEach(function (newuser) {
    if (current_users.some(function (currentuser) { return currentuser.toLowerCase() === newuser.toLowerCase(); })) {
        console.log("".concat(newuser, ",username has already been used "));
    }
    else {
        console.log("".concat(newuser, ", username is available. "));
    }
});
