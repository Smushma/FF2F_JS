const consider = (name) => {
    return `I think it could be... ${name}`;
}

const exclaim = (statement) => {
    return `${statement.toUpperCase()}!`;
}

const blame = _.compose(consider, exclaim);

blame(you); // => 'I think iy could be... YOU!'