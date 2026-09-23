const palindromes = function (str) {
    const text = str.toLowerCase().replace(/[^\w]/g, "").trim();
    const reversed = text.split("").reverse().join("");
    if (reversed === text) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
