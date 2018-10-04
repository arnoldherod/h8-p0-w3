function angkaPalindrome(num) {
    // you can only write your code here!

    function isPalindrome(num) {
        var forward = num.toString();
        var backward = [];
        for (i = forward.length; i >= 0; i--) {
            backward.push(forward[i]);
        }
        backward = backward.join('');
        return forward === backward;
    }
    var countUp = num + 1;

    while (true) {
        if (isPalindrome(countUp)) {
            return countUp;
        } else {
            countUp += 1;
        }
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001