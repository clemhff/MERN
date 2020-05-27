const express = require('express');
const app = express();
const mongodb = require("mongodb");
const path = require('path');
const bodyParser = require('body-parser');

const env = require('./config/env'); // port
const db = require( './functions/mongoUtil' ); // db connection module

const resume = require('./routes/resume'); // routes from resume.js
const CRUD_Quotes = require('./routes/CRUD_Quotes'); // routes from resume.js

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  next();
});

app.use(bodyParser.json())


// Connect to the database before starting the application server.
db.connectDb( function( err, client ) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || env.port, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});


// URL routing
resume (app);
CRUD_Quotes (app);
