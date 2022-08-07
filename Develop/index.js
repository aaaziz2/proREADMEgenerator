// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const md = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [ 'What is the title of the project?','Provide a short description',
                    'What are the installation instructions?','Provide Usage information',
                    'What are the contribution guidelines?', 'What the test instructions?',
                    'What is your github username?', 'What is your email address?',
                    'What License are you using?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Congrats on your completed Professional README!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: questions[0],
      },
      {
          type: 'input',
          name: 'description',
          message: questions[1],
      },
      {
          type: 'input',
          name: 'install',
          message: questions[2],
      },
      {
          type: 'input',
          name: 'usage',
          message: questions[3],
      },
      {
        type: 'input',
        name: 'contribute',
        message: questions[4],
      },
      {
        type: 'input',
        name: 'tests',
        message: questions[5],
      },
      {
        type: 'input',
        name: 'github',
        message: questions[6],
      },
      {
        type: 'input',
        name: 'email',
        message: questions[7],
      },
      {
        type: 'input',
        name: 'license',
        message: questions[8],
      },
      
    ])
    .then((data) => {
        let file = md.generateMarkdown(data)
        writeToFile('README.md',file)
    });
    
}

// Function call to initialize app
init();
