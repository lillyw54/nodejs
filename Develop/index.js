// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require("fs")

inquirer
  .prompt([
    {
        type: "input",
        name: "title",
        message: "What is the project title?"
    }
    {
        type: "input",
        name: "description",
        message: "What is the description?"
    },
  ])
  .then((answers) => {
    console.log(answers);

var template = `
# ${answers.title}

## Description
${answers.description}

## Installation
just run npm install`

// console.log(template)

fs.writeFile("README.md", template, function() {
    console.log("Successful!")
})

  })

  

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

