function pasanganTerbesar(num) {
    // you can only write your code here!
    var big1 = 0
    var comp = ''
    num =  String(num)

    for (i = 0 ; i < num.length ; i++){
        if(i <= num.length-2){
            comp = num[i] + num[i+1]
            if (big1 < comp){
                big1 = comp
            }
        }
    } return(big1)
} 
  
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99