function palindrome(kata) {
    // you can only write your code here!
    var len = kata.length;
    for (var i = 0; i < len / 2; i++) {
        if (kata[i] !== kata[len - 1 - i]) {
            return false;
        }
    } return true;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false