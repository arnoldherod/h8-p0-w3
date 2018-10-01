function balikString(str){
    var empty = ""
    for (i = str.length-1 ; i >= 0 ; i--){
        empty += str[i]
    }    console.log(empty) 
}

balikString("Hello World!")