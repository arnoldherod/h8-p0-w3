
function dataHandling(input){

    for (inputLen = 0 ; inputLen < input.length ; inputLen++){
        for(arrayLen = 0 ; arrayLen < input[inputLen].length ; arrayLen++){
            if (arrayLen === 0){
                console.log("Nomor ID: " + input[inputLen][arrayLen])
            } else if (arrayLen === 1){
                console.log("Nama Lengkap: " + input[inputLen][arrayLen])
            } else if (arrayLen === 2){
                console.log("TTL: " + input[inputLen][2] + " " + input[inputLen][3])
            } else if (arrayLen === 4){
                console.log("Hobi: " + input[inputLen][arrayLen] + "\n")
            }
        }
    }
}

//contoh input
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

dataHandling(input)

/* Output
Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
*/