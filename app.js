#!/usr/bin/env node
// const Configstore = require('configstore')
// const conf = new Configstore('init')

const inquirer = require('./lib/inquirer')
const run = async() => {
    const credentials = await inquirer.getGithubCredentials()
    console.log(credentials)
}
run ()