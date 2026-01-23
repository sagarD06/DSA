let string = "Hello, World!";

//accessing characters
console.log(string[0]); // H
console.log(string[1]); // e

//adding characters
string += " How are you?"; // adds to the end of the string
string = "How are you? " + string; // adds to the beginning of the string
console.log(string); // Hello, World! How are you? How are you?

//removing characters
string = string.slice(0, -1); // removes the last character
string = string.slice(1); // removes the first character
console.log(string); // ello, World! How are you? How are you?

//iterating over a string
for (let i = 0; i < string.length; i++) {
  console.log(string[i]); // e, l, l, o, ,, , W, o, r, l, d, !, , , H, o, w, , a, r, e, , y, o, u, ?, , H, o, w, , a, r, e, , y, o, u
}

//insert at index
string = string.slice(0, 5) + "X" + string.slice(5); // inserts X at index 5
console.log(string); // elloX, World! How are you? How are you?

//remove at index
string = string.slice(0, 5) + string.slice(6); // removes 1 character at index 5
console.log(string); // ello, World! How are you? How are you?

//replace at index
string = string.slice(0, 5) + "Y" + string.slice(6); // replaces character at index 5 with Y
console.log(string); // elloY, World! How are you? How are you?

//split string into array
let array = string.split(", "); // splits string into array at ", "
console.log(array); // [ 'elloY', 'World! How are you? How are you?' ]

//join array into string
string = array.join(", "); // joins array into string with ", " as separator
console.log(string); // elloY, World! How are you? How are you?

//convert string to array of characters
let charArray = Array.from(string); // converts string to array of characters
console.log(charArray); // [ 'e', 'l', 'l', 'o', 'Y', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!', ' ', 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', '?', ' ', 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u' ]
