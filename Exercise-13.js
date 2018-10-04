function targetTerdekat(arr) {
    // you can only write your code here!
    var xIndex = -1
    var oIndex = -1
    var jarak = 0

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            oIndex = i
        } else if (arr[i] === 'x') {
            xIndex = i
        }

        if (oIndex !== -1 && xIndex !== -1) {
            if (jarak === 0 || jarak > Math.abs(oIndex - xIndex)) {
                jarak = Math.abs(oIndex - xIndex)
            }
        }
    } return jarak
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2