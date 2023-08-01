// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title: '
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description: '
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation: '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage: '
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license?',
        choices: ['MIT', 'Apache 2.0', 'CC0', 'GNU GPL v3'] // add License information
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contributors: '
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Test instructions: '
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github Username?' // print name and URL. Add email
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Github Email?'
    }
];
const badges = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', 
    'CC0': '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)', 
    'GNU GPL v3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const badge = badges[data.license]
    const text = `# ${data.title}
${badge}

## Description
${data.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under ${data.license}.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
[https://github.com/${data.username}/](https://github.com/${data.username}/)
You can submit additional questions to ${data.email}
`;
    fs.writeFile(fileName, text, (err) => {
        err ? console.log(err) : console.log('Success!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile('./test_README.md', data);
        })
        .catch((error) => {
            console.error(error);
        });
}

// Function call to initialize app
init();