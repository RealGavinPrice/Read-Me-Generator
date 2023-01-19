// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const licenseGenerator = require ('licenseGenerator');


// TODO: Create a function to initialize app
function init() {
    
// TODO: Create an array of questions for user input

  inquirer
  .prompt([
    {
      type: 'input',
      message: 'Please Enter a Project Title',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is your motivation?',
      name: 'motivation',
    },
    {
      type: 'input',
      message: 'What are you trying to do?',
      name: 'todo',
    },
    {
      type: 'input',
      message: 'What problem does this solve?',
      name: 'problem',
    },
    {
      type: 'input',
      message: 'Awesome. What did you learn?',
      name: 'learn',
    },
    {
        type: 'input',
        message: 'How do you install this? What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'install',
      },
      {
        type: 'input',
        message: 'How do you use this?',
       name: 'usage',
      },
     {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles.', 
       name: 'credit0',
      },
      {
        type: 'input',
        message: 'If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.',
        name: 'credit1',
      },
      {
        type: 'input',
        message: 'If you followed tutorials, include links to those here as well.',
        name: 'credit2',
      },
      {
        type: 'input',
        message: 'What kind of license will your project have?',
        name: 'license',
      },
  ])
  .then(response => {
        console.info('Answer: ', response);

        // TODO: Create a function to write README file
        fs.writeFile(`README.md`, `# ${response.title}

        ## Description
        
       
        ${response.motivation}. 
        ${response.todo}. 
        ${response.problem}. 
        ${response.learn}.
        
        
        
        ## Table of Contents
        
        * [Installation](#installation)
        * [Usage](#usage)
        * [License](#license)
        * [Contributing](#contributing)
        * [Tests](#tests)
        * [Questions](#questions)
        
        ## Installation
        
        ${response.install}
        
        
        ## Usage
        
        ${response.usage}
        
        
        ## License
        
        ${response.license}${licenseBadge.badge}
        
        
        ## Contributing
        
        > Collaborators
        ${response.credit0}

        > Third Party Assets
        ${response.credit1}

        > Tutorials Used
        ${response.credit2}

        ## Tests
        
        This project has no tests... yet!    
        
        
        ## Questions
        
        For more information, please contact the developer in the great mainframe with the name price.gavin@gmail.com.`, (err) => err ? console.error(err) : console.log('Your HTML page has just been created.'))
  });


  function licenseBadge(license) {
    const badgeMapping = {
    "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "Apache 2.0": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "GPL 3.0": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "BSD 3": "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    "LGPL 3.0": "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
  }
  let badge = badgeMapping[license] || " ";
  return badge;}
  

}
// function writeToFile(fileName, data) {






// Function call to initialize app
init();







