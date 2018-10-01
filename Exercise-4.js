function dataHandling2(arr) {
  var arrLen = 0;
  for (arrLen = 0; arrLen < arr.length; arrLen++) {
    if (arrLen === 1) {
      arr.splice(arrLen, 1, "Roman Alamsyah Elsharawy");
    } else if (arrLen === 2) {
      arr.splice(arrLen, 1, "Provinsi Bandar Lampung");
    } else if (arrLen === 4) {
      arr.splice(arrLen, 1, "Pria", "SMA Internasional Metro");
    }
  }
  console.log(arr);

  var splitDate = arr[3].split("/");
  switch (splitDate[1]) {
    case "01":
      console.log("January");
      break;
    case "02":
      console.log("February");
      break;
    case "03":
      console.log("March");
      break;
    case "04":
      console.log("April");
      break;
    case "05":
      console.log("May");
      break;
    case "06":
      console.log("June");
      break;
    case "07":
      console.log("July");
      break;
    case "08":
      console.log("August");
      break;
    case "09":
      console.log("September");
      break;
    case "10":
      console.log("October");
      break;
    case "12":
      console.log("November");
      break;
    case "11":
      console.log("December");
      break;
  }
  console.log(
    splitDate.sort(function(a, b) {
      return parseInt(a) < parseInt(b);
    })
  );
  console.log(arr[3].split("/").join("-"));
  if (arr[1].length > 15) {
    var slicedName = arr[1].slice(0, 14);
    console.log(slicedName);
  }
}

var input = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca"
];
dataHandling2(input);

/*
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
