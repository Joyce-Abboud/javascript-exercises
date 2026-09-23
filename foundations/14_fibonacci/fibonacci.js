let total = 0;
const fibonacci = function (n) {
    n = parseInt(n);
    if (n < 0) {
        return "OOPS";
    } else if (n < 2) {
        total += n;
        return n;
    } else {
        return (fibonacci(n - 1) + fibonacci(n - 2));
    }
};

// Do not edit below this line
module.exports = fibonacci;
