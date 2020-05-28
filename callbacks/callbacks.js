/*
    Higher order functions & callbacks
*/

// 1. Takes a function as an input (argument)
element.addEventListener("change", () => {
    console.log("Our evidence is updated")
})

// 2. Returns a function as the output
const newClue = (name) => {
    const length = name.length;

    return (weapon) => {
        let clue = length + weapon.length
        return !!(clue % 1)
    }
}

// Callbakcs
const ifElse = (condition, isTrue, isFalse) => {
    return condition ? isTrue : isFalse
}

ifElse(true, 
    () => { console.log(true) }, // this will be evoked
    () => { console.log(false) }
)

// Passing arguments
var increment = function(n) { return n + 1 }

var square = function(n) { return n * n }

var doMath = function(n, func) { return func(n) }

doMath(5, square) // 25
doMath(4, increment) // 5

// Translation of above to ES6
const increment = n => { return n + 1 }
const increment = n => { return n * n }
const doMath = (n, func) => {return func(n) }

// Passing arguments pt. 2
// Situation in which functions require a parameter
const ifElse = (condition, isTrue, isFalse, example) => {
    return condition ? isTrue(example) : isFalse(example)
}

ifElse(true, fun1, fun2, "example")

// Multiple params/args
const ifElse = (condition, isTrue, isFalse, ...args) => {
    console.log(args) // ["one", "two", "three"]
    return condition ? isTrue(...args) : isFalse(...args)
}

ifElse(true, fun1, fun2, "one", "two", "three")

// Before ES6
const args = [].slice.call(arguments, 3)
return condition ? isTrue.apply(this, args) : isFalse.apply(this, args)