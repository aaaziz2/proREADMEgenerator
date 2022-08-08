const licenseInfo = [
    {id:'MIT', name:'MIT License', badge: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`, link: 'https://opensource.org/licenses/MIT'},
    {id:'GNU', name:'GNU GPLv3 License',badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)', link: 'https://www.gnu.org/licenses/gpl-3.0'},
    {id:'ISC', name:'ISC License', badge:'[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)', link:'https://opensource.org/licenses/ISC'},
    {id:'APA', name:'Apache License 2.0', badge:`[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`, link:'https://opensource.org/licenses/Apache-2.0'}
]


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license){
    for(licenses of licenseInfo){
      if(license == licenses.id){
        return licenses.badge
      }
    }
  }
  else{
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license){
    for(licenses of licenseInfo){
      if(license == licenses.id){
        return licenses.link
      }
    }
  }
  else{
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    for(licenses of licenseInfo){
      if(license == licenses.id){
        return licenses.name
      }
    }
  }
  else{
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#how-to-contribute)
  - [Tests](#tests)
  
  ## Installation
  
  ${data.install}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## How to Contribute

  ${data.contribute}
  
  ## Tests
  
  ${data.tests} 
          
  ## Questions?

  ${data.github} \n
  Please reach out to me at ${data.email}
  `
}

module.exports = {generateMarkdown}
