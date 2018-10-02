function pasanganTerbesar(num) {
    // you can only write your code here!
    num = String(num)
    var big1 = num[0] + num[1]
    for (i = 1; i < num.length; i++) {
        if (num[i] > big1) {
            big1 += num[i]
        }
    } return big1
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99