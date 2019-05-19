

console.log("Gotten!");
  function randomize()
  {
      var birds = ["Auklet", "Crow", "Dove", "Duck", "Eagle", "Egret", "Falcon", "Finch", "Goose", "Grackle", "Gull", "Hawk", "Heron", "Ibis", "Jay", "Junco", "Kite", "Loon", "Magpie", "Oriole", "Owl", "Pelican", "Pewee", "Pigeon", "Puffin", "Quail", "Raven", "Sparrow", "Swallow", "Swift", "Thrush", "Vulture", "Warbler", "Wren"];
      var bird = birds[Math.floor(Math.random() * birds.length)].toLowerCase();
      var number = Math.floor(Math.random() * 90 + 10);
      var id = bird + "" + number


      document.getElementById('id').value = id


  }

  function createUser ()
  {

    id = document.getElementById('id').value
    name = document.getElementById('name').value

    if (id == "" || name == "")
    {
      msg("Fill all fields!")
      return
    }

    db.collection("users").doc(id).get().then(function(doc) {
        if (doc.exists) {
            console.log("Already Exists...");
            msg("This ID alsready exists, choose another");

        } else {
            // doc.data() will be undefined in this case
            console.log("This is a new ID");
            db.collection("users").doc(id).set({
                name: name

            })
            .then(function() {
                console.log("Document successfully written!");
                msg("Welcome, " + id + "!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
                msg("Error writing document: ", error);
            });


        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
        msg("Error getting document:", error);


    });

  }












  // var i;
  // var j;
  // var k=0;
  // var l=-1
  //
  // for (i = 0; i < entries.length; i++) { //for each user
  //     for (j = 0; j < entries[i].length; j++) { //for each day the user logged
  //       db.collection("users").doc(userIDs[i]).collection("1").doc(j).collection("Entries").get().then(function(querySnapshot) {
  //
  //
  //           querySnapshot.forEach(function(entry)
  //           {
  //               console.log(entry.data());
  //       console.log(entry.data());
  //       //var boxNum = entry.data().Box Number
  //       var activity = entry.data().Sun
  //       var nest = entry.data().Temperature
  //       var species = entry.data().Wind
  //       var eggs = entry.data().Wind
  //       var nestlings = entry.data().Wind
  //
  //           });
  //       });
  //
  //
  //     }
  //
  //
  // }




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
    var ws_data = dataArray;  //a row with 2 columns
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

  function msg (s)
  {
    window.alert(s)
  }
