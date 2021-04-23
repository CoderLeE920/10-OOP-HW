const fs = require("fs");
const inquirer = require("inquirer");


const manager = require("./Lib/manager")
const engineer = require("./Lib/engineer")
const intern = require("./Lib/intern")
const employee = new employee;

function startingPrompt() {
  inquirer.prompt([
    {
      message: "Welcome, please write your team name:",
      name: "teamname"
    }
  ])
    .then(function (data) {
      const teamName = data.teamname
      finalTeamArray.push(teamName)
      addManager();
    })

  const teamMember = [];

  const addManager = [{
    type: 'input',
    name: 'name',
    message: "What is the team manager's name?",
  },
  {
    type: "input",
    name: "name",
    message: "What is the team manager's id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the team manager's email?"
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the team manager's office number?",
  },
  {
    type: "input",
    name: "members",
    message: "Do you want to add a team members? If yes, select their role",
    choices: ["Engineer", "Intern", "I'm done."],
  },
