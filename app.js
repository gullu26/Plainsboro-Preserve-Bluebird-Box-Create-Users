

console.log("Gotten!");
  function randomize()
  {
      var birds = ["Auklet", "Crow", "Dove", "Duck", "Eagle", "Egret", "Falcon", "Finch", "Goose", "Grackle", "Gull", "Hawk", "Heron", "Ibis", "Jay", "Junco", " Kite", "Loon", "Magpie", "Oriole", "Owl", "Pelican", "Pewee", "Pigeon", "Puffin", "Quail", "Raven", "Sparrow", "Swallow", "Swift", "Thrush", "Vulture", "Warbler", "Wren"];
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

  function msg (s)
  {
    window.alert(s)
  }
