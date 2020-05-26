const constructArr = function() {
    const arr = Array.prototype.slice.call(arguments)
    // const arr = Array.from(arguments) // another way
    // ['was', 'it', 'in]
    arr.push('the billiards room?')
    // ['was', 'it', 'in', 'the billiards room?']
    return arr.join(' ')
}

constructArr('was', 'it', 'in')
// "was it in the billiards room?"

// Exercise: implement from()
const from = arr => {
    return Array.prototype.slice.call(arr)
}

/*
    FUNCTIONS ARE ALSO OBJECTS!
*/
const add = function(a, b) {
    return a + b;
}

add.example = 'testing 123!'
add(1, 2) // => 3
add("hello ", "world!") // => "hello world!"