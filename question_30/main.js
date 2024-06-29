//Hello Admin:
var userNames = ["Admin", "Eric", "Ali", "Abdullah", "Gulfam"];
userNames.forEach(function (userName) {
    if (userName === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(" Hello ".concat(userName, ", thank you for logging in again."));
    }
});
