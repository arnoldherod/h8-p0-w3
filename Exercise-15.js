function groupAnimals(animals) {
    // you can only write your code here!
    
    var result = []

    for (initial = 0; initial < animals.length ; initial++){
        var newLetter = []
        if (initial === 0){
            result.push([animals[0]]) // console.log(result) = ['cacing']
        } else{
            for (resCounter = 0 ; resCounter < result.length ; resCounter++){
            // if huruf pertama dari array[initial]sama, push value ke dalem array dengan huruf sama
            // kalau beda
                // check selanjutnya if ada yang sama ga di dalam array yang huruf sama, kalau ada push
                // kalau ga ada make new array
                if (result[resCounter][0] === animals[initial][0]){
                    result[resCounter].push(animals[initial])
                }
                else {
                    newLetter.push([animals[initial]])
                } 
            }
        } result.push(newLetter)
    } return result
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
//   console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
//   // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]