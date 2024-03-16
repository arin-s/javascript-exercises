const sumAll = function(...args) {
    //Check each args for valid type, size and value then sort the array.
    if(args.length != 2) {
        return "ERROR";
    }
    for(i in args) {
        if(typeof args[i] !== "number")
            return "ERROR";
        if(args[i] < 0)
            return "ERROR";
    }
    args = args.sort();
    //
    let result = 0;
    for(let i = args[0]; i <= args[1]; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
