function dataHandling2(arr){
    var arrLen = 0
    for (arrLen = 0; arrLen < arr.length ; arrLen++){
        if (arrLen === 1){
            arr.splice(arrLen, 1, "Roman Alamsyah Elsharawy")
        } else if (arrLen === 2){
            arr.splice(arrLen,1,"Provinsi Bandar Lampung")    
        } else if (arrLen === 4){
            arr.splice(arrLen,1,"Pria", "SMA Internasional Metro")
        }
    } console.log(arr)
    
    var splitDate = arr[3].split("/")
    switch(splitDate[1]){
        case "05": arr[3] = "May"; break;
        }
        console.log(splitDate[1]) 
    }
// for (i = 0 ; i < arr[3].length ; i++){
//     if (i === 1){
//         arr[3] = arr[3].split("/")
//         var month = arr[3][1]
//         switch(month){
//             case 01: arr[3] = "January" ; break;
//             case 02: arr[3] = "February" ; break;
//             case 03: arr[3] = "March" ; break;
//             case 04: arr[3] = "April"; break;
//             case 05: {console.log("May") ; break;}
//             case 06: arr[3] = "June" ; break;
//             case 07: arr[3] = "July" ; break;
//             case 08: arr[3] = "August" ; break;
//             case 09: arr[3] = "September" ; break;
//             case 10: arr[3] = "October" ; break;
//             case 11: arr[3] = "November" ; break;
//             case 12: arr[3] = "December" ; break;
//         }
    // }  
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);



/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */