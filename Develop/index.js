// TODO: Include packages needed for this application
// Inquirer to ask questions
const inquirer = require('inquirer');
// fs to write/create our file
const fs = require('fs');
// to import method from the generateMarkdown file
const util = require('./utils/generateMarkdown.js')

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
        type: 'list',
        name: 'license',
        choices:['MIT','GNU','ISC','APA','None'],
        message: questions[8],
      },
      
    ])
    .then((data) => {
        // generate markdown text using the imported method
        let file = util.generateMarkdown(data)
        // create and write to the file
        writeToFile('README.md',file)
    });
    
}

// Function call to initialize app
init();
