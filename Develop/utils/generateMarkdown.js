const licenseInfo = [
    {id:'MIT', name:'MIT License', badge: '', link: ''},
    {id:'GNU', name:'GNU GPLv3 License',badge: '', link: ''},
    {id:'ISC', name:'ISC License', badge:'', link:''},
    {id:'APA', name:'Apache License 2.0', badge:'', link:''}
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

  ${data.github}
  Please reach out to me at ${data.email}
  `
}

module.exports = {generateMarkdown}
