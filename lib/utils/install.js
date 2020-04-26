const execa = require('execa')
const Promise = require('promise')
const consoles = require('../consoles')
const cmdInstallType = require('./cmd-install-type')
const output = require('./output')

module.exports = function install (opts) {
  const projectName = opts.projectName
  const projectPath = opts.projectPath
  const packages = opts.packages || []

  if (packages.length === 0) {
    console.log('Missing packages in `install`, try running again.')
    process.exit(1)
  }

  const installCmd = cmdInstallType()
  const installArgs = getInstallArgs(installCmd, packages)

  console.log(consoles.installing(packages))
  process.chdir(projectPath)

  return new Promise(function (resolve, reject) {
    const stopInstallSpinner = output.wait('Installing modules')

    execa(installCmd, installArgs).then(function () {
      return execa(installCmd, ['install']) // Confirm that all dependencies were installed
    }).then(function () {
      stopInstallSpinner()
      output.success(`Installed dependencies for ${projectName}`)
      resolve()
    }).catch(function (err) {
      stopInstallSpinner()
      console.log(consoles.installError(packages))
      return reject(new Error(`${installCmd} installation failed`))
    })
  })
}

function getInstallArgs (cmd, packages) {
  if (cmd === 'npm') {
    const args = ['install', '--save', '--save-exact']
    return args.concat(packages, ['--verbose'])
  } else if (cmd === 'yarn') {
    const args = ['add']
    return args.concat(packages)
  }
}
