const createTuple = (a, b, c, ...d) => {
    console.log(arguments); // arguments keyword, returns 'array like obj'
    // ['It', 'be', 'could', 'anyone', 'no one']
    return [[a, c], [b, d]];
};

createTuple('It', 'be', 'could', 'anyone', 'no one');
// => [['It', 'could'], ['be', ['anyone', 'no one']]]