// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends and their survey data, etc.
// ===============================================================================

var friendData = require("../data/friends");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

 // *** THIS APPEARS TO BE THE LINK TO THE API "FRIENDS" LINK

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });





  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  // *** SENDS DATA BACK TO THE SURVEY PAGE 

  app.post("/api/friends", function(req, res) {
    console.log(req.body);

    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware

// MAGIC HAPPENS
// compare user's data to all of current friends
// find best match using total diff
// take match
var smallestDiff = 10000;
var friendIndex;
// for loop embedded in for loop
for (var i=0; i<friendData.length; i++) {
// console.log(friendData[i].scores);
var friendTotal = 0;
var myTotal = 0;
for (var j=0; j<friendData[i].scores.length; j++) {
friendTotal += friendData[i].scores[j];
myTotal += parseInt(req.body.scores[j]);
}
console.log(friendTotal);
console.log(myTotal);
if (myTotal - friendTotal < smallestDiff){
  smallestDiff = (myTotal - friendTotal);
  friendIndex = i;
}
console.log(req.body.scores);
console.log(friendData[friendIndex]);
}
friendData.push(req.body);
res.json(friendData[friendIndex]);

  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendData = [];

    console.log(friendData);
  });
};
