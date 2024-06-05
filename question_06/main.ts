//Stripping Names
let my_name :string = "\t\n Abdullah \t\n";
console.log(my_name);
console.log(my_name.trim());

//second way
let myName :string = "Abdullah";
myName = "\t   Abdullah"     //by this the space is before the word
console.log(myName);
console.log(myName.trim());

let myname2 :string = "Abdullah";
myname2 = "\n\n\n\Abdullah"  //by this spaces is the line which  are before the word
console.log(myname2);
console.log(myname2.trim());

