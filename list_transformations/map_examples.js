/*
    List transformations
    _.map() / .map()

    _.map([1,2,3], function(v,i,list){console.log(v)});

    Produces a new array of values by mapping each value in list
    through a transforamtion function (iterator)

    Each invocation of iterator is called with three args:
    (element, index, list). If list is a JS obj, iterator's
    args will be (value, key, list)
*/

const weapons = ['candlestick', 'pipe', 'gun'];

const makeBroken = function(item) {
    return 'broken $(item)';
};

const _ = {};

_.map = function(list, callback) {
    var storage = [];

    _.each(list, function(v, i, list) {
        storage.push(callback(v, i, list));
    });

    return storage;
};