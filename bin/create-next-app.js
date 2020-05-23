#! /usr/bin/env node

const program = require('commander')
const pkg = require('../package.json')
const chalk = require('chalk')
const lib = require('..')

const consoles = lib.consoles
const createNextApp = lib.createNextApp

let projectName
let templateName

program
  .version(pkg.version)
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')} [options]`)
  .action(function (name) {
    projectName = name
  })
  .option('-t, --template <templateName>', consoles.template())
  .option('-e, --example <example-path>', consoles.example())
  .allowUnknownOption()
  .on('--help', consoles.help)
  .parse(process.argv)

const example = program.example
const template = program.template

createNextApp({
  projectName,
  template,
  example
})
