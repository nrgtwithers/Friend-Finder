// Pull in required dependencies
var path = require('path');

// Import the list of friend entries
var friends = require('../data/friends.js');

// Export API routes
module.exports = function (app) {
    // console.log('___ENTER apiRoutes.js___');

    // Total list of friend entries
    app.get("/api/surveys", function (req, res) {
        return res.json(survey);
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

}