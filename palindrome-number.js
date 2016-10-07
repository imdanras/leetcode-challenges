// Determine whether an integer is a palindrome. Do this without extra space.

var isPalindrome = function (x) {
    // x = Math.abs(x);
    x = x.toString();

    for (var i = 0, j = x.length - 1; i < (Math.floor((x.length / 2))); i++ , j--) {
        if (x[i] !== x[j]) {
            return false;
        }
    }
    return true;
};