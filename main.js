/*=========================================================
    Part 1: Variables
*/
var givenName;
// Q: What does `givenName` equal right now?
// A: Nothing


givenName = "Brit";
// Q: What is `givenName` set to right now?
// A: "Brit"


givenName = givenName;
// Q: What is `givenName` set to right now?
// A: True


var greeting = "Hello, how are you? " + givenName;
// Q: What is `greeting` set to?
// A: "Hello, how are you? Brit"


/*=========================================================
     Part 2: Simple Math
*/

var high = 50;
var low  = 10;


var math = high - low;
// Q: What is `math` set to?
// A: 50 - 10 == 40

math = high - "5";
// Q: What is `math` set to?
// A: 50 - 5 == 45


/* =========================================================
     Part 3: Expressions - You Write Code!
*/

// Create a variable to calculate Brit's age
// The answer should read "Brit is 33 years old"
// The answer should not be written in a comment.
var born = 1983;
var today = 2016;

// Answers Below:
var britAge = today - born;


// Store some information following in variables.
var yourName;
var instructorName;

// Update the variables above so the expression reads correctly.
// Answers Below:

var yourName = "Terry Robinson";
var instructorName = "Brit Butler";

// Final Statement
var statement = yourName + " is taking a class at The Iron Yard. Their instructor's name is " + instructorName;
