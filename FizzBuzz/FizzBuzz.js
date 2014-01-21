var file = require('fs'),
    opts = {
        encoding: 'utf8',
        flag: 'r'
    },
    fizzFile = process.argv[2],
    outputNumLine = [],
    digits,
    a,
    b,
    range;

function findDigits(str) {
    var regX = /(\d+)/g;
    return str.match(regX);
}

function isFizzBuzz(num, f, b) {
    // find out if the num is Fizz
    if (num % f === 0 && num % b === 0) {
        outputNumLine.push('FB');
        return;
    }

    if (num % f === 0 && num % b !== 0) {
        outputNumLine.push('F');
        return;
    }

    if (num % f !== 0 && num % b === 0) {
        outputNumLine.push('B');
        return;
    }

    outputNumLine.push(num);
    return;
}

function findFizzBuzz(f, b, ran) {
    var i;
    for (i = 1; i <= ran; i++) {
        isFizzBuzz(i, f, b);
    }
}

function fizzBuzz(numArray) {
    for (var i = 0; i < numArray.length;) {
        a = numArray[i];
        b = numArray[i + 1];
        range = numArray[i + 2];

        findFizzBuzz(a, b, range);
        i += 3;
        console.log(outputNumLine.toString().replace(/,/g, " "));
        outputNumLine = [];
    }
}

file.readFile(fizzFile, opts, function(err, data) {
    var str_arr = data.toString().replace(/\r/gm, "")
    if (err) {
        throw err;
    }

    digits = findDigits(str_arr);

    fizzBuzz(digits);
});