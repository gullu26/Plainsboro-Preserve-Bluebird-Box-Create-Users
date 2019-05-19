function getEntries()
{
  var data = [];

  var names = [];
  var userIDs = [];

  var entries = [];

  console.log("hi")

  db.collection("data").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(entry)
      {
          var singleData = entry.data()
          var entry = []

          for (var key in singleData) {

            console.log(singleData)
            console.log(singleData[key])
              entry.push(singleData[key])

          }
          data.push(entry);
      });



      console.log(data);
      createExcel(data)



  });


}
















function createExcel(dataEntries)
{

  var wb = XLSX.utils.book_new();
  wb.Props =
  {
        Title: "SheetJS Tutorial",
        Subject: "Test",
        Author: "Red Stapler",
        CreatedDate: new Date(2017,12,19)
  };

  wb.SheetNames.push("Test Sheet");
  var ws_data = dataEntries;  //a row with 2 columns
  var ws = XLSX.utils.aoa_to_sheet(ws_data);
  wb.Sheets["Test Sheet"] = ws;
  var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
  function s2ab(s) {
              var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
              var view = new Uint8Array(buf);  //create uint8array as viewer
              for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
              return buf;
  }

  saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'test.xlsx');


}
