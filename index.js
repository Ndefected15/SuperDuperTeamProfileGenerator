// Page Generator
const generateHTML = require("./src/generateHTML");

// Node Modules
const inquirer = require("inquirer");
const fs = require("fs");

//Team Members
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//Team Array
const Team = [];

const newManager = () => {
  inquirer
    .prompt([
      {
        type: "text",
        name: "name",
        message: "Enter the team managers name:",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the manager's name!");
            return false;
          }
        },
      },
      {
        type: "text",
        name: "id",
        message: "Enter the team managers id:",
      },
      {
        type: "text",
        name: "email",
        message: "Enter the team managers email:",
      },
    ])
    .then(({ name, id, email }) => {
      this.Manager = new Manager(name, id, email);
      Team.push(this.Manager);
      newEmployee();
    });
};

const newEmployee = () => {
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
};

const newEngineer = () => {
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
};

const newIntern = () => {
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
};

newManager();
// .then((Team) => {
//   return generateHTML(Team);
// })
// .then((pageHTML) => {
//   return writeFile(pageHTML);
// })
// .catch((err) => {
//   console.log(err);
// });
