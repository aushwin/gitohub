#!/usr/bin/env node
const Conf = require('conf')
const config = new Conf()

const inquirer = require('./lib/inquirer')
const github =require('./lib/github')
const run = async() => {
    let token = await github.getStoredGithubToken()
    if(!token) {
        token = await github.getPersonalAccessToken()
    }
    console.log(`Token is\n${JSON.stringify(token)}`)

}
run ()