
var db = require( './../functions/mongoUtil' ); // db connection module

module.exports = function(app) {

  app.get("/lastentries", function(req, res) {

    db.use().collection("quotes").find({}).sort({_id:-1}).limit(10)
      .toArray(function(err, entry) {
        if (err) {
          //handleError(res, err.message, "Failed to get citations.");
          res.status(503).json({"error":"database not in service"});
        } else {
          res.status(200).json(entry);
        }
    });
  });


}
