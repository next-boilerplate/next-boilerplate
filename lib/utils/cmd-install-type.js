const execa = require('execa')

let cmd

module.exports = function cmdInstallType () {
  if (cmd) {
    return cmd
  }

  try {
    execa.shellSync('yarnpkg --version')
    cmd = 'yarn'
  } catch (e) {
    cmd = 'npm'
  }

  return cmd
}
