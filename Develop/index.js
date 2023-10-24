// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require("fs");

inquirer
  .prompt([
    // Project Title
    {
      type: "input",
      name: "title",
      message: "What is the project title?"
    },
    // Description
    {
      type: "input",
      name: "description",
      message: "What is the description?"
    },
    // Installation instructions
    {
      type: "input",
      name: "installation instructions",
      message: "What are your installation instructions?"
    },
    // Usage
    {
      type: "input",
      name: "usage",
      message: "What is the usage?"
    },
    // Contribution Guidelines
    {
      type: "input",
      name: "contribution",
      message: "What are the contribution guidelines?"
    },
    // Test Instructions
    {
      type: "input",
      name: "tests",
      message: "What are the test instructions?"
    }
  ])
  .then((answers) => {
    console.log(answers);
    var template = `
# ${answers.title}

## Description
${answers.description}

## Installation
Just run npm install

### Usage
${answers.usage}

#### Contribution Guidelines
${answers.contribution}

##### Test Instructions
${answers.tests}
`;
    fs.writeFile("README.md", template, function() {
      console.log("Successful!");
    });
  });

  

//   project title, 
//   description, 
//   installation instructions, 
//   usage information, 
//   contribution guidelines, 
//   test instructions












// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

