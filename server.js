//DEPENDENCIES============
//require express
var express = require("express");
//require handlebars
var exphbs = require("express-handlebars");
//require bodyparser
var bodyParser = require("body-parser");
//require mysql
var mysql = require("mysql");
//require path
// var path = require("path");
var connection = require("./config/connection.js")

//process.env so port can be set by Heroku
var PORT = process.env.PORT || 3000;

//set the app
var app = express();

//Express.static mmiddleware serves static content for the app from public directory
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set Path: is this necessary?
// app.set("views", path.join(__dirname, "views"));

//enables handlebars as view engine in express; set handlebars as default templating engine
//layout is loaded first with main.handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// //ROUTES======================

// app.get('/', function(req, res) {
//     res.render('index',{
//       content:"This is some content"  
//     });
// });

//import routes and give server access, from controller
var routes = require("./controller/burgersController.js");
app.use(routes);

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});