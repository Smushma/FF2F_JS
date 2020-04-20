/**
 * JS OBJECTS
 */

/*
  Property access
  Assignment with Dots
*/
// Primitives are passed by value
// They get their own space in mem 
// Objs are passed by reference
var person = {};
person.name = "Bob";

var container = {
  // "name" : "Alice" also works
  name : "Alice",
  age : 100,
  money : 123.24,
  gay : false
};

/*
  Arrays
*/
// "Arrays" are simply objects
// .length for "property access"
// .length() for "method access"
var person = [];
person.name = "Bob";

var who = person.name;
who;

typeof person === "array"; // Nope
typeof person === "object"; // Yep

/*
  Bracket Notation
*/
// Brackets for when we can't use the dot (.), when the value isn't a string literal e.g. person.0 is invalid
person[0] = "I am a learning JS";

// Internal representation
// person["Boo hoo"] points to ["Hoo boo"]
var cry = "Boo hoo";
person[cry] = "Hoo boo"; // "This" cry points to "Hoo boo" and doesn't change 'var cry' to "Hoo boo" 
// person["cry"] = "Hoo boo" // also works, but will not "print" if you don't do it explicitly (e.g. person[cry] will work but not person["cry"])
person.cry; // Property access can only be done with strings (e.g. if initalized as person.cry = "Boo hoo")

/*
  Non-Valid Chars
*/
var box = {};

box['material'] = "cardboard";
box[0] = 'meow';
box['^&*'] = "testing 123"; // Have to put quotes around weird chars 

var test = box['^&*'];

box = {
  "material" : "cardboard",
  "0" : "meow", //works like box[0]
  "^&*" : "testng 123"
}