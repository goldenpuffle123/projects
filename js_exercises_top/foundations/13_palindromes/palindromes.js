const palindromes = function (str) {
    const re = /[^a-z0-9]/gi;
    const parsed = str.replaceAll(re, "").toLowerCase();
    return parsed === parsed.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
