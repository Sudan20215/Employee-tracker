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
function HomeView() {
    inquirer
      .prompt([
        {
          message: "Whate would you like to do? (Use arrow keys)",
          type: "list",
          choices: [
            "View all Employee",
            "View All Employee By Department",
            "View All Employees By Role",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Update Employee Manager",
            "View the total utilized budget of a department",
            "Exit\n",
          ],
          name: "task",
        },
      ])
      .then(function (answer) {
        var task = answer.task;
        switch (task) {
          case "View all Employee":
            DetailTableView();
            break;
          case "View All Employee By Department":
            EmployeeByDepartment();
            break;
          case "View All Employees By Role":
            viewEmployeeByRole();
            break;
          case "Add Employee":
            addEmployee();
            break;
          case "Remove Employee":
            deleteEmployee();
            break;
          case "Update Employee Role":
            updateEmployeeRole();
            break;
          case "Update Employee Manager":
            updateEmployeeManager() 
            break;
          case "Add Roles":
            addRole();
            break;
          case "View the total utilized budget of a department":
            viewTotalUtilizedBudget()
            break;
          case "Exit \n":
            exit();
            break;
        }
      });
  }  