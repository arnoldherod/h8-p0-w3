function angkaPalindrome(num) {
    // you can only write your code here!
    var len = String(num).length
    var midPoint = len/2
    var strRes = ''

    if(num >= 9){
        for (var i = 0; i < midPoint; i++) {
            if (num[i] !== num[len - 1 - i]) {
                strRes += num[i]
                var midInt = Number(num[midPoint]) + 1
                res = strRes + midInt + strRes
                return number(res);
            }
        } 
    } else {
        return num+1
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001