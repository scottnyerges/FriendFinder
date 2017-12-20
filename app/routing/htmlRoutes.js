// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

// ===============================================================================
// DEPENDENCIES
var path = require("path");

// ROUTING
module.exports = function(app) {
  
// HTML GET Requests

// THIS CALLS THE SURVEY PAGE (button)
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // *** THIS IS THE LINK TO THE API FRIENDS LIST (i think)

    app.get("/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/data/friends.js"));
  });

// DEFAULT
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};
