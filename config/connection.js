//connect Node to MySql
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
 connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: "localhost", 	
  port: 3306,
  user: "root", 
  password: "hacktheplanet", 
  database: "todoagain_db" 
});

//jawsDB info for Heroku: host, user, pw, db
//tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com
//"i29477rb1dpha62z",
//h1up5hb7x528pers
//ej1v1qqxdkfeeg9g

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
//Export connection
module.exports = connection;
