// function groupAnimals(animals) {
//     // you can only write your code here!

//     animals.sort()
//     var result = []
//     var innerRes = [] 
//     var findLetter = animals[0][0]

//     for (initial = 0; initial < animals.length ; initial++) {
//         if(animals[initial][0] === findLetter){
//             innerRes.push(animals[initial])
//         } else {
//             result.push(innerRes)
//             findLetter = animals[initial][0]
//             innerRes = [animals[initial]]
//         } 
//     } result.push(innerRes)
//     return result
// }    

// TEST CASES
  console.log(groupAnimals( ['cacing', 'ayam', 'kuda', 'anoa', 'kancil'] ) );
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
//   console.log(groupAnimals( ['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ] ));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

  
  
function groupAnimals(animals) {
    // you can only write your code here!

    var result = []


    for (initial = 0 ; initial < animals.length ; initial++){
        var indikator = "yes"
        for (inRes = 0 ; inRes < result.length ; inRes++){
            // console.log(result[inRes][0]) ; break;
            if(result[inRes][0][0] === animals[initial][0]){
                result[inRes].push(animals[initial])
                indikator = "no"
                break;
            }
        } 
        if(indikator === "yes"){
            result.push([animals[initial]])
        } 
    } return result
}