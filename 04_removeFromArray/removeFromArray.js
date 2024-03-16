const removeFromArray = function(array, ...rm) {
    result = [];
    array.forEach(element => {
        if(!rm.includes(element))
            result.push(element);
    });
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
