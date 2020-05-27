var db = require( './../functions/mongoUtil' ); // db connection module
const ObjectId = db.obj(); // ObjectID

module.exports = function(app) {


  // GET Quote
  app.get("/quote/:id", function(req, res) {
    db.use().collection('quotes').findOne({ _id: ObjectId(req.params.id) }, function(err, doc) {
      if (err) {
        res.status(503).json({"error":"database not in service"});
      }
      else if (doc !== null) {
        res.status(200).json(doc);
      }
      else{
        res.status(400).json({"error":"This ID does not exist"});
      }
    });
  });


  //POST quote
  app.post("/quote", function(req, res) {
    var newCitation = req.body;
    newCitation.createDate = new Date();
    if (!(req.body.quote && req.body.author)) {
      handleError(res, "Invalid user input", "Must provide a citation and an author.", 400);
    }
    else {db.use().collection('quotes').insertOne(newCitation, function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to create new citation.");
      } else {
        console.log(JSON.stringify(doc.ops[0]));
        res.status(201).json(doc.ops[0]);
      }
    })};
  });


  // PUT Quote
  app.put("/quote/:id", function(req, res) {
    var updateDoc = req.body;
    delete updateDoc._id;
    db.use().collection('quotes').updateOne({_id: new ObjectId(req.params.id)}, {$set: updateDoc}, function(err, doc) {
      if (err) {
        res.status(503).json({"error":"database not in service"});
      }
      else if (doc !== null) {
        res.status(200).json(doc);
      }
      else{
        res.status(400).json({"error":"This ID does not exist"});
      }
    });
  });


  // DELETE Quote
  app.delete("/quote/:id", function(req, res) {
  db.use().collection('quotes').deleteOne({_id: ObjectId(req.params.id)}, function(err, result) {
    if (err) {
      res.status(503).json({"error":"database not in service"});
    } else {
      res.status(204).end();
    }
  });
});

}
