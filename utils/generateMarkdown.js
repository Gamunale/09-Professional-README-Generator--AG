// creat the markdown!!!!!!!!!
function generateMarkdown(answers) {
    return `# Project:
  ${answers.name}
  
  ## Table of Contents: 
  - [Name](#name)
  - [License](#license)
  - [Description](#description)
  - [Installation Instructions](#installationInstructions)
  - [Test](#test)
  - [GitHub](#gitHub)
  - [Email](#email)
  - [Contributors](#contributors)
  
  ## License:
  [![License:${answers.license}](https://img.shields.io/badge/License-${answers.license}-yellow.svg)](https://opensource.org/licenses/${answers.license})
  
  ## Description:
  ${answers.description}
  
  ## Images:
  ![Project Screenshot](./imagePathHere.png)
  
  ![Project Screenshot](./imagePathHere.png)
  
  ![Project Screenshot](./imagePathHere.png)
  
  ## Installation Instructions: 
  ${answers.installationInstructions}
  
  ## Test Command: 
  To test type ${answers.test} into the terminal
  
  ## My Github Username: 
  Check out more project on my Github at https://github.com/${answers.gitHub}
  
  ## My Email Address:
  If you have any question please feel free to email me at ${answers.email}
  
  ## Other Contributors:
  ${answers.contributors}
  `;
  }
  
  module.exports = generateMarkdown;
  