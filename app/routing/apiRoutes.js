// Pull in required dependencies
var path = require('path');
var compare = require('./../data/compare.js')

// Import the list of friend entries
var friendsArray = require('../data/friends.js');

// Export API routes
module.exports = function (app) {

    // Total list of friend entries
    app.get("/api/surveys", function (req, res) {
        return res.json({surveyOfFriends: friendsArray});
    });

    // Displays a single character, or returns false
    app.get("/api/surveys/:survey", function (req, res) {
        var chosen = req.params.survey;

        console.log(chosen);

        for (var i = 0; i < survey.length; i++) {
            if (chosen === survey[i].routeName) {
                return res.json(survey[i]);
            }
        }

        return res.json(false);
    });
    // Create New friend array - takes in JSON input
app.post("/api/surveys", function(req, res) {
  
    var userInput = req.body;
    var incoming = req.body.scores;
    // console.log(incoming)
    // console.log(userInput);
    var questions = []
    friendsArray.forEach(element =>{
        questions.push(element.scores)
    })
    var finalArray = compare.findMatch(incoming.scores, questions)
    var match = compare.leastMatch(finalArray)
    console.log(finalArray)
    friendsArray.push(userInput);
  
    res.json(userInput);
  });

}