var game = {};
// var game = []; // following code would still work

game.murderer = "???";

// game["weapons"] = ["projectile", "blunt", "sharp"];
game["weapons"] = [
    // Objs have key & value for easier access
    {type: "projectile", location: "armory"},
    {type: "blunt", location: "cave"},
    {type: "sharp", location: "kitchen"}
];

game.characters = [];
game.characters[0] = "Bob";
game.characters.push("Alice");

//Object.keys(game)[0]

/*
    What is the difference between dot and bracket notation?

    Dots                Brackets
    strings[X]          strings[X]
    numbers[]           numbers[X]
    quotations[]        quotations[X]
    weird chars[]       weird chars[X]
    expressions[]       expressions[X]

    How do you add a property with a key that contains special chars?
    -Put it in quotes.

    How do you add a property whose key and values are stored in different variables?

    How do we loop through objects to access the values?
*/

/*
    ES6 Destructuring === Arrays
*/
// Create an obj that looks like this {"name": "Rusty", "weapon": "knife", "room": "kitchen"}
const {name, weapon, room} = {"name": "Rusty", "weapon": "knife", "room": "kitchen"};
// name -> "Rusty"
// weapon -> "knife"
// room -> "kitchen"
// This is equivalent to:
// someObj = {"name": "Rusty", "weapon": "knife", "room": "kitchen"};
// const name = someObj.name; etc.