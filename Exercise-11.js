function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var constant = arr[1] - arr[0]
    for (i = 0; i <= arr.length - 2; i++) {
        console.log(arr[i + 1] - arr[i] === constant)
        // ask how to return the whole value and not each values
        // returning will only give 1st and last value only.
        // another loop to check if the results are all true/not? how?
    }
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false

