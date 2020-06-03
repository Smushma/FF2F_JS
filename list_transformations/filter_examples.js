const _ = {};

_.filter = function(arr, callback) {
    const storage = [];

    // Version with .each
    // _.each(arr, function(val, i, list) {
    //     if (callback(val, i, list)) {
    //         storage.push(val);
    //     }
    // });

    for (let i = 0; i < arr.length; i++) {
        // check if cb returns true
        if (callback(arr[i], i, arr) === true) {
            // if true push into array
            storage.push(arr[i]);
        }
    }

    return storage;
};

//////////
const videoData = [
    {
        name: 'bob',
        present: true,
        rooms: [
            {kitchen: false},
            {'dining room': false}
        ]
    },

    {
        name: 'mob',
        present: false,
        rooms: [
            {kitchen: false},
            {'dining room': false}
        ]
    },

    {
        name: 'dob',
        present: true,
        rooms: [
            {kitchen: false},
            {'dining room': false}
        ]
    },
];

_.filter(videoData, function(suspectObject) {
    return suspectObject.present;
});