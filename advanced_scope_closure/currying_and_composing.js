// Curry
const curry = (fn) => { // abc 
    return (arg) => { // 1
        return (arg2) => { // 2
            return fn(arg, arg2)
        }
    }
}

var abc = function(a, b) {
    return [a, b]
}

var curried = curry(abc)

curried(1)(2) // => [1, 2]

// Compose
const compose = (fn, fn2) => {
    return (arg) => {
        const result = fn2(arg)
        return fn(result)
    }
}

const consider = (name) => {
    return `I think it could be... ${name}`
}

const exclaim = (statement) => {
    return `${statement.toUpperCase()}!`
}

const blame = compose(consider, exclaim)

blame('you') // "I think it could be... YOU!"