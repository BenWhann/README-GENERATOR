// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the name of your project.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.',
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Provide the appropriate file path to your image of choice.',
    },
    {
        type: 'input',
        name: 'link',
        message: 'Provide your active deployment URL.',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Enter the license that you are using for this project.',
        choices: ['MIT', 'APACHE 2.0', 'MPL2.0', 'BSD2', 'BSD3', 'Boost1.0', 'None'],
    },
    {
        type: 'input',
        name: 'require',
        message: 'Enter any project dependencies that were used.',
    },
    {
        type: 'input',
        name: 'features',
        message: 'Enter the core features of your prject.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the languages and/or technologies that were used.',
    },
    {
        type: 'input',
        name: 'creator',
        message: 'Enter your GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter a valid email address.',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Include any contributors GitHub handles here',
        default: '',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Give a walkthrough of required tests.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses => {
        console.log('Generating README file...');
        writeToFile('./README.md', generateMarkdown({ ...responses }));
    }));
}

// Function call to initialize app
init();
