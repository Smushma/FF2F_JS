/**
 * List Transformations
 */

Nesting
const game = {};
game['suspects'] = {};

game.suspects.push({
    name: "Rusty",
    color: "orange"
})
/////////////
const game = {
    'suspects': {}
}

const game = {
    'suspects': [
        {
            name: "Rusty",
            color: "orange"
        }, {
            name: "Miss Scarlet",
            color: "red"
        }
    ]
}

/*
    For loops
*/
//game[suspects] doesn't work
game["suspects"] // => [{name: "Rusty", color: "orange"}...]

function getColors() {
    for (var i = 0; i < game.suspects.length; i++) {
      console.log(game.suspects[i].color);
    }
  }
  
  getColors();

// Accessing object properties in list
var [first, second] = [games.suspects[0], games.suspects[1]];
var [{color: first}, {color: second}] = suspects;

/*
  .forEach() function
*/
function CreateSuspectObjects(name) {
    return {
      name: name,
      color: name.split(' ')[1],
      speak() {log("my name is $(name)");}
    };
  };
  
  var suspects = ["Miss Scarlet", "Colonel Mustard", "Mr.White"];
  
  var suspectsList = [];

  // var _ = require('underscore'); // Import
  // _.each(
  //   suspects, 
  //   function(name) {
  //     suspectsList.push(CreateSuspectObjects(name));
  //   }
  // );
  
  suspects.forEach(function(name) {
    suspectsList.push(CreateSuspectObjects(name))
    }
  );
  
  suspectsList;

/*
    iterates over a list of elements, passing the vals to a function

    Each invocation of iterator, the function is called with three args:
    (element, index, list)

    If list is a JS obj, iterator's args will be:
    (value, key, list)
*/

const _ = {};

_.each = function(list, callback) {
    if (Array.isArray(list)) { // Array
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i, list);
        }
    }
    else { // Object
        for (var key in list) {
            callback(list[key], key, list)
        }
    }
}

_.each(['sally', 'george', 'progie'], function(name, i, list) {
    if (list[i + 1]) {
        console.log(name, 'is younger than', list[i + 1])
    }
    else {
        console.log(name, 'is the oldest')
    }
})