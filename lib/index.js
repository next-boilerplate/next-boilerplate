const consoles = require('./consoles')
const fs = require('fs')
const downloadExample = require('./utils/download-example')
const path = require('path')
const copyDir = require('./utils/copy-dir')
const install = require('./utils/install')

module.exports = function createNextApp (opts) {
  const projectName = opts.projectName

  if (!projectName) {
    console.log(consoles.missingProjectName())
    process.exit(1)
  }

  if (fs.existsSync(projectName) && projectName !== '.') {
    console.log(consoles.alreadyExists(projectName))
    process.exit(1)
  }
  
  const projectPath = opts.projectPath = process.cwd() + '/' + projectName

  if (opts.example) {
    downloadExample({
      projectName: projectName,
      example: opts.example
    }).then(installWithMessageFactory(opts))
  } else {
    let templatePath

    if (opts.template == "bootstrap") {
      templatePath = path.resolve(__dirname, '../scaffolds/bootstrap')
    } else if (opts.template == "material") {
      templatePath = path.resolve(__dirname, '../scaffolds/material')
    } else if (opts.template == "semantic") {
      templatePath = path.resolve(__dirname, '../scaffolds/semantic')
    } else {
      templatePath = path.resolve(__dirname, '../scaffolds/default')
    }

    copyDir({
      templatePath: templatePath,
      projectPath: projectPath,
      projectName: projectName
    }).then(installWithMessageFactory(opts))
      .catch(function (err) {
        throw err
      })
  }
}

function installWithMessageFactory (opts) {
  const projectName = opts.projectName
  const projectPath = opts.projectPath
  const template = opts.template
  var packagesList = []
  
  if (template === "bootstrap") {
    packagesList = ['react', 'react-dom', 'next', 'react-bootstrap']
  } else if (template === "material") {
    packagesList = ['react', 'react-dom', 'next', 'react-jss', 'prop-types', 'jss', '@material-ui/core']
  } else if (template === "semantic") {
    packagesList = ['react', 'react-dom', 'next', '@zeit/next-css', 'file-loader', 'semantic-ui-css', 'semantic-ui-react', 'url-loader']
  } else {
    packagesList = ['react', 'react-dom', 'next']
  }

  return function installWithMessage () {
    return install({
      projectName: projectName,
      projectPath: projectPath,
      packages: packagesList
    }).then(function () {
      console.log(messages.start(projectName))
    }).catch(function (err) {
      throw err
    })
  }
}
