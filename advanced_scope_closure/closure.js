// Creates an alert dialog
const myAlert = () => {
    const x = "Help! I think I found a clue!";

    const alerter = () => {
        alert(x);
    };

    setTimeout(alerter, 1000);
    console.log('What happens first? This log or the alert?'); // log, asynchronous call on alerter
};

myAlert();

// Creating closure
const myAlert = () => {
    const x = "Help! I think I found a clue!";
    let count = 0;

    const alerter = () => {
        alert(`${x} ${++count}`);
    };

    return alerter; // returns body of function
};

const funcAlert = myAlert();
const funcAlert2 = myAlert();
// Retains value in parent scope
funcAlert(); // => "Help! I think I found a clue! 1"
funcAlert(); // => "Help! I think I found a clue! 2"

// Closure demo
const newClue = (name) => {
    const length = name.length; // 'Green' assigned

    return (weapon) => { // Weapons passed into this func with didGreenDoItWithA()
        let clue = length + weapon.length;
        return !!(clue % 1);
    };
};

const didGreenDoItWithA = newClue('Green');
didGreenDoItWithA('candlestick'); // => false
didGreenDoItWithA('lead pipe'); // => false

// Another ex
function countClues() {
    var n = 0;

    return {
        count: function() { return ++n },
        reset: function() { return n = 0 }
    };
};

const counter = countClues();
const counter2 = countClues();

counter.count(); // => 1
counter.count(); // => 2
counter.count(); // => 3
counter.count(); // => 4
counter.count(); // => 5
counter.reset(); // => 0

// ES6 equiv
const countClues = () => {
    let n = 0;

    return {
        count: () => n++,
        reset: () => n = 0
    };
};

// Another ex
const findSomeone = () => {
    const speak = () => {
        console.log(who);
    };

    let who = 'Why hello there, Prof Plum!';

    return speak;
};

const someoneSpeak = findSomeone();
someoneSpeak(); // => 'Why hello there, Prof Plum!'

// Another ex
const makeTimer = () => {
    let elapsed = 0;

    const stopwatch = () => { return elapsed; };

    const increase = () => elapsed++;

    setInterval(increase, 1000);

    return stopwatch;
};

let timer = makeTimer();
timer(); // => returns amount of time passed since we called function e.g. 54 secs
