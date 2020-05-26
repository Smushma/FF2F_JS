// 'this' keyword associated with functions, but can lose value
// thru async functions or nested funcs
// Write an explicit return function for arrow funcs

// function() keyword replaced by arrows
// single params do not need to be wrapped w/ parenthesis
// one line, don't have to wrap in curly brackets
// They don't have a 'this', they reach into parent scope to grab values
// replaces .bind, self = this

var nameImprover = (name, adj) => {
    return `Col ${name} Mc ${adj} pants`
}

$('body').hide();

myArr.forEach(val => console.log(val))

$('button').on('click', () => {
    console.log('Don\'t press my buttons!')
})