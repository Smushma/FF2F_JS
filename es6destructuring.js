/**
 * ES6 destructuring
 */

/*
    ARRAYS
*/
// Variable declarations
// target = source;
const [first, second] = [true, false];
let [first, second] = [true, false];
var [first, second] = [true, false];

/*
    Example of legal usages
*/
const [a, b, c] = [true, false]; 

arr = [1, 2, 3];
proof = arr[3];

// Can change properties, but not reassigning name
const obj = {x : 1, y : "derp"}; 
obj.x = 500; // legal
obj = {}; // illegal

// What if we want properties to be constant as well?
Object.freeze(obj);
obj.x = 1000;

/*
    OBJECTS
*/
// Variable declarations
// target = source;
const {first, second} = {first: 0, second: 1};
let {first, second} = {first: 0, second: 1};
var {first, second} = {first: 0, second: 1};


/*
    More examples, ARRAYS
*/
var [a, b] = [1, 2];
console.log(a, b); // => 1 2

// Omit certain values
var [a, , b] = [1, 2, 3];
console.log (a, b); // => 1, 3

// Combine with spread/rest operator
// (accumulates the rest of the values)
var [a, ...b] = [1, 2, 3];
console.log(a, b); // => 1 [2, 3]

// Swap vars easily without temp
var a = 1, b = 2;
// var temp = a
// a = b
// b = temp
[b, a] = [a, b];
console.log(a, b);

// Advance deep arrays
var [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]];
console.log("a:", a, "b:", b, "c:", c, "d:", d);
// => a: 1 b: 2 c: [ [ 3, 4 ], 5 ] d: 6

/*
    More examples, OBJECTS
*/
var {user: x} = {user: 5};
console.log(x); // => 5

// Fail-safe
var {user: x} = {user2: 5};
console.log(x); // => undefined

// More values
var {prop: x, prop2: y} = {prop: 5, prop2: 10}; // => 5 10

// Short-hand syntax
var {prop, prop2} = {prop: 5, prop2: 10}; // => 5 10

// Equal to:
var {prop: prop, prop2: prop2} = {prop: 5, prop2: 10};
console.log(prop, prop2); // => 5 10

// Interesting syntax to note:
/*
    // Invalid
    var a, b;
    {a, b} = {a: 1, b: 2};

    // Valid
    var a, b;
    ({a, b} = {a: 1, b:2});
    console.log(a, b); // => 1 2
*/

// Deep Objects
var {
    prop: x,
    prop2: {
        prop2: {
            nested: [ , , b]
        }
    }
} = { prop: "Hello", prop2: { prop2: { nested: ["a", "b", "c"]}}};
console.log(x, b) // => Hello 

// Using as method parameters
var foo = function({prop: x}) {
    console.log(x);
}

foo({invalid: 1}); // => undefined
foo({prop: 1}); // => 1