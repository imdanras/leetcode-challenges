// Given two strings s and t which consist of only lowercase letters.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Find the letter that was added in t.

var findTheDifference = function (s, t) {

    s = s.split('').sort().join('');
    t = t.split('').sort().join('');

    for (var i = 0; i < s.length; i++) {
        if (s[i] !== t[i]) {
            return t[i];
        }
    }
    return t[t.length - 1];
};