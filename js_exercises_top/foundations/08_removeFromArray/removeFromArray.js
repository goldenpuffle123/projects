const removeFromArray = function(arr, ...nums) {
    return arr.filter(
        (elem) => !(nums.includes(elem))
    );
};

// Do not edit below this line
module.exports = removeFromArray;
