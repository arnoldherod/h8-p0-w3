function nextPalindrome(n) {
    // first we create a function to check if a single number is a palindrome
    function isPalindrome(num) {
      var forward = num.toString();
      let backward = [];
      for (i = forward.length - 1 ; i >= 0 ; i--) {
        backward.push(forward[i]);
      }
      backward = backward.join('');
      return forward === backward;
    }
    // now let's create a counter variable to increment our number (n)
    // we'll initialize it as n + 1 since we know we're not going to check the first number
    let countUp = n + 1;
    // we also need a nextPalindrome variable
    let nextP;
    // now we need to begin some sort of loop
    // perhaps a while loop will do
    while (true) {
      if (isPalindrome(countUp)) {
        return countUp;
      } else {
        countUp += 1;
      }
    }
  
  }

  console.log(nextPalindrome(999))
  console.log(nextPalindrome(144640))