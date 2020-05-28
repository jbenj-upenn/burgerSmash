var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burgers = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgers.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burgers.create([
    "burger_name", "smashed"
  ], [
    req.body.name, req.body.smashed
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ burgers });
  });
});

router.put("/api/burgers/:smashed", function(req, res) {
  var condition = "smashed = " + req.params.shashed;

  console.log("condition", condition);

  burgers.update({
    smashed: req.body.smashed
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows changed, 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });   
});

//NO DELETE FUNCTION NECESSARY

// router.delete("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   burger.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;