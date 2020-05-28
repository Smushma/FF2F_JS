_.curry(func, [arity=func.length])

var abc = function(a, b, c) {
    return [a, b, c]
}

var curried = _.curry(abc)

curried(1)(2)(3) // => [1, 2, 3]
curried(1, 2)(3) // => [1, 2, 3]