var mysql = require("mysql");
var inquirer = require("inquirer");
// var cTable = require("console.table");

var con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Lovenepal1@",
  database: "Employee",
  multipleStatements: true,
});
//establishing connection, confirming success/failure
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected as id " + con.threadId + "\n");
  HomeView();
});