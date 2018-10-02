function angkaPalindrome(num) {
    // you can only write your code here!
    var len = String(num).length;
    for (var i = 0; i < len / 2; i++) {
        if (num[i] !== num[len - 1 - i]) {
            return false;
        }
    } return true;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001