function palindrome(kata) {
    // you can only write your code here!
    var end = kata.length-1
    for (i = 0; i < kata.length && end > 0; i++ && end--){
        if (i !== Math.floor((kata.length/2)) || end !== Math.floor((kata.length/2)))
        return kata[i] === kata[end]
    } 
}
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false
  console.log(palindrome('abcdea')); // FALSE



  /*

  SPLIT dari sebelum floor(length/2) if same with AFTER floor(length/2) then true
*/