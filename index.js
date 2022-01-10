const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Team = [];

function init() {
  newManager();
}

function newManager() {
  inquirer
    .prompt([
      {
        type: "text",
        name: "name",
        message: "Enter the team managers name:",
      },
      {
        type: "text",
        name: "id",
        message: "Enter the team managers employee id:",
      },
      {
        type: "text",
        name: "email",
        message: "Enter the team managers email:",
      },
    ])
    // destructure name from the prompt object
    .then(({ name, id, email }) => {
      this.Manager = new Manager(name, id, email);
      Team.push(this.Manager);
      newEmployee();
      //this.startNewBattle();
    });
}

function newEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "confirmAddEmployee",
        message: "What would you like to do?",
        choices: ["Add Engineer", "Add Intern", "Im Finished"],
      },
    ])
    .then(({ confirmAddEmployee }) => {
      if (confirmAddEmployee === "Add Engineer") {
        newEngineer();
      } else if (confirmAddEmployee === "Add Intern") {
        newIntern();
      } else if (confirmAddEmployee === "Im Finished") {
        console.log(Team);
      }
    });
}

function newEngineer() {
  inquirer
    .prompt([
      {
        type: "text",
        name: "name",
        message: "Enter the team engineers name:",
      },
      {
        type: "text",
        name: "id",
        message: "Enter the team engineers employee id:",
      },
      {
        type: "text",
        name: "email",
        message: "Enter the team engineers email:",
      },
      {
        type: "text",
        name: "github",
        message: "Enter the team engineers github username:",
      },
    ])
    // destructure name from the prompt object
    .then(({ name, id, email, github }) => {
      this.Engineer = new Engineer(name, id, email, github);
      Team.push(this.Engineer);
      newEmployee();
    });
}

function newIntern() {
  inquirer
    .prompt([
      {
        type: "text",
        name: "name",
        message: "Enter the team interns name:",
      },
      {
        type: "text",
        name: "id",
        message: "Enter the team interns employee id:",
      },
      {
        type: "text",
        name: "email",
        message: "Enter the team interns email:",
      },
      {
        type: "text",
        name: "school",
        message: "Enter the team interns school:",
      },
    ])
    // destructure name from the prompt object
    .then(({ name, id, email, school }) => {
      this.Intern = new Intern(name, id, email, school);

      Team.push(this.Intern);
      newEmployee();
    });
}
init();
//   .then((portfolioData) => {
//     return generatePage(portfolioData);
//   })
//   .then((pageHTML) => {
//     return writeFile(pageHTML);
//   })
//   .then((writeFileResponse) => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then((copyFileResponse) => {
//     console.log(copyFileResponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
