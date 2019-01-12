// Pull in required dependencies
var path = require('path');
var compare = require('./../data/compare.js')

// Import the list of friend entries
var friendsArray = require('../data/friends.js');

// Export API routes
module.exports = function (app) {

    // Total list of friend entries
    app.get("/api/surveys", function (req, res) {
        return res.json({ surveyOfFriends: friendsArray });
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
    app.post("/api/surveys", function (req, res) {

        var incomingPerson = req.body;
        friendsArray.push(incomingPerson);
        var questionsInArray = [];
        friendsArray.forEach(element => {
            questionsInArray.push(element.scores);
        });
        
        questionsInArray.pop();
        var finalArray = compare.findMatch(incomingPerson.scores, questionsInArray);
        var match = compare.leastMatch(finalArray);
        console.log(finalArray);
        console.log(match);
        res.send(friendsArray[match[0]]);
    });

}