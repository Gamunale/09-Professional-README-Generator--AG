
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "name",
    message: "Project's name?",
  },
  {
    type: "list",
    name: "license",
    message: "Want License Badge?",
    choices: [
      new inquirer.Separator(),
      "MIT",
      new inquirer.Separator(),
      "GPLv3",
      new inquirer.Separator(),
      "AGPL",
      new inquirer.Separator(),
    ],
  },
  {
    type: "input",
    name: "description",
    message: "Describe project.",
  },

  {
    type: "editor",
    name: "installationInstructions",
    message:
      "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "test",
    message: "Command to test the project?",
  },
  {
    type: "input",
    name: "gitHub",
    message: "GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Email address:",
  },
  {
    type: "input",
    name: "contributors",
    message: "Type contributors:",
  },
];

function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile(
      "Example_ReadMe.md",
      generateMarkdown({
        ...answers,
      })
    );
  });
}

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

init();

