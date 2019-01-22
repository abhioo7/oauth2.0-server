// Load required packages
var Utility = require('../models/utility');

// Create endpoint /api/beers for POST
exports.postUtilities = function(req, res) {
  // Create a new instance of the Beer model
  var utility = new Utility();

  // Set the beer properties that came from the POST data
  utility.name = req.body.name;
  utility.type = req.body.type;
  utility.quantity = req.body.quantity;
  utility.userId = req.user._id;

  // Save the beer and check for errors
  utility.save(function(err) {
    if (err)
      return res.send(err);

    res.json({ message: 'Utiities added to the locker!', data: utility });
  });
};

// Create endpoint /api/beers for GET
exports.getUtilities = function(req, res) {
  // Use the Beer model to find all beer
Utility.find({ userId: req.user._id }, function(err, utilities) {
    if (err)
      return res.send(err);

    res.json(utilities);
  });
};

// Create endpoint /api/beers/:beer_id for GET
exports.getUtility = function(req, res) {
  // Use the Beer model to find a specific beer
Utility.find({ userId: req.user._id, _id: req.params.utility_id }, function(err,utility) {
    if (err)
      return res.send(err);

    res.json(utility);
  });
};

// Create endpoint /api/beers/:beer_id for PUT
exports.putUtility = function(req, res) {
  // Use the Beer model to find a specific beer
  Utility.update({ userId: req.user._id, _id: req.params.utility_id }, { quantity: req.body.quantity }, function(err, num, raw) {
    if (err)
      return res.send(err);

    res.json({ message: num + ' updated' });
  });
};

// Create endpoint /api/beers/:beer_id for DELETE
exports.deleteUtility = function(req, res) {
  // Use the Beer model to find a specific beer and remove it
Utility.remove({ userId: req.user._id, _id: req.params.utility_id }, function(err) {
    if (err)
      return res.send(err);

    res.json({ message: 'Utility removed from the locker!' });
  });
};
