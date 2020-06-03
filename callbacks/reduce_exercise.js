const reduce = function (list, cb, initial) {
    let accumulator = initial;
    
    for (let i = 0; i < list.length; i++) {
        if (i === 0 && accumulator === undefined)
            accumulator = list[0];
        else
            accumulator = cb(list[i], accumulator);
    }

    return accumulator;
};

reduce([2, 3, 5], (v, sum) => v + sum, 0);
reduce([2, 3, 5], (v, sum) => v + sum);