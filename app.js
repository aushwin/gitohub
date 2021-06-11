#!/usr/bin/env node
const {Octokit} = require('@octokit/core')
const github =require('./lib/github')


const run = async() => {
    let token = await github.getStoredGithubToken()
    if(!token) {
        token = await github.getPersonalAccessToken()
    }
    const octokit = new Octokit({ auth: token });
    await octokit.request('GET /user/repos').then((value)=>console.log(value))
    console.log(`Token is\n${JSON.stringify(token)}`)
}
run ()